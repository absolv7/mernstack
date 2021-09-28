import React, { useEffect, useRef, useState } from 'react'
// import ShowUsers from './ShowUsers';
import axios from 'axios';


const Users = () => {

    const [users, setUsers] = useState({
        usuarios: []
    });

    const [input, setInput] = useState('');

    const ref = useRef(input);

    useEffect(() => {
        getUsers();
    }, [users.usuarios]);

    const write = async (event) => {
        setInput(event.target.value);
    }

    const getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        setUsers({
            usuarios: response.data
        })
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:4000/api/users/${id}`);
    }

    const submitEvent = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: input
        });
        setInput('');
    };


    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Create New User</h3>
                    <form>
                        <div className="form-group">
                            <input
                                onChange={write} className="form-control"
                                value={input} type="text" href={ref}
                            />
                        </div>
                        <br />
                        <button onClick={submitEvent} type="submit" className="btn btn-info">
                            Save User
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                    <ul className="list-group">
                    {users.usuarios.map((user) => (
                        <li className="list-group-item list-group-item-action" key={user._id}>
                            {user.username}
                            
                            <button onClick={()=>deleteUser(user._id)} className="btn btn-danger">x</button>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Users;
