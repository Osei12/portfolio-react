import React, { Component } from 'react'
import "./Services.css"
import Icon1 from "../images/design-icon.png"
import Icon2 from "../images/app-icon.png"
import Icon3 from "../images/code-icon.png"
class Services extends Component {
    render() {
        return (
            <>
                <section className='services section'>
                    <div className='container'>
                        <div className='section-header'>
                            <h3 className='title ' data-title='What i do'> Services</h3>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum
                            </p>
                        </div>
                        <div className='cards'>
                            <div className='card-wrap'>
                                <div className='card'>
                                    <div className='card-content'>
                                        <img src={Icon1} className='icon' />
                                        <h3 className='title-sm'>Graphics Design</h3>
                                        <p className='text'>
                                            Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam

                                        </p>
                                        <a href='#' className='btn small'>Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className='card-wrap'>
                                <div className='card'>
                                    <div className='card-content'>
                                        <img src={Icon2} className='icon' />
                                        <h3 className='title-sm'>App Development</h3>
                                        <p className='text'>
                                            Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam

                                        </p>
                                        <a href='#' className='btn small'>Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className='card-wrap'>
                                <div className='card'>
                                    <div className='card-content'>
                                        <img src={Icon3} className='icon' />
                                        <h3 className='title-sm'>Web Development</h3>
                                        <p className='text'>
                                            Veritatis
                                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam

                                        </p>
                                        <a href='#' className='btn small'>Read more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default Services