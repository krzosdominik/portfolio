import React from 'react';

const Hamburger = ({ onClick, isActive }) => {
    const onHamburgerClick = () => onClick();

    return (
        <button
            className={isActive ? "hamburger hamburger--active" : "hamburger"}
            onClick={onHamburgerClick}
        >
            <span className="hamburger__box">
                <span className="hamburger__inner"></span>
            </span>
        </button>
    )
}

export default Hamburger;