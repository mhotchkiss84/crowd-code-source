import {Route} from 'react-router-dom'
import React, {Component} from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import Register from './auth/Register'

class ApplicationViews extends Component{
    render(){
        return(
            <React.Fragment>
                <Route exact path='/' render={(props) =>{
                    return <Home />
                }} />
                <Route path='/login' render={(props) =>{
                    return <Login />
                }} />
                <Route path='/register' render={(props) =>{
                    return <Register />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews