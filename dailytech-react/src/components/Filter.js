import React, { useState, useEffect } from 'react';
import Keywords from '../layout/Keywords';

const Filter = ({ children, getKeywords }) => {
  
    const handleInputChange = (event) => {
        getKeywords(event.target.value);
    };

    return (
        <>
            <Keywords getKeywords={handleInputChange} />
            {children}
        </>
    );
};

export default Filter;
