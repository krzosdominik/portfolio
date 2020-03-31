import React from 'react';

import data from '../db/projects';
import Project from './Project';

const Projects = () => {
    const { projects } = data;
    return (
        <section id='projects' className='projects'>
            <h1 className="projects__header decoration">Projekty</h1>
            <div className="container">
                <div className="row">
                    {projects.map(item => (
                        <Project
                            key={item.id}
                            name={item.name}
                            github={item.github}
                            url={item.url}
                            technologies={item.technologies}
                            image={item.image}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Projects;