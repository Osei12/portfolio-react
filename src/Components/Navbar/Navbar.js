import React, { Component } from 'react'
import "./Navbar.css"
import Logo from "../images/20211217_080342.png"
import Pointer_1 from "../images/shapes/points1.png"
import Pointer_2 from "../images/shapes/points2.png"
import Pointer_3 from "../images/shapes/points3.png"
import Pointer_4 from "../images/shapes/points4.png"
import Letter from "../images/shapes/letters.png"
import Square from "../images/shapes/square.png"



class Navbar extends Component {

    Menu() {
        const menu = document.querySelector('.menu');
        const close = document.querySelector('.close');
        const nav = document.querySelector('nav');

        menu.addEventListener('click', () => {
            nav.classList.add('open_nav')
        })
        close.addEventListener('click', () => {
            nav.classList.remove('open_nav')
        })

    }
    render() {
        return (
            <>

                <header className='container row'>

                    <a href='#' className='logo'>
                        {/* <h3>LOGO</h3> */}
                        <img src={Logo} alt="Kaytek_logo" />
                    </a>
                    <nav className='Navigation row'>
                        <svg className='close' viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M21.5 2.75C26.4894 2.75 31.2744 4.77812 34.8024 8.38819C38.3305 11.9983 40.3125 16.8946 40.3125 22C40.3125 27.1054 38.3305 32.0017 34.8024 35.6118C31.2744 39.2219 26.4894 41.25 21.5 41.25C16.5106 41.25 11.7256 39.2219 8.19755 35.6118C4.66953 32.0017 2.6875 27.1054 2.6875 22C2.6875 16.8946 4.66953 11.9983 8.19755 8.38819C11.7256 4.77812 16.5106 2.75 21.5 2.75ZM21.5 19.6653L17.1301 15.1938C16.8276 14.8841 16.4172 14.7102 15.9893 14.7102C15.5614 14.7102 15.151 14.8841 14.8484 15.1938C14.5459 15.5034 14.3759 15.9233 14.3759 16.3611C14.3759 16.799 14.5459 17.2189 14.8484 17.5285L19.2183 22L14.8484 26.4715C14.6986 26.6248 14.5798 26.8068 14.4987 27.0071C14.4176 27.2074 14.3759 27.4221 14.3759 27.6389C14.3759 27.8557 14.4176 28.0704 14.4987 28.2707C14.5798 28.471 14.6986 28.6529 14.8484 28.8063C14.9983 28.9596 15.1761 29.0812 15.3719 29.1641C15.5676 29.2471 15.7774 29.2898 15.9893 29.2898C16.2012 29.2898 16.411 29.2471 16.6067 29.1641C16.8024 29.0812 16.9803 28.9596 17.1301 28.8063L21.5 24.3347L25.8699 28.8063C26.0197 28.9596 26.1976 29.0812 26.3933 29.1641C26.589 29.2471 26.7988 29.2898 27.0107 29.2898C27.2226 29.2898 27.4324 29.2471 27.6281 29.1641C27.8239 29.0812 28.0017 28.9596 28.1516 28.8063C28.3014 28.6529 28.4202 28.471 28.5013 28.2707C28.5824 28.0704 28.6241 27.8557 28.6241 27.6389C28.6241 27.4221 28.5824 27.2074 28.5013 27.0071C28.4202 26.8068 28.3014 26.6248 28.1516 26.4715L23.7817 22L28.1516 17.5285C28.3014 17.3752 28.4202 17.1932 28.5013 16.9929C28.5824 16.7926 28.6241 16.5779 28.6241 16.3611C28.6241 16.1443 28.5824 15.9296 28.5013 15.7293C28.4202 15.529 28.3014 15.3471 28.1516 15.1938C28.0017 15.0404 27.8239 14.9188 27.6281 14.8359C27.4324 14.7529 27.2226 14.7102 27.0107 14.7102C26.7988 14.7102 26.589 14.7529 26.3933 14.8359C26.1976 14.9188 26.0197 15.0404 25.8699 15.1938L21.5 19.6653Z"
                                fill="#fff" />
                        </svg>
                        <ul className='primary-list row'>
                            <li><a href='#'> Home</a></li>
                            <li><a href='#'> About</a></li>
                            <li><a href='#'> Services</a></li>
                            <li><a href='#'> Portflio</a></li>
                            <li><a href='#'> Contact</a></li>
                        </ul>
                    </nav>
                    <svg className='menu' onClick={this.Menu} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M87.5 75H37.5V66.6667H87.5V75ZM87.5 54.1667H12.5V45.8333H87.5V54.1667ZM87.5 33.3333H37.5V25H87.5V33.3333Z" fill="white" />
                    </svg>
                    <div className='overlay overlay-lg'>

                        <img src={Square} className='shape square height' />
                        <img src={Pointer_1} className='shape points point1' />

                    </div>
                </header>


            </>
        )
    }
}

export default Navbar