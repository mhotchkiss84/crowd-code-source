import React, {Component} from 'react'
import './Home.css'
class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div id="home-container">
                <img id="home-image" src={require('./code.jpg')} alt="Code" />
                <footer id="home-image-source">Image by <a href="https://unsplash.com/@pankajpatel" target="_blank">Pankaj Patel</a></footer>
                <h2 id="home-heading">Welcome to Crowd Code Source</h2>
                <p id="home-body">This is a project to consolidate information on various coding languages. When working with multiple languages and frameworks developers are often having to use multiple resources. The goal of this project is get as much information in one place to simplify researching.</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Home