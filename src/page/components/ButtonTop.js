import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';




function funcButton({ isSelected, link, children }) {
    funcButton.propTypes = {
        isSelected: PropTypes.bool.isRequired,
        link: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    };
    const selectedStyle = isSelected ? { backgroundColor: "#333333" } : {};
    return (
        <Link to={link} style={{...selectedStyle, color: "white"}} className='p-2 ps-4 pe-4 ms-3 text-decoration-none'>
            {children}
        </Link>
    );
}



export default funcButton;
