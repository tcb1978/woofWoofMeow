import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { login } from '../../redux/ducks/reducer';
import './Signin.css';

class Signin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            showPopup: false
        }
    }

    componentDidMount () {
        // If the user is already signed in, they go to their profile
        if ( this.props.user.first_name ) {
            this.props.history.push('/profile');
        }
    }

    login = () => {
        const { email, password } = this.state;
        axios.post('/login', { email, password })
        .then( user => {
            this.props.login(user.data);
            this.props.history.push('/profile');
        })
        .catch(error => {
            if (error.response.status === 401) {
                this.setState({ errorMessage: 'Wrong password' })
            } else if (error.response.status === 403) {
                this.setState({ errorMessage: 'This user is not registered' })
            }
            this.setState({showPopup: true})
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
                        {this.state.showPopup ?
                            <div className="form-element errorMessage">{ this.state.errorMessage }</div> : null
                        }

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
    return { user: state.user };
};

const mapDispatchToProps = {
    login: login
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);