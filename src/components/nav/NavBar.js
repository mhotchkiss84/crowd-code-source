import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <React.Fragment>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar