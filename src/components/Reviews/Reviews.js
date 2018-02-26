import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Reviews.css';

class Reviews extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rating: '',
            date: '',
            message: ''
        }
    }
    

    render() {
        return (
            <Aux>
                <div className="ReviewsContainer">
                    <h1>Reviews</h1>
                    <div className="ReviewDisplay">
                        <div className="ReviewRow">
                            <div className="DogBoneRating">
                                <span className="bone"></span>
                                <span className="bone"></span>
                                <span className="bone"></span>
                                <span className="bone-empty"></span>
                            </div>
                            <div className="date">March 29</div>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                        <div className="ReviewRow">
                            <div className="DogBoneRating">
                                <span className="bone"></span>
                                <span className="bone"></span>
                                <span className="bone"></span>
                                <span className="bone-empty"></span>
                            </div>
                            <div className="date">March 24</div>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>

                

                </div>
            </Aux>
        )
    }
};

export default Reviews;