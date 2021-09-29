import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ShowNotes from './ShowNotes';
import { StyledDiv } from '../users/Users';

const Notes = () => {

    const [state, setState] = useState({
        title: '',
        content: '',
        author: '',
        date: Date,
    });

    useEffect(() => {
        getNotes();
        
    }, [])

    const write = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }


    const getNotes = async () => {
        const response = await axios.get('http://localhost:4000/api/notes');
        const data = response.data;
        setState(data);
    }

    const deleteNote = async (id) => {
        await axios.delete(`http://localhost:4000/api/notes/${id}`);
        getNotes();
    }

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
                                    className="form-control" type="text" placeholder="Title" onChange={write}
                                    name="title" />
                                <br />
                                <input
                                    className="form-control" type="text" placeholder="Content" onChange={write}
                                    name="content"/>
                                <br />
                                <input
                                    className="form-control" type="text" placeholder="Author" onChange={write}
                                    name="author" />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-success" disabled>
                                Save Note
                            </button>
                        </form>
                    </StyledDiv>
                </div>
                <ShowNotes state={state} deleteNote={deleteNote}></ShowNotes>
            </div>
        </div>
    )
}

export default Notes;
