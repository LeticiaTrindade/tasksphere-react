import { useNavigate } from 'react-router-dom';
import * as Atoms from '../../../Atoms';
import formatDate from '../../../../utils/formatDate';


function ProjectItem({ project, compact = false }) {
    const navigate = useNavigate();
    if (!project) return null;

    const handleViewProject = () => {
        navigate(`/projects/${project.id}`);
    };

    const truncate = (text, limit) =>
        text.length > limit ? text.slice(0, limit) + '...' : text;

    return (
        <Atoms.Box variant='card'>
            <Atoms.Text variant='title'>
                {truncate(project.name, 30)}
            </Atoms.Text>

            {project.description && compact && (
               <Atoms.Text>{truncate(project.description, 60)}</Atoms.Text>
            )}

            {!compact && project.description && (
                <p>{project.description}</p>
            )}
    
            <Atoms.Box style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '0.95rem', color: '#666' }}>
                <Atoms.Text><strong>Início:</strong> {formatDate(project.start_date)}</Atoms.Text>
                <Atoms.Text><strong>Término:</strong> {formatDate(project.end_date)}</Atoms.Text>
            </Atoms.Box>

            {!compact && (
                <Atoms.Text>
                    <Atoms.Text variant='titleLogin'>Colaboradores:</Atoms.Text>{' '}
                    {project.collaborators && project.collaborators.length > 0
                        ? project.collaborators.join(', ')
                        : 'Nenhum'}
                </Atoms.Text>
            )}

            <Atoms.Box >
                <Atoms.Button onClick={handleViewProject} aria-label="Ver mais detalhes do projeto">
                    Ver Projeto
                </Atoms.Button >
            </Atoms.Box>
        </Atoms.Box>
    );
}

export default ProjectItem;
