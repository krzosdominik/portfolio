import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from "./Navigation";

const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='header__brand'>
                Krzos Dominik <span>Portfolio</span>
            </Link>
            <Navigation />
        </header>
    )
};

export default Header;