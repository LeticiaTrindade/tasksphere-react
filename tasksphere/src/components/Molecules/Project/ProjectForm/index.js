import * as Atoms from '../../../Atoms';

function ProjectForm({
    newProject,
    setNewProject,
    newDescription,
    setNewDescription,
    newStartDate,
    setNewStartDate,
    newEndDate,
    setNewEndDate,
    addProject
}) {

    
    return (
        <Atoms.Card>
            <Atoms.Text as="h2">Criar novo projeto</Atoms.Text>

            <Atoms.Input
                type="text"
                value={newProject}
                onChange={e => setNewProject(e.target.value)}
                placeholder="Nome do Projeto"
            />
            <Atoms.Input
                type="text"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder="Descrição"
            />
            <Atoms.Input
                type="date"
                value={newStartDate}
                onChange={e => setNewStartDate(e.target.value)}
            />
            <Atoms.Input
                type="date"
                value={newEndDate}
                onChange={e => setNewEndDate(e.target.value)}
            />

            <Atoms.Button onClick={addProject}>
                Adicionar Projeto
            </Atoms.Button>
        </Atoms.Card>
    );
}

export default ProjectForm;
