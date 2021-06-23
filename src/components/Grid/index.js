import React from 'react';

export function Container({ fluid, children }) {
    return (
        <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>
    )
} ;

export function Row() {

};

export function Col() {

};