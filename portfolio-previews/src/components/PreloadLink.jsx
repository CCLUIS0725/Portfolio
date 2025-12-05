import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A wrapper around react-router-dom's Link that preloads the code chunk 
 * for the target route when the user hovers over the link.
 * 
 * @param {Object} props - Component props
 * @param {Function} props.factory - A function that returns the import() promise for the page component.
 * @param {string} props.to - The path to navigate to.
 * @param {React.ReactNode} props.children - The content to render inside the link.
 */
export default function PreloadLink({ factory, to, children, ...props }) {
    const handleMouseEnter = () => {
        if (factory) {
            factory();
        }
    };

    return (
        <Link to={to} onMouseEnter={handleMouseEnter} {...props}>
            {children}
        </Link>
    );
}
