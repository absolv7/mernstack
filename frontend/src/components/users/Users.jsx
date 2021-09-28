import React, { useEffect, useRef, useState } from 'react'
import ShowUsers from './ShowUsers';
import axios from 'axios';
import styled from 'styled-components';
import Form from './UserForm';

export const StyledDiv = styled.div `

color: white;
background: #654ea3;
background: -webkit-linear-gradient(to right, #eaafc8, #654ea3);
background: linear-gradient(to right, #eaafc8, #654ea3);

`

const Users = () => {

    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const ref = useRef(username);

    useEffect(() => {
        getUsers();
    }, [])

    const write = async (event) => {
        setUsername(event.target.value);
    }

    const getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:4000/api/users/${id}`);
        getUsers();
    }

    const submitEvent = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: username
        });
        setUsername('');
        getUsers();
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <br />
                    <Form ref={ref} write={write} username={username}
                        submitEvent={submitEvent}>
                    </Form>
                </div>
                <ShowUsers users={users} deleteUser={deleteUser}></ShowUsers>
            </div>
        </div>
    )
}

export default Users;
