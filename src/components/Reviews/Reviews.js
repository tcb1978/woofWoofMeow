import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Reviews.css';
import Rating from 'react-rating';
import axios from 'axios';
import empty from '../../assets/img/icon-bone_empty.png';
import full from '../../assets/img/icon-bone.png';

class Reviews extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rating: '',
            date: '',
            message: '',
            caregiver_id: 10,
            caregiver_reviews: []
        }
    }

    componentDidMount() {
        const { caregiver_id } = this.state;
        axios.get(`/reviews/${caregiver_id}`)
        .then(response => {
            console.log(response);
            this.setState({
                caregiver_reviews: response.data
            })
        })
        .catch(error => console.log(error))
    }
    

    render() {
        const listOfReviews = this.state.caregiver_reviews.map( review => (
            <div className="ReviewRow">
                <div className="DogBoneRating">
                    <Rating
                        className="Rating"
                        readonly={true}
                        initialRating={review.rating}
                        placeholderRating={review.rating}
                        emptySymbol={<img src={empty} className="icon" />}
                        placeholderSymbol={<img src={empty} className="icon" />}
                        fullSymbol={<img src={full} className="icon" />}
                    />
                </div>
                <div className="date">{review.post_date}</div>
                <p>{review.message}</p>
            </div>
        ) )

        return (
            <Aux>
                <div className="ReviewsContainer">
                    <h1>Reviews</h1>
                    <div className="ReviewDisplay">
                        {listOfReviews}
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Reviews;