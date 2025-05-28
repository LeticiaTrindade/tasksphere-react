import React from 'react';
import { FaCheckCircle, FaHourglassHalf, FaTimesCircle, FaProjectDiagram } from 'react-icons/fa';
import * as Atoms from '../../Atoms';

function getStatusIcon(status) {
  switch (status) {
    case 'Concluído':
      return <FaCheckCircle color="green" />;
    case 'Em andamento':
      return <FaHourglassHalf color="orange" />;
    case 'Pendente':
      return <FaTimesCircle color="red" />;
    default:
      return <FaProjectDiagram />;
  }
}

export default function TaskItem({ task, canEditOrDelete, onEdit, onDelete }) {
  return (
    <Atoms.Box display="flex" alignItems="center" justifyContent="space-between" mb={2} p={2} border="1px solid #ccc" borderRadius="4px">
      <Atoms.Box display="flex" alignItems="center">
        <Atoms.Icon size="20px" mr={2}>
          {getStatusIcon(task.status)}
        </Atoms.Icon>
        <Atoms.Text>{task.name}</Atoms.Text>
      </Atoms.Box>
      
      {canEditOrDelete && (
        <Atoms.Box>
          <button onClick={onEdit}>Editar</button>
          <button onClick={onDelete}>Excluir</button>
        </Atoms.Box>
      )}
    </Atoms.Box>
  );
}
