import React, {Component} from 'react'
import '../home/Home.css'

class Success extends Component {
    render(){
        return(
            <React.Fragment>
                <div id="main-container"></div>
                <h2 id="main-heading">Login Success</h2>
                <p id="main-heading">You may now continue browsing</p>
            </React.Fragment>
        )
    }
}

export default Success