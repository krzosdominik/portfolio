import React from 'react';

const Project = ({ name, github, url, technologies, image, description }) => {
    return (
        <div className="col-sm-12 col-lg-6">
            <figure className="project__image">
                <img src={image} alt={name} />
                <figcaption>
                    <h2 className="project__name">
                        {name} <br />
                        <span className="project__technologies">{technologies.join(", ")}</span>
                    </h2>
                    <div className="icon-links">
                        <a href={github} target="_blank" className="project__link">
                            <i class="fab fa-github project__icon"></i>
                        </a>
                        <a href={url} target="_blank" className="project__link">
                            <i class="far fa-eye project__icon"></i>
                        </a>
                    </div>
                    <p className="project__description">{description}</p>
                </figcaption>
            </figure>
        </div>
    )
}

export default Project;