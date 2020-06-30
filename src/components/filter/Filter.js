import React, {Component} from 'react'
import { Dropdown } from 'react-bootstrap';

class Filter extends Component {
    render(){
        return(
        <Dropdown.Item onClick={() => this.props.Filter(this.props.filterId)}>{this.props.name}</Dropdown.Item>
        )
    }
    
}

export default Filter