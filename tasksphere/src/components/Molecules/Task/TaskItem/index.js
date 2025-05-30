import * as Atoms from '../../../Atoms';
import formatDate from '../../../../utils/formatDate';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle,FaPencilAlt  } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";

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
    <Atoms.Box variant='card'>
      <Atoms.Text as="h3" variant="subtitle" marginBottom="0.5rem">
        {task.name}
      </Atoms.Text>

      <Atoms.Flex style={{justifyContent: 'center', alignItems: 'center'}}>
        {getStatusIcon(task.status)}
        <Atoms.Text>{statusLabel}</Atoms.Text>
      </Atoms.Flex>

      <Atoms.Text marginBottom="0.25rem">
        <Atoms.Text as="strong">Vencimento:</Atoms.Text> {formatDate(task.due_date)}
      </Atoms.Text>

       {canEditOrDelete && (
        <Atoms.Box >
          <Atoms.Button className="btn btn-sm btn-primary" onClick={() => onEdit(task)} aria-label="Editar tarefa"><FaPencilAlt color='white' /> Editar</Atoms.Button>
          <Atoms.Button className="btn btn-sm btn-danger" onClick={() => onDelete(task)} aria-label="Excluir tarefa"><MdDeleteForever  coler='white'/> Excluir</Atoms.Button>
        </Atoms.Box>
      )}
    </Atoms.Box>
  );
}

export default TaskItem;
