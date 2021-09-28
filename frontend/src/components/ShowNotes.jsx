import React from 'react';
import { H3, Button } from './ShowUsers';
import styled from 'styled-components';


const StyledLi = styled.li `

    color: white;
    background: #3494E6;
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);
    background: linear-gradient(to right, #EC6EAD, #3494E6);

`

const ShowNotes = ({state,deleteNote}) => {
    return (
        <div className="col-md-8">
                    <ul className="list-group">
                        <br />
                        {state.length > 0 ?
                            state.map((note) => (
                                <StyledLi className="list-group-item  list-group-item-action" key={note._id}>
                                    {`${note.title} ${note.content}
                                    ${note.author}`}
                                    <Button onClick={()=>deleteNote(note._id)} className="btn btn-warning">x</Button>
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
