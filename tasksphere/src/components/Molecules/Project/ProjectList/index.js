import React from 'react';
import * as Atoms from '../../../Atoms';
import * as Molecules from '../..';

export default function ProjectList({ projects }) {
    if (!projects || !Array.isArray(projects)) {
        console.warn("ProjectList received invalid 'projects' prop:", projects);
        return <p>Nenhum Projeto disponível.</p>;
    }

    return (
        <Atoms.Card>
            <Atoms.Text variant='titleLogin'>Projetos</Atoms.Text>
            {projects.map(project => (
                <Molecules.ProjectItem
                    key={project.id}
                    project={project}
                    compact={true}
                />
            ))}
        </Atoms.Card>
    );
}
