import React from 'react'


const ShowUsers = ({users,deleteUser}) => {

    return (
        <div className="col-md-8">
            <ul className="list-group">
                {
                    users.map(user => (
                        
                        <li key={user._id} className="list-group-item list-group-item-action">
                            {user.username}
                            <button onClick={deleteUser(user._id)} className="btn btn-danger">x</button>
                        </li>
                    ))
                }
                
            </ul>
            
        </div>
    )
}


export default ShowUsers;
