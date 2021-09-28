import React from 'react'
import { Route, Switch } from "react-router"
import Notes from '../components/notes/Notes';
import Users from '../components/users/Users';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/notes" component={Notes}></Route>
        </Switch>
    )
}

export default Routes;