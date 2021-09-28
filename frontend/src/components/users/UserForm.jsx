import React from 'react';
import { StyledDiv } from './Users';

const Form = ({ref,username,write,submitEvent}) => {
    return (
        <StyledDiv className="card card-body">
            <h3>Create New User</h3>
            <form href={ref}>
                <div className="form-group">
                    <input
                        className="form-control" value={username}
                        type="text" onChange={write}
                        placeholder="Username" />
                </div>
                <br />
                <button onClick={submitEvent} type="submit"
                    className="btn btn-success">
                    Save User
                </button>
            </form>
        </StyledDiv>
    )
}

export default Form;
