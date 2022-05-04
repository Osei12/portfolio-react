import React from 'react'
import Intro from '../Components/Intro/Intro'
import Navbar from '../Components/Navbar/Navbar'
import Services from '../Components/services/Services'

function Home() {
    return (
        <div>
            <Navbar />
            <Intro />
            <Services />
        </div>
    )
}

export default Home