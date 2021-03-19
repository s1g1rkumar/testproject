import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import video from './learn-video.mp4'
import logo from './logo.svg'
import img1 from './confu-img.png'
import happystu from './student svgs/1 SCENE.svg'
import conimg from './student svgs/8 SCENE.svg'
//import './Homepage.js'

// import App from './App';
import reportWebVitals from './reportWebVitals';

class Home extends Component {



    render() {
        return (<div className="main-section">
        {/* used for toogle btn */}
        {/* <div className="toggle">
            <button>click me</button>
            <span></span>
            <span></span>
            <span></span>
        </div> */}
      <div className="scroll-btn">
                    <i className="far fa-dot-circle" id="scrollbtn1"></i>
                    <i className="far fa-dot-circle" id="scrollbtn2"></i>
                    <i className="far fa-dot-circle" id="scrollbtn3"></i>
                    <i className="far fa-dot-circle" id="scrollbtn4"></i>
                    <i className="far fa-dot-circle" id="scrollbtn5"></i>
                </div>

                <div className="social-meadia">
                    <i className="fab fa-facebook"></i>
                    {/* <p className="facebook">Facebook</p> */}
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-youtube"></i>
                </div>
                <div className="First section" id="firstsection">
                    <div className="header">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <nav className="nav-part">
                            <div className="navbars">
                                <ul>
                                    <li><a href="#Home">Home</a></li>
                                    <li><a href="#About">About</a></li>
                                    <li><a href="#Goal">Goal</a></li>
                                    <li><a href="#Conact">Contact</a></li>
                                    <li><a href="#Sign-up" id='sign-up-id'>Sign up</a></li>
                                    <li><a href="#Login" id='logo-id'>Login</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="main-heading" id="main-head">
                        <div className="box-heading">
                            <div className="heading-para">
                                <h1 className='heading-top'>You are never too old to set another goal or to dream a new dream.</h1>
                            </div>
                            <div className="start-btn">
                                <button className="bubbly-button">START HERE</button>
                                {/* <a href="#link-page">START HERE <i className="fas fa-arrow-right"></i>  </a> */}
                            </div>
                        </div>

                    </div>
                    <div className="social-meadia">
                        <i className="fab fa-facebook"></i>
                        {/* <p className="facebook">Facebook</p> */}
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                    </div>


                </div>
                <div className="Second section" id='Second'>
                    <div className="container">
                        <div className="para-box">
                            <div className="para-box-tag-para">
                                Arianna Huffington
                        </div>
                            <div className="para-box-heading">
                                I AM ALWAYS DOING THAT WHICH I CANNOT DO.
                        </div>
                            <div className="para-box-paragraph">
                                Self-awareness quotes that focus on the value of knowing our inner selves can help children appreciate and celebrate their differences. Wise people from throughout history have talked about the importance of self-awareness, from Aristotle to Oprah Winfrey!  </div>
                        </div>
                        <div className="image-box">
                            {/* <iframe width="420" height="315" autoplay src={video}> </iframe> */}
                            <video loop>
                                <source src={video} />
                            </video>
                        </div>
                    </div>

                </div>

                <div className="Third section" id="third">
                    <div className="container">
                        <div className="para-box">
                            <div className="para-box-tag-para">
                                Arianna Huffington
                        </div>
                            <div className="para-box-heading">
                                I AM ALWAYS DOING THAT WHICH I CANNOT DO.
                        </div>
                            <div className="para-box-paragraph">
                                Self-awareness quotes that focus on the value of knowing our inner selves can help children appreciate and celebrate their differences. Wise people from throughout history have talked about the importance of self-awareness, from Aristotle to Oprah Winfrey!  </div>
                        </div>
                        <div className="image-box">
                            {/* <iframe width="420" height="315" autoplay src={video}> </iframe> */}
                            {/* <video  loop  autoPlay>
                         <source src={video} />
                         </video> */}
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    {/* <div className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sit!
                </div> */}
                </div>
                <div className="Fourth section" id="fourth">
                    <div className="para1">
                        <h1>This is heading one</h1>
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                </div>
                    <div className="happyimg">
                        <img src={happystu} alt="image not found" />
                    </div>
                    <div className="para2">
                        <h1>This is heading2</h1>
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                   <a href="#Sign-up" id='sgn-btn'>Sign up</a>

                        <a href="#link-page" id='Srt-btn'>START HERE <i class="fas fa-arrow-right"></i>  </a>
                    </div>

                </div>
                <div className="Contact" id="contact">
                    <div className="contact-deatils">
                        <div className="contact-form">
                            <h1>GET IN TOUCH</h1>
                            <form action="#">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="Name" id="name-input" />
                                <label htmlFor="Email">Eamil</label>
                                <input type="email" name="Email" id="email-input" />
                                <button className='submit-btn' id='form-submit'>CONTACT ME</button>
                            </form>
                        </div>
                        <div className="contact-img">
                            <img src={conimg} alt="" />
                        </div>
                    </div>
                    <div className="con-deatils">
                        <a href="tel:+919110956664"><i class="fas fa-mobile"></i> +91 9110956664</a>
                        <a href="mailto:sagar9110956666@gmial.com"><i class="fas fa-envelope-open-text"></i> sagar9110956666@gmail.com</a>
                    </div>
                    <div className="contact-paragraph">
                        <div className="copywrite-para">
                            <p>&#169; Copywrite & Design by Carrer Path Finder</p>
                        </div>
                        <div className="location-tag">
                            <a href="#location-redirect-google-map"><i className="fas fa-search-location"></i>Hinoo Ranchi 834002</a>

                        </div>
                    </div>

                </div>


            </div>

        )
    }
}
export default Home;