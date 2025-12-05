import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingSpinner;
