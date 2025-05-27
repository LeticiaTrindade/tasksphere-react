import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

import { DashboardLayout } from '../../components/Templates';
import Header from '../../components/Molecules/Header';
import ProjectDetails from '../../components/Organisms/ProjectDetails';

export default function ProjectDetailsPage() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [collaborators, setCollaborators] = useState([]);

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  // Funções assíncronas de busca
  const fetchProject = async () => {
    const q = query(collection(db, 'projects'), where('__name__', '==', projectId));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      setProject({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
    } else {
      setProject(null);
    }
  };

  const fetchTasks = async () => {
    console.log('passou aqui emo projectdetailspage1');
    const q = query(collection(db, 'tasks'), where('project_id', '==', projectId));
    const snapshot = await getDocs(q);
    const tasksList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('passou aqui emo projectdetailspage2');
    setTasks(tasksList);
  };

  const fetchCollaborators = async (projectId) => {
    const snapshot = await getDocs(collection(db, `projects/${projectId}/collaborators`));
    const collaboratorsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCollaborators(collaboratorsList);
  };

  // useEffect para carregar tudo ao montar o componente
  useEffect(() => {
    if (projectId) {
      fetchProject();
      fetchTasks();
    }
  }, [projectId]);

  // useEffect para carregar os colaboradores assim que o projeto for carregado
  useEffect(() => {
    if (project && project.id) {
      fetchCollaborators(project.id);
    }
  }, [project]);

  if (project === null) {
    return (
      <DashboardLayout>
        <Header />
        <p>Projeto não encontrado.</p>
      </DashboardLayout>
    );
  }

  if (!project || !tasks) {
    return (
      <DashboardLayout>
        <Header />
        <p>Carregando...</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Header />
      <ProjectDetails
        project={project}
        tasks={tasks}
        collaborators={collaborators}
        setCollaborators={setCollaborators}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        setTasks={setTasks}
      />
    </DashboardLayout>
  );
}
