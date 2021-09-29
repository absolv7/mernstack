import React from 'react';
import { H3, Button } from '../users/ShowUsers';
import styled from 'styled-components';


const StyledLi = styled.li `

    color: white;
    background: #3494E6;
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);
    background: linear-gradient(to right, #EC6EAD, #3494E6);

`

const ShowNotes = ({state,deleteNote}) => {
    return (
        <div className="col">
                    <ul className="list-group">
                        <br />
                        {state.length > 0 ?
                            state.map((note) => (
                                <StyledLi className="list-group-item"
                                    key={note._id}>
                                    <Button onClick={()=>deleteNote(note._id)} className="btn btn-danger">x</Button>
                                    <h1>{`Titulo: ${note.title}`}</h1>
                                    <h2>{`Descripcion: ${note.content}`}</h2>
                                    <h4>{`Autor: ${note.author}`}</h4>
                                </StyledLi>
                            )) : (
                        <>
                            <H3>No Notes</H3>
                        </>
                    )
                }
            </ul>
        </div>
    )
}

export default ShowNotes;
