import List from '../../List';
import ProjectItem from '../ProjectItem';
import * as Atoms from '../../../Atoms';


export default function ProjectList({ projects }) {
  if (!projects || !Array.isArray(projects)) {
    console.warn("ProjectList received invalid 'projects' prop:", projects);
    return <Atoms.Text>Nenhum Projeto disponível.</Atoms.Text>;
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
