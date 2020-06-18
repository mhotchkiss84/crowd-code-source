import React from 'react'
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationViews'

function App (){
    return(
        <React.Fragment>
            <NavBar />
            <ApplicationViews />
        </React.Fragment>
    )
}

export default App