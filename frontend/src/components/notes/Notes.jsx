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
                <div className="col-md-7">
                    <br />
                    <ShowNotes state={state} deleteNote={deleteNote}></ShowNotes>
                </div>
            </div>
        </div>
    )
}

export default Notes;
