import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { login, getUser } from '../../redux/ducks/reducer';
import './Signin.css';

class Signin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    login = () => {
        const { email, password } = this.state;
        axios.post('/login', { email, password })
        .then( user => {
            this.props.login(user.data);
            console.log( 'Redux User Signin', this.props.user );
            this.props.history.push('/profile');
        })
        .catch(error => {
            if (error.response.status === 401) {
                this.setState({ errorMessage: 'Wrong password' })
            } else if (error.response.status === 403) {
                this.setState({ errorMessage: 'This user is not registered' })
            }
            console.log(error);
        })
    }

    render() {
        return (
            <Aux>
                <div className="sign-in-container">
                    <div className="module">
                            <div className="bone"></div>
                            <div className="form-element">
                                <div className="form-group">
                                    Email:
                                <input className="form-control" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-element">
                                <div className="form-group">
                                    Password:
                                <input className="form-control" placeholder="password" type="password" onChange={(e) => this.setState({ password: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-element flex">
                                <button className="form-control btn btn-primary mb-2 login" onClick={this.login}>Log in</button>
                            </div>
                        
                    </div>
                </div>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    login: login,
    getUser: getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);