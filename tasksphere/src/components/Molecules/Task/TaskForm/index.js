import * as Atoms from '../../../Atoms';
import Form from '../../Form';

function TaskForm({ 
    newTaskName,
    setNewTaskName,
    newDescription,
    setNewDescription,
    newDueDate,
    setNewDueDate,
    newStatus,
    setNewStatus,
    addTask
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Atoms.Heading as="h2">Criar nova tarefa</Atoms.Heading>

            <Atoms.Input
                type="text"
                value={newTaskName}
                onChange={e => setNewTaskName(e.target.value)}
                placeholder="Nome da Tarefa"
            />
            <Atoms.Input
                type="text"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder="Descrição da Tarefa"
            />
            <Atoms.Input
                type="date"
                value={newDueDate}
                onChange={e => setNewDueDate(e.target.value)}
            />

            <Atoms.Select
                value={newStatus}
                onChange={e => setNewStatus(e.target.value)}
            >
                <option value="">Selecione o status</option>
                <option value="todo">A Fazer</option>
                <option value="in_progress">Em Progresso</option>
                <option value="done">Concluído</option>
            </Atoms.Select>

            <Atoms.Button type="submit" aria-label="Adicionar tarefa">
                Adicionar Tarefa
            </Atoms.Button>
        </Form>
    );
}

export default TaskForm;
