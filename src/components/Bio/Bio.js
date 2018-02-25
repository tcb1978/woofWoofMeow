import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import './Bio.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUser } from '../../redux/ducks/reducer';

class Bio extends Component {
    
    componentDidMount() {
        const { getUser } = this.props
        axios.get('/user').then( user => {
            console.log( user );
            getUser( user.data );
        }).catch(error => console.log(error))
    }

    render() {
        const { user } = this.props;
        console.log( 'User prop', user );
        return (
            <Aux>
                <div className="Landscape"></div>
                <div className="Bio">
                    <div className="BioAvatar"><img src={user.avatar} alt="Avatar"/></div>
                    <div>
                        <h1>{user.first_name}</h1>
                        <i className="UserEdit fas fa-edit"></i>
                    </div>
                    <div className="UserBio">
                        <div className="BioCaption" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis, tortor vitae sodales venenatis, quam orci scelerisque odio, eu tempus quam tellus sed nulla. Duis vel erat sed sapien eleifend vulputate ut quis est.</div>
                    </div>
                </div>
            </Aux>
        )
    }
};

const mapStateToProps = state => {
    return { user: state.user };
}

const mapDispatchToProps = {
    getUser: getUser,
}

export default connect( mapStateToProps, mapDispatchToProps )( Bio );