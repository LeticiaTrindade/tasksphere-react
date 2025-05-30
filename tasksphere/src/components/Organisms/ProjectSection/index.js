import * as Molecules from '../../Molecules';
import * as Atoms from '../../Atoms';
import React, { useState, useEffect, useContext } from 'react';
import { query, collection, getDocs, where, addDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import AuthContext from '../../../auth/AuthContext';


function ProjectSection() {
    const { user } = useContext(AuthContext);
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const [newProject, setNewProject] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newStartDate, setNewStartDate] = useState('');
    const [newEndDate, setNewEndDate] = useState('');

    const getProjects = async () => {
        if (!user) return;
        const q = query(collection(db, 'projects'), where('creator_id', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const projectsData = [];
        querySnapshot.forEach((doc) => {
            projectsData.push({ id: doc.id, ...doc.data() });
        });
        setProjects(projectsData);
    }

    const addProject = async () => {
        if (newProject.length < 3) return alert('Nome do projeto deve ter pelo menos 3 caracteres');
        if (!newStartDate || !newEndDate) return alert('Datas obrigatórias');
        if (new Date(newEndDate) <= new Date(newStartDate)) return alert('Data de término deve ser após a data de início');

        await addDoc(collection(db, 'projects'), {
            name: newProject,
            description: newDescription,
            start_date: newStartDate,
            end_date: newEndDate,
            creator_id: user.uid,
            collaborators: []
        });

        alert('Projeto adicionado com sucesso!');
        setNewProject('');
        setNewDescription('');
        setNewStartDate('');
        setNewEndDate('');
        setCurrentPage(1); 

        await getProjects();
    }

    useEffect(() => {
        getProjects();
    }, [user]);

    const totalPages = Math.ceil(projects.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    return (
        <Atoms.Flex>
            <Molecules.ProjectForm
                newProject={newProject}
                setNewProject={setNewProject}
                newDescription={newDescription}
                setNewDescription={setNewDescription}
                newStartDate={newStartDate}
                setNewStartDate={setNewStartDate}
                newEndDate={newEndDate}
                setNewEndDate={setNewEndDate}
                addProject={addProject}
            />
            <Atoms.Card>
                <Molecules.ProjectList projects={currentProjects} />

                <Molecules.Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </Atoms.Card>
        </Atoms.Flex>
    );
}

export default ProjectSection;