import React, { useState, useContext } from 'react';
import formatDate from '../../../utils/formatDate';
import * as Molecules from '../../Molecules';
import * as MoleculesTasks from '../../Molecules';
import * as Atoms from '../../Atoms';
import { addDoc, collection, doc, setDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import AuthContext from '../../../auth/AuthContext';
import { FaUser, FaPlus, FaSearch, FaFilter, FaProjectDiagram } from 'react-icons/fa';

function ProjectDetails({
    project,
    tasks,
    collaborators,
    setCollaborators,
    filter,
    setFilter,
    search,
    setSearch,
    setTasks
}) {

    const handleAddCollaborator = async (user) => {
        if (collaborators.some(c => c.id === user.id)) {
            alert("Colaborador já adicionado!");
            return;
        }
        const collabRef = doc(db, `projects/${project.id}/collaborators/${user.id}`);
        await setDoc(collabRef, user);
        alert('Colaborador adicionado com sucesso!');

        const snapshot = await getDocs(collection(db, `projects/${project.id}/collaborators`));
        const newCollaboratorsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCollaborators(newCollaboratorsList);
    };
    const getTasks = async () => {
        if (!user) return;
        const q = query(collection(db, 'tasks'), where('project_id', '==', project.id));
        const querySnapshot = await getDocs(q);
        const tasksData = [];
        querySnapshot.forEach((doc) => {
            tasksData.push({ id: doc.id, ...doc.data() });
        });
        setTasks(tasksData);
    }

    const { user } = useContext(AuthContext);
    const [newTaskName, setNewTaskName] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newDueDate, setNewDueDate] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('');
    const tasksPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const loading = !project || !tasks || !collaborators;
    const filteredTasks = tasks
        .filter(task => filter ? task.status === filter : true)
        .filter(task => task.name.toLowerCase().includes(search.toLowerCase()));
    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);
    const totalPages = Math.ceil(filteredTasks.length / tasksPerPage);
    const addTask = async () => {
        if (newTaskName.length < 3) return alert('Nome da tarefa deve ter pelo menos 3 caracteres');
        if (!newDueDate) return alert('Vencimento obrigatório');
        if (!newStatus) return alert('Status obrigatório');

        try {
            await addDoc(collection(db, 'tasks'), {
                name: newTaskName,
                description: newDescription,
                due_date: newDueDate,
                status: newStatus,
                image_url: newImageUrl,
                project_id: project.id,
                created_by: user.uid
            });

            alert('Tarefa adicionada com sucesso!');

            setNewTaskName('');
            setNewDescription('');
            setNewDueDate('');

            await getTasks();

        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
            alert('Erro ao adicionar tarefa. Tente novamente.');
        }
    };

    return (
        <>
            <Atoms.Heading  as="h1">{project.name}</Atoms.Heading>

            <Atoms.Flex>
                <Atoms.Text variante="subTitle"><strong>Início:</strong> {formatDate(project.start_date)} | <strong>Término:</strong> {formatDate(project.end_date)}</Atoms.Text>

            </Atoms.Flex>

            <Atoms.Flex>
                <Atoms.Card>
                    <Atoms.Text variant="titleLogin" className="mb-2">Detalhes do Projeto</Atoms.Text>
                    <Atoms.Text className="mb-2">{project.description}</Atoms.Text>

                    <Atoms.Box className="mt-4">
                        <Atoms.Text variant="titleLogin" className="mb-2">Colaboradores:</Atoms.Text>
                        {collaborators.length > 0 ? (
                            <ul className="list-disc list-inside">
                                {collaborators.map(user => (
                                    <li key={user.id}>
                                        <Atoms.Icon name="user" /> {user.name ? user.name : "Nome não disponível"} - {user.email ? user.email : "Email não disponível"}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <Atoms.Text className="text-sm text-gray-500">Nenhum colaborador encontrado.</Atoms.Text>
                        )}
                    </Atoms.Box>

                    <Molecules.UserSuggestions onAdd={handleAddCollaborator} />
                </Atoms.Card>

                <MoleculesTasks.TaskForm
                    newTaskName={newTaskName}
                    setNewTaskName={setNewTaskName}
                    newDescription={newDescription}
                    setNewDescription={setNewDescription}
                    newDueDate={newDueDate}
                    setNewDueDate={setNewDueDate}
                    newStatus={newStatus}
                    setNewStatus={setNewStatus}
                    addTask={addTask}
                />
                <Atoms.Card>
                    <Molecules.FilterSelect filter={filter} setFilter={setFilter} />
                    <Molecules.SearchInput search={search} setSearch={setSearch} />

                    <Molecules.TaskList
                        tasks={currentTasks}
                        projects={[project]}
                        project={project}
                        collaborators={collaborators}
                        setTasks={setTasks}
                        getTasks={getTasks}
                    />

                    <Molecules.Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </Atoms.Card>
            </Atoms.Flex>
        </>
    );
}

export default ProjectDetails;
