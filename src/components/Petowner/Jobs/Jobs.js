import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import './Jobs.css';
import Iframe from 'react-iframe';

class Jobs extends Component {
    constructor () {
        super();
        this.state = { }
    }

    render() {
        return (
            <Aux>
                <div className="petowner-jobs">
                    <div className="container">
                    
                        <h1>Jobs</h1>
                        <div className="jobs">
                            <div className="job-item">
                                <div className="AvatarName">
                                    <div className="avatar"></div>
                                    <div className="name">Mark</div>
                                </div>
                                <date className="date">January 10</date>
                                <div><button className="btn message">Message</button></div>
                            </div>
                            <div className="details">
                                <h3>Wednesday</h3>
                                <div className="StartFinish">
                                    <div>Start&nbsp;: <time>1:28pm</time></div>
                                    <div>Finish&nbsp;: <time>2:28pm</time></div>
                                </div>
                                <div className="GoogleMap">
                                    <div className="map">
                                        {/* <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                                            position="relative"
                                            width="100%"
                                            height="100%"
                                            id="myId"
                                            className="myClassname"
                                            styles={{width: "350px", height: "350px"}}
                                            allowFullScreen /> */}
                                        {/* <Iframe url={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_PLACES_KEY}&q=Space+Needle,Seattle+WA`}
                                            position="relative"
                                            width="100%"
                                            height="100%"
                                            id="myId"
                                            className="myClassname"
                                            styles={{width: "350px", height: "350px"}}
                                            allowFullScreen /> */}
                                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.976408627208!2d-112.07693238499344!3d33.449921156677355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b1223cc3206f9%3A0xb5ea49903b4b21d3!2sUS+Bank+Tower%2C+101+N+1st+Ave%2C+Phoenix%2C+AZ+85003!5e0!3m2!1sen!2sus!4v1519326392838"
                                            position="absolute"
                                            width="100%"
                                            height="100%"
                                            id="myId"
                                            className="myClassname"
                                            styles={{width: "390px", height: "390px"}}
                                            allowFullScreen />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Aux>
        )
    }
};

export default Jobs;