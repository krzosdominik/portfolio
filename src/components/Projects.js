import React from 'react';

import data from '../db/projects';
import Project from './Project';

const Projects = () => {
    const { projects } = data;
    return (
        <section id='projects' className='projects'>
            <h1 className="projects__header decoration">Projekty</h1>
            <div className="container">
                <div class="row">
                    {projects.map(({ id, name, github, url, technologies, image, description }) => (
                        <Project
                            key={id}
                            name={name}
                            github={github}
                            url={url}
                            technologies={technologies}
                            image={image}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Projects;