import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
    return (
        <Helmet>
            <title>{title ? `${title} | Portfolio` : 'Portfolio'}</title>
            <meta name="description" content={description || 'Portfolio Previews'} />
        </Helmet>
    );
};

export default SEO;
