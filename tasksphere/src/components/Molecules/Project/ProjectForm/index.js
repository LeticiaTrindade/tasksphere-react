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
            <Atoms.Heading as="h2">Criar novo projeto</Atoms.Heading>

<Atoms.Text variant='description'>Nome do projeto:</Atoms.Text>
            <Atoms.Input
                type="text"
                value={newProject}
                onChange={e => setNewProject(e.target.value)}
                placeholder="Digite aqui o nome do projeto"
            />

            <Atoms.Text variant='description'>Descrição do projeto:</Atoms.Text>
            <Atoms.Input
                type="text"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
                placeholder="Digite aqui a descrição do projeto"
            />

            <Atoms.Text variant='description'>Data de início do projeto:</Atoms.Text>
            <Atoms.Input
                type="date"
                value={newStartDate}
                onChange={e => setNewStartDate(e.target.value)}
            />
            <Atoms.Text variant='description'>Data de término do projeto:</Atoms.Text>
            <Atoms.Input
                type="date"
                value={newEndDate}
                onChange={e => setNewEndDate(e.target.value)}
            />

            <Atoms.Button onClick={addProject} aria-label="Adicionar projeto">
                Adicionar Projeto
            </Atoms.Button >
        </Atoms.Card>
    );
}

export default ProjectForm;