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
            message: '',
            rating: null,
            job_id: 20
        }
    }

    onHandleReviewChange = (event) => {
        this.setState({
            message : event.target.value
        })
    }

    onHandleRatingChange = (value) => {
        this.setState( {
            rating: value
        })
        console.log(this.state.rating, 'rating');
    }

    onHandleSubmit = () => {
        const { message, rating, job_id } = this.state;
        const timeStamp = new Date();
        const post_date = timeStamp.toUTCString();
        console.log(post_date);

        axios.post('/review', {
            post_date,
            message,
            rating,
            job_id
        })
        .then( response => {
            console.log(response);
        })
        .catch( error => console.log(error) )
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
                                    id="comment"
                                    title="">
                                </textarea>
                            </div>
                            <Rating
                                onHover={(rate) => this.onHandleRatingChange(rate)}
                                className="Rating"
                                initialRating={3}
                                placeholderRating={this.state.rating}
                                emptySymbol={<img src={empty} className="icon" />}
                                placeholderSymbol={<img src={empty} className="icon" />}
                                fullSymbol={<img src={full} className="icon" />}
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