import * as Atoms from '../../../Atoms';

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
    return (
        <Atoms.Card>
            <Atoms.Text as="h2">Criar nova tarefa</Atoms.Text>

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
            <select
                value={newStatus}
                onChange={e => setNewStatus(e.target.value)}
            >
                <option value="">Selecione o status</option>
                <option value="todo">A Fazer</option>
                <option value="in_progress">Em Progresso</option>
                <option value="done">Concluído</option>
            </select>

            <Atoms.Button onClick={addTask}>
                Adicionar Tarefa
            </Atoms.Button>
        </Atoms.Card>
    );
}
export default TaskForm;