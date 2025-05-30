import React from 'react';
import { doc, deleteDoc, updateDoc} from 'firebase/firestore';
import { db } from '../../../../config/firebase';
import * as Atoms from '../../../Atoms';
import * as Molecules from '../..';
import { getAuth } from "firebase/auth";


export default function TaskList({ tasks, projects, project, collaborators, setTasks, getTasks }) {


    if (!tasks || !Array.isArray(tasks)) {
        console.warn("TaskList recebeu uma prop 'tasks' inválida:", tasks);
        return <p>Nenhuma tarefa disponível.</p>;
    }
    async function handleDeleteTask(taskId) {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir esta tarefa?");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "tasks", taskId));
            alert("Tarefa excluída com sucesso!");
           await getTasks();
        } catch (error) {
            console.error("Erro ao excluir tarefa:", error);
            alert("Erro ao excluir tarefa.");
        }
    }

   async function handleEditTask(task) {
    const newName = prompt("Digite o novo nome da tarefa:", task.name);
    const newDescription = prompt("Digite a nova descrição:", task.description);

    const statusOptions = {
        "1": "todo",
        "2": "in_progress",
        "3": "done"
    };

    const statusChoice = prompt(
        "Escolha o novo status:\n1 - A Fazer\n2 - Em Progresso\n3 - Concluído",
        "1"
    );

    const newStatus = statusOptions[statusChoice];

    if (!newName || !newStatus) {
        alert("Nome ou status inválido.");
        return;
    }

    try {
        await updateDoc(doc(db, "tasks", task.id), {
            name: newName,
            description: newDescription,
            status: newStatus
        });
        alert("Tarefa atualizada com sucesso!");
        await getTasks();
    } catch (error) {
        console.error("Erro ao editar tarefa:", error);
        alert("Erro ao editar tarefa.");
    }
}


    const auth = getAuth();
    const currentUser = auth.currentUser;

    const isCreator = project?.created_by === currentUser?.uid;

    return (
        <Atoms.Box>
            <Atoms.Text variant="titleLogin">Tarefas</Atoms.Text>
            {tasks.map(task => {
                const canEditOrDelete = isCreator || task.created_by === currentUser?.uid;

                return (
                    <Molecules.TaskItem
                        key={task.id}
                        task={task}
                        projects={projects}
                        canEditOrDelete={canEditOrDelete}
                        onEdit={() => handleEditTask(task)}
                        onDelete={() => handleDeleteTask(task.id)}
                    />
                );
            })}
        </Atoms.Box>
    );
}
