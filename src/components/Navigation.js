import React from 'react';
import { Link } from "react-scroll";

const options = {
    spy: true,
    smooth: true,
    duration: 500,
    delay: 300
};

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="home" {...options}>
                        Strona główna
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="projects" {...options}>
                        Projekty
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="about" {...options}>
                        O mnie
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="contact" {...options}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;