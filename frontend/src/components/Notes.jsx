import React, { useState } from 'react'
import { H3 } from './ShowUsers';
import { StyledDiv } from './Users';

const Notes = () => {

    const [state, setState] = useState([
            {
                title: '',
                content: '',
                author: '',
                date: Date.now
            }
    ])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <br />
                    <StyledDiv className="card card-body">
                        <h3>Create New Note</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"/>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-success">
                                Save Note
                            </button>
                        </form>
                    </StyledDiv>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {   state.length > 0 ?
                            state.map((note) => (
                            <li className="list-group-item  list-group-item-action">
                                {`${note.title} ${note.content}`}
                            </li>
                        )) : (<H3>No Users</H3>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notes;
