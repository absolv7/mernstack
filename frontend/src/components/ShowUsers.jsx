import React from 'react'


const ShowUsers = ({users,deleteUser}) => {

    return (
        <div className="col-md-8">
            <ul className="list-group">
                {users.length > 0 ? users.map((user) => (
                    <li
                        className="list-group-item list-group-item-action"
                        key={user._id}>
                        {user.username}
                        <button onClick={() => deleteUser(user._id)}
                        className="btn btn-danger">x</button>
                    </li>
                )) : (<h3>No Users</h3>)
                }
            </ul>
        </div>
    )
}


export default ShowUsers;
