import * as Atoms from '../../../Atoms';
import formatDate from '../../../../utils/formatDate';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle } from 'react-icons/fa'; // Ícones para status

function TaskItem({ task, projects, canEditOrDelete, onEdit, onDelete }) {
  if (!task) return null;

  const project = Array.isArray(projects) ? projects.find(p => p.id === task.project_id) : null;
  const projectName = project ? project.name : 'Projeto não encontrado';

  const statusText = {
    todo: 'A Fazer',
    in_progress: 'Em Progresso',
    done: 'Concluído'
  };

  const statusLabel = statusText[task.status] || 'Desconhecido';

  // Função que retorna o ícone de acordo com o status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'done':
        return <FaCheckCircle color="green" />;
      case 'in_progress':
        return <FaHourglassHalf color="orange" />;
      case 'todo':
        return <FaTimesCircle color="red" />;
      default:
        return null;
    }
  };

  return (
    <Atoms.Card>
      <Atoms.Text as="h3" variant="subtitle" marginBottom="0.5rem">
        {task.name}
      </Atoms.Text>

      {canEditOrDelete && (
        <Atoms.Box className="flex gap-2">
          <Atoms.Button className="btn btn-sm btn-primary" onClick={() => onEdit(task)} aria-label="Editar tarefa">Editar</Atoms.Button>
          <Atoms.Button className="btn btn-sm btn-danger" onClick={() => onDelete(task)} aria-label="Excluir tarefa">Excluir</Atoms.Button>
        </Atoms.Box>
      )}

      <Atoms.Box>
        <Atoms.Icon size="20px" color="gray"/>
        <Atoms.Text>{statusLabel}</Atoms.Text>
        {getStatusIcon(task.status)}
      </Atoms.Box>

      <Atoms.Text marginBottom="0.25rem">
        <Atoms.Text as="strong">Vencimento:</Atoms.Text> {formatDate(task.due_date)}
      </Atoms.Text>

      <Atoms.Text>
        <Atoms.Text as="strong">Projeto:</Atoms.Text> {projectName}
      </Atoms.Text>
    </Atoms.Card>
  );
}

export default TaskItem;
