import React from 'react';
import { Link } from 'react-router-dom'
import Aux from '../../hoc/Aux';
// import routes from '../../routes/routes';
import './Layout.css'
// import Signup from '../../components/Signup/Signup';
// import Signin from '../../components/Signin/Signin';
import Scroll from 'react-scroll-to-element';

const Layout = (props) => {
    return(
        <Aux>
            <nav className="Nav">
                <div className="NavLeft">WoofWoofMeow</div>
                <div className="NavRight">
                    <Scroll type="id" element="_About">About </Scroll>
                    <Scroll type="id" element="_Services">Services </Scroll>
                    <Link to="/signup">Sign Up </Link>
                    <Link to="/signin">Sign In </Link>
                </div>
            </nav>

            <section className="GetStarted">
                <div className="Find">
                    <h1>GET STARTED</h1>
                    <div>
                        <div className="border border-radius"><div className="borderContainer"></div></div>
                        <div className="border border-radius"><div className="borderContainer"></div></div>
                    </div>
                    <div>
                        <a href="/" className=""><span>Find Caretaker</span></a>
                        <a href="/" className=""><span>Become Caretaker</span></a>
                    </div>
                </div>
            </section>

            <section className="About" id="_About">
                <div>
                    <h1>About</h1>
                    <p>Doggo ipsum lotsa pats waggy wags boof doggo, wow very biscit. Smol borking doggo with a long snoot for pats length boy pats blep, lotsa pats what a nice floof. Long doggo snoot ruff woofer h*ck shooberino, woofer clouds doge doggo, borkdrive stop it fren heckin borking doggo. Very jealous pupper wow such tempt fat boi doggo ur givin me a spook, pupperino doing me a frighten. Long water shoob blop heck, aqua doggo. Doggo smol borking doggo with a long snoot for pats fat boi what a nice floof maximum borkdrive dat tungg tho, aqua doggo thicc long water shoob heckin good boys and girls. Boofers ur givin me a spook sub woofer length boy smol borking doggo with a long snoot for pats floofs, heckin good boys and girls borkf heckin angery woofer doing me a frighten.</p>
                </div>
                
            </section>

            <div className="DogParkBackground"></div>

            <section className="Services" id="_Services">
                <h1>Services</h1>
                <div className="Cards">
                    <div className="Card">
                        <h2>30 - 90 minute walks</h2>
                        <div className="Icon"></div>
                    </div>
                        <div className="Card">
                            <h2>Walks to the dog park</h2>
                        <div className="Icon"></div>
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
                            <p>Give Caregiver</p>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <span> • </span>
                            <p>Get Paid</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="finallyGetStarted"><Link to="/" className="btn-yellow  border-radius">Get started</Link></div>
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
                                <li><a href="/"><h2>Contact</h2></a></li>
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
                    <div className="row">
                        <h2 className="center">We Also Sell Cookies</h2>
                    </div>
                </div>
            </footer>
        </Aux>
    )
}

export default Layout;