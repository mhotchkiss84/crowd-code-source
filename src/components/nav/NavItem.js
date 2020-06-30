import React, {Component} from 'react'
import {NavDropdown} from 'react-bootstrap';

class NavItem extends Component{
    render(){
        return(
        <NavDropdown.Item href={`/languages/${this.props.language.name}/${this.props.language.id}`}>{this.props.language.name}</NavDropdown.Item>
        )
    }
}

export default NavItem