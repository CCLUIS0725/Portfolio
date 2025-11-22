import React from 'react';

export function TabletProgress({ progress }) {
    return (
        <div className="scroll-progress" aria-hidden="true">
            <div className="scroll-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
    );
}
