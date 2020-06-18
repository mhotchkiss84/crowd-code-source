import React from 'react'
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationViews'
import Footer from './components/footer/Footer'

function App (){
    return(
        <React.Fragment>
            <NavBar />
            <ApplicationViews />
            <Footer />
        </React.Fragment>
    )
}

export default App