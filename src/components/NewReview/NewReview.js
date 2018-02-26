import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './NewReview.css';
import Rating from 'react-rating';
import empty from '../../assets/img/icon-bone_empty.png';
import full from '../../assets/img/icon-bone.png';
import axios from 'axios';

export default class NewReview extends Component {
    constructor (props) {
        super(props);

        this.state = {
            message: ''
        }
    }

    onHandleReviewChange = (event) => {
        this.setState({
            message : event.target.value
        })
    }

    onHandleRatingClick = (value) => {
        this.setState({
            rating: value,
            bones: value
        })
        console.log(this.state.rating, 'rating');
        console.log(this.state.bones, 'bones')
    }

    onHandleSubmit = () => {
        
    }
    

    render() {
        return (
            <Aux>
                <div className="Review">
                    <h1>Make a review</h1>
                    <div className="Form-wrapper">
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput2">Review:</label>
                                <textarea
                                    onChange={(event) => this.onHandleReviewChange(event) }
                                    class="form-control"
                                    rows="5"
                                    id="comment">
                                </textarea>
                            </div>
                            <Rating
                                onClick={(rate) => this.onHandleRatingClick(rate)}
                                className="Rating"
                                placeholderRating={this.state.rating}
                                emptySymbol={<img src={empty} className="icon" />}
                                placeholderSymbol={<img src={empty} className="icon" />}
                                fullSymbol={<img src={full} className="icon" />}
                                onChange={(bones) => this.onHandleRatingClick(bones)}
                            />
                            <input
                                onClick={this.onHandleSubmit}
                                className="btn btn-primary submit-button"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>
            </Aux>
        );
    }
}