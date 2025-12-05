import React from 'react';

const RetroText = ({ children, className = "" }) => (
    <span className={`font-['Press_Start_2P'] ${className}`}>{children}</span>
);

export default RetroText;
