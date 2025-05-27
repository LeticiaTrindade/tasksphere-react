import * as Atoms from '../../../Atoms';
import formatDate from '../../../../utils/formatDate';

function TaskItem({task, projects, canEditOrDelete, onEdit, onDelete   }) {
  if (!task) return null;

  const project = Array.isArray(projects) ? projects.find(p => p.id === task.project_id) : null;
  const projectName = project ? project.name : 'Projeto não encontrado';

  const statusText = {
    todo: 'A Fazer',
    in_progress: 'Em Progresso',
    done: 'Concluído'
  };

  const statusLabel = statusText[task.status] || 'Desconhecido';

  return (
    <Atoms.Card  >
      <Atoms.Text as="h3" variant="subtitle" marginBottom="0.5rem">
        {task.name}
      </Atoms.Text>
      {canEditOrDelete && (
  <div className="flex gap-2">
    <Atoms.Button className="btn btn-sm btn-primary" onClick={() => onEdit(task)}>Editar</Atoms.Button>
    <Atoms.Button className="btn btn-sm btn-danger" onClick={() => onDelete(task)}>Excluir</Atoms.Button>
  </div>
)}
      <Atoms.Flex alignItems="center" gap="0.5rem" marginBottom="0.5rem">
        <Atoms.Text as="strong">Status:</Atoms.Text>
        {task.image_url && (
          <img
            src={task.image_url}
            alt={`Status: ${statusLabel}`}
            width="16px"
            height="16px"
          />
        )}
        <Atoms.Text>{statusLabel}</Atoms.Text>
      </Atoms.Flex>

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
