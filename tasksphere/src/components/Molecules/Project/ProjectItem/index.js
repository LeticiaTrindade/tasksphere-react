import { useNavigate } from 'react-router-dom';
import * as Atoms from '../../../Atoms';

function formatDate(date) {
    if (!date) return 'Não informado';
    if (date.seconds) {
        return new Date(date.seconds * 1000).toLocaleDateString();
    }
    const parsedDate = new Date(date);
    if (!isNaN(parsedDate)) {
        return parsedDate.toLocaleDateString();
    }
    return 'Data inválida';
}

function ProjectItem({ project, compact = false }) {
    const navigate = useNavigate();
    if (!project) return null;

    const handleViewProject = () => {
        navigate(`/projects/${project.id}`);
    };

    const truncate = (text, limit) =>
        text.length > limit ? text.slice(0, limit) + '...' : text;

    return (
        <Atoms.Card>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>
                {truncate(project.name, 30)}
            </h2>

            {project.description && compact && (
                <p>{truncate(project.description, 60)}</p>
            )}

            {!compact && project.description && (
                <p>{project.description}</p>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', fontSize: '0.95rem', color: '#666' }}>
                <p><strong>Início:</strong> {formatDate(project.start_date)}</p>
                <p><strong>Término:</strong> {formatDate(project.end_date)}</p>
            </div>

            {!compact && (
                <Atoms.Text>
                    <Atoms.Text variant='titleLogin'>Colaboradores:</Atoms.Text>{' '}
                    {project.collaborators && project.collaborators.length > 0
                        ? project.collaborators.join(', ')
                        : 'Nenhum'}
                </Atoms.Text>
            )}

            <Atoms.Box >
                <Atoms.Button onClick={handleViewProject}>
                    Ver Projeto
                </Atoms.Button>
            </Atoms.Box>
        </Atoms.Card>
    );
}

export default ProjectItem;
