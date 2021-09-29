import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateNote = () => {

    const [state, setState] = useState({
        title: '',
        content:'',
        usuarios: [],
        userSelected: '',
        date: new Date()
    })

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        const users = response.data.map((user) => user.username);
        setState({ usuarios: users });
    }

    const submitEvent = async (event) => {
        event.preventDefault();
        const newNote = {
            title: state.title,
            content: state.content,
            date: state.date,
            autor: state.userSelected
        }
        const res = await axios.post('http://localhost:4000/api/notes', newNote );
        console.log(res);
    }

    const inputChange = (event) => {
        const estado = event.target.name;
        const dato = event.target.value;
        setState({
            ...state,
            [estado]:dato
        })
    }

    const changeDate = (date) => {
        setState({
            ...state,
            date: date
        })
    }


    return (
        <div className="container">
            <div className="col-md-4">
                <div className="card card-body">
                    <h4>Create a note</h4>
                    <input className="form-control" type="text" name="title" placeholder="Note" onChange={inputChange}/>

                    <br />
                    <div className="form-group">
                        <textarea name="content" className="form-control"
                        placeholder="Content" required onChange={inputChange}>
                        </textarea>
                    </div>
                    <br />
                    {/* SELECT USER */}
                    <div className="form-group">
                        <select className="form-control" name="userSelected"
                            onChange={inputChange}>
                            {
                                state.usuarios.map((usuario) => (
                                    <option value={usuario} key={usuario._id}>
                                        {usuario}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <DatePicker
                            className="form-control"
                            selected={state.date}
                            onChange={changeDate}
                            placeholderText="Seleccionar fecha"
                        />
                    </div>
                    <br />
                    <form onSubmit={submitEvent}>
                        <button type="submit" className="btn btn-success">
                            Save note
                        </button>  
                    </form>
                </div>
            </div>           
        </div>        
    )
}

export default CreateNote;
