import React from 'react';
export const Loading = () => {
    return(
    <div className="container">
        <div className="row">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw color-primary"></span>
            <p>Loading...</p>
        </div>
    </div>
    );
}