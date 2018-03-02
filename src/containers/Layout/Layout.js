import React from 'react';
import './Layout.css'
import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
// import routes from '../../routes/routes';
// import Signup from '../../components/Signup/Signup';
// import Signin from '../../components/Signin/Signin';
import Scroll from 'react-scroll-to-element';

const Layout = (props) => {
    return (
        <Aux>
            <nav className="Nav">
                <div className="NavLeft">WoofWalks</div>
                <div className="NavRight">
                    <Scroll type="id" element="_About">About </Scroll>
                    <Scroll type="id" element="_Services">Services </Scroll>
                    <Scroll type="id" element="_GetStarted">Sign Up</Scroll>
                    <Link to="/signin">Sign In </Link>
                </div>
            </nav>
            <section className="GetStarted" id="_GetStarted">
                <div className="Find">
                    <h1>GET STARTED</h1>
                    <div>
                        <Link to="/signup/petowner">
                            <div className="signup-btn">
                                <div className="btn-name size"><div>Find Caretaker</div></div>
                                <div className="btn-border size"></div>
                                <div className="btn-underlay size"></div>
                            </div>
                        </Link>
                        <Link to="/signup/caregiver">
                            <div className="signup-btn">
                                <div className="btn-name size"><div>Become Caretaker</div></div>
                                <div className="btn-border size"></div>
                                <div className="btn-underlay size"></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="About" id="_About">
                <div>
                    <h1>About</h1>
                    <p>* Clients (pet owner) can create a profile with their personal (and dog) information. * Clients make a request for the walk based on included parameters. Information includes the type of walk (30 minutes walk, 60 minutes walk, 60 minutes dog park), proximity (max distance the walker lives from you), begin time, month and day. In the search results, they see all the walkers that satisfy the condition and request the walk. * When they make the request it goes to the caregiver (pet walker). Once the caregiver accepts it, they can start chatting. * Clients can see check-in and check-out marks of the caregiver with geolocation. * After the walk is over, the client receives the photo with the dog from the walk. * After that, the client can write a review on that person.</p>
                    <p>* Also, they can view reviews displayed on any caregiver profile.
                    * In the client (petwoner) profile, clients can update their profile information (address, phone number, email) and dog information.</p>

                    <p>* Caregivers can create a profile with their personal information. * In their profile, caregivers can update their availability. * They also can accept requests from the clients and chat with them. * They check-in then check-out the appointment with the geolocation and time-stamp. Upon 'checkout' the caregiver may update the client with a photo and details from the walk. * The walk is considered as finished and the caregiver may continue on to any further appointments.</p>

                    <p>Built with the following yet not limited to:</p>
                    <p>* React * Node.js * Express.js * Redux * axios and superagent * PostgreSQL * Massive.js * bcrypt * Multer * Sass * AWS * Dropzone * socket.io * google maps api</p>
                </div>
                
            </section>

            <div className="DogParkBackground"></div>

            <section className="Services" id="_Services">
                <h1>Services</h1>
                <div className="Cards">
                    <div className="Card">
                        <h2>30 - 90 minute walks</h2>
                        <div className="Icon DogWalk"></div>
                    </div>
                    <div className="Card">
                        <h2>Walks to the dog park</h2>
                        <div className="Icon DogPark"></div>
                    </div>
                </div>
                
            </section>

            <section className="HowItWorks" id="_HowItWorks">
                <h1>How It Works</h1>
                <div className="Instructions">
                    <div className="Instruction">
                        <h2>Client</h2>
                        <div className="FlowChart">
                            <p>Sign Up</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Create Profile</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Specify Job</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Find Caregiver</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Pay</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="Instruction">
                        <h2>Caregiver</h2>
                        <div className="FlowChart">
                            <p>Sign Up</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Create Profile</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Accept Jobs</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>                            
                            <p>Give Care</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Get Paid</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="GetStarted-btn"><Scroll type="id" element="_GetStarted"><button className="yellow-btn">Get started</button></Scroll></div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <ul>
                                <li><h2>Info</h2></li>
                                <li><Scroll type="id" element="_About">About </Scroll></li>
                                <li><Scroll type="id" element="_Services">Services </Scroll></li>
                                <li><Scroll type="id" element="_HowItWorks" >How It works</Scroll></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <ul>
                                <li><h2>Contact</h2></li>
                                <li><a href="mailto:woofwoofmeow@email.com">woofwoofmeow@email.com</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <ul>
                                <li><h2>Follow Us</h2></li>
                                <li><a href="/" >Twitter</a></li>
                                <li><a href="/" >Instagram</a></li>
                                <li><a href="/" >Facebook</a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row sellCookies">
                        <h2 className="center">We Also Sell Cookies</h2>
                    </div>
                    <div className="row copyright">
                        <h2 className="center">2018 © All rights reserved</h2>
                    </div>
                </div>
            </footer>
        </Aux>
    )
}

export default connect(state => state)(Layout);