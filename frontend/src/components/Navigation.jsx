import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'

export const StyledNav = styled.nav `
    
    color:whitesmoke;
    background: #3494E6;
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);
    background: linear-gradient(to right, #EC6EAD, #3494E6);

`

const Navigation = () => {
    return (
        <StyledNav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    NotesApp
                </Link>
                
                <button
                    className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/notes" className="nav-link">
                                Notes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/users" className="nav-link">
                                Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createnote" className="nav-link">
                                Create Note
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNav>
    );
}

export default Navigation;
