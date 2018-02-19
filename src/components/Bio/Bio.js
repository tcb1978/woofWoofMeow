import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Bio.css';

class Bio extends Component {
    render() {
        return (
            <Aux>
                <div className="Landscape"></div>
                <div className="Bio">
                    <div className="BioAvatar"></div>
                    <div>
                        <h1>Users's Name</h1>
                        <i class="UserEdit fas fa-edit"></i>
                    </div>
                    <div className="UserBio">
                        <caption className="BioCaption" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, tortor vitae sodales venenatis, quam orci scelerisque odio, eu tempus quam tellus sed nulla. Duis vel erat sed sapien eleifend vulputate ut quis est.</caption>
                    </div>
                </div>
            </Aux>
        )
    }
};

export default Bio;