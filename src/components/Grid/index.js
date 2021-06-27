import React from 'react';

// creates functional components to create the bootstrap grid
export function Container({ fluid, children }) {
    return (
        <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
    )
} ;

export function Row({ fluid, children }) {
    return (
        <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>
    )
};

export function Col({ size, children }) {
    return (
        <div className={size
            .split(' ')
            .map(size => 'col-' + size)
            .join(' ')}
        >
            {children}
        </div>
    )
};