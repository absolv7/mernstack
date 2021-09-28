import React from 'react'
import styled from 'styled-components';

export const H3 = styled.h3 `
    
    color:white;

`

export const StyledLi = styled.li `
    
    color: whitesmoke;
    background: #3494E6;
    background: -webkit-linear-gradient(to right, #EC6EAD, #3494E6);
    background: linear-gradient(to right, #EC6EAD, #3494E6);
    font-size: 23px;

`

export const Button = styled.button `

    float: right;

`


const ShowUsers = ({users,deleteUser}) => {

    return (
        <div className="col-md-8">
            <ul className="list-group">
                <br />
                {users.length > 0 ? users.map((user) => (
                    <StyledLi
                        className="list-group-item"
                        key={user._id}>
                        {user.username}
                        <Button onClick={() => deleteUser(user._id)}
                        className="btn btn-danger">x</Button>
                    </StyledLi>
                )) : (
                    <>
                    <H3>No Users</H3>
                    </>)
                }
            </ul>
        </div>
    )
}


export default ShowUsers;
