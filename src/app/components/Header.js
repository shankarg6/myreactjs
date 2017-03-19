import React from 'react';

export const Header = (props) => {       
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        {props.homeLink}
                    </a>                  
                </div>
            </div>
        </nav>
    );    
}