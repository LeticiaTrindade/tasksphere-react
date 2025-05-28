import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { DashboardLayout } from '../../components/Templates';
import Header from '../../components/Molecules/Header';
import ProjectDetails from '../../components/Organisms/ProjectDetails';
import * as Atoms from '../../components/Atoms';

export default function ProjectDetailsPage() {
  const { projectId } = useParams();

  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [collaborators, setCollaborators] = useState([]);

  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const fetchProject = async () => {
    try {
      const q = query(collection(db, 'projects'), where('__name__', '==', projectId));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        setProject({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() });
      } else {
        setProject(null);
      }
    } catch (error) {
      console.error('Erro ao buscar projeto:', error);
      setProject(null);
    }
  };

  // Fetch tasks
  const fetchTasks = async () => {
    const q = query(collection(db, 'tasks'), where('project_id', '==', projectId));
    const snapshot = await getDocs(q);
    const tasksList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTasks(tasksList);
  };

  // Fetch collaborators
  const fetchCollaborators = async (projectId) => {
    const snapshot = await getDocs(collection(db, `projects/${projectId}/collaborators`));
    const collaboratorsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setCollaborators(collaboratorsList);
  };

  useEffect(() => {
    if (projectId) {
      fetchProject();
      fetchTasks();
    }
  }, [projectId]);

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
        <Atoms.SkeletonLoader />
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
