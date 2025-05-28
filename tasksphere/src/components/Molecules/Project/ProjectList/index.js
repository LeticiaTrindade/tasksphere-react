import List from '../../List';
import ProjectItem from '../ProjectItem';


export default function ProjectList({ projects }) {
  if (!projects || !Array.isArray(projects)) {
    console.warn("ProjectList received invalid 'projects' prop:", projects);
    return <p>Nenhum Projeto disponível.</p>;
  }

  return (
    <List title="Projetos">
      {projects.map(project => (
        <ProjectItem
          key={project.id}
          project={project}
          compact={true}
        />
      ))}
    </List>
  );
}
