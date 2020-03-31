import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import Navigation from "./Navigation";
import overflowBlock from '../methods/overflowBlock';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => setIsActive(!isActive);
    const handleNavigationClick = () => setIsActive(false);

    overflowBlock(isActive);

    return (
        <>
            <header className='header'>
                <Link to='/' className='header__brand'>
                    Krzos Dominik <span>Portfolio</span>
                </Link>
                <Hamburger onClick={handleHamburgerClick} isActive={isActive} />
                <Navigation
                    onClick={handleNavigationClick}
                    classes={isActive
                        ? "navigation navigation--active"
                        : "navigation"}
                />
            </header>
        </>
    )
};

export default Header;