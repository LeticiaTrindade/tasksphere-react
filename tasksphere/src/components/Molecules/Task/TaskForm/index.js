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
        <Form variant='tasks' onSubmit={handleSubmit}>
            <Atoms.Heading as="h2">Criar nova tarefa</Atoms.Heading>

            <Atoms.Text variant='description'>Nome da tarefa:</Atoms.Text>
            <Atoms.Input
                type="text"
                value={newTaskName}
                onChange={e => setNewTaskName(e.target.value)}
                placeholder="Digite aqui o nome da Tarefa"
            />
            <Atoms.Text variant='description'>Descrição da tarefa:</Atoms.Text>
            <Atoms.Input
                type="text"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder="Digite aqui a descrição da Tarefa"
            />
            <Atoms.Text variant='description'>Data do prazo da tarefa:</Atoms.Text>
            <Atoms.Input
                type="date"
                value={newDueDate}
                onChange={e => setNewDueDate(e.target.value)}
            />
<Atoms.Text variant='description'>Escolha o status da tarefa:</Atoms.Text>
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