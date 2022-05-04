import React, { Component } from 'react'
import "./Intro.css"
import person from "../images/my-photo.png"
import person2 from "../images/my-photo-2.png"
import Pointer_2 from "../images/shapes/points2.png"

class Intro extends Component {
    render() {
        return (
            <>
                <section className='container header row' >
                    <div className='content'>
                        <h1 className='header-title'>Osei Kusi</h1>
                        <p>
                            I'm a Developer & Graphics Designer.
                            I develop mobile and desktop applications <br />and also creates attractive designs
                        </p>
                        <div className='header-btn row'>
                            <a href='#' className='btn'>Download CV</a>
                        </div>
                    </div>
                    <div className='img'>
                        <img src={Pointer_2} className='shape points point2' />
                        <img src={person2} alt="my image" />
                    </div>

                </section>


            </>
        )
    }
}

export default Intro