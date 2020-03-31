import React from 'react';
import { Link } from "react-scroll";

const options = {
    spy: true,
    smooth: true,
    duration: 500,
    delay: 300
};

const Navigation = ({ onClick, classes }) => {
    const onNavigationClick = () => onClick();
    return (
        <nav className={classes}>
            <ul className="navigation__list">
                <li className="navigation__item">
                    <Link to="home" onClick={onNavigationClick} {...options}>
                        Strona główna
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="projects" onClick={onNavigationClick} {...options}>
                        Projekty
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="about" onClick={onNavigationClick} {...options}>
                        O mnie
                    </Link>
                </li>
                <li className="navigation__item">
                    <Link to="contact" onClick={onNavigationClick} {...options}>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;