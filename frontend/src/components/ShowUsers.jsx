import React from 'react'
import styled from 'styled-components';

const H3 = styled.h3 `
    
    color:white;

`

const StyledLi = styled.li `
    
    color: darkblue;
    background: #2980B9;
    background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
    background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);
    font-size: 23px;

`

const Button = styled.button `

    float: right;

`


const ShowUsers = ({users,deleteUser}) => {

    return (
        <div className="col-md-8">
            <ul className="list-group">
                {users.length > 0 ? users.map((user) => (
                    <StyledLi
                        className="list-group-item list-group-item-action"
                        key={user._id}>
                        {user.username}
                        <Button onClick={() => deleteUser(user._id)}
                        className="btn btn-danger">x</Button>
                    </StyledLi>
                )) : (<H3>No Users</H3>)
                }
            </ul>
        </div>
    )
}


export default ShowUsers;
