import React from 'react'
import { Route, Switch } from "react-router"
import CreateNote from '../components/notes/CreateNote';
import Notes from '../components/notes/Notes';
import Users from '../components/users/Users';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/users" component={Users}></Route>
            <Route exact path="/notes" component={Notes}></Route>
            <Route exact path="/createnote" component={CreateNote}></Route>
        </Switch>
    )
}

export default Routes;