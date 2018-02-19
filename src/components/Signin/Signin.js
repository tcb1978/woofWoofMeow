import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Aux';
import { connect } from 'react-redux';
import { login } from '../../redux/ducks/reducer';

// const Signin = (props) => {
//     return (
//         <Aux>
//         </Aux>
//     )
// };

class Signin extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        }
    }

    componentDidMount() {
        // if (this.props.user) {
        //     this.props.history.push('/profile')
        // }
    }

    login = () => {
        const { email, password } = this.state;
        console.log(email, password);
        axios.post('/login', { email, password })
        .then(response => {
            console.log(response);
            this.props.login(response.data.user);
            this.props.history.push('/profile');
        })
        .catch(error => {
            if (error.response.status === 401) {
                this.setState({ errorMessage: 'Wrong password' })
                console.log(this.state.errorMessage);
              } else if (error.response.status === 403) {
                this.setState({ errorMessage: 'This user is not registered' })
                console.log(this.state.errorMessage);
              }
            console.log(error);
        })
    }

    render() {
        return (
            <Aux>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group">
                                Email:
                                <input className="form-control" placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="form-group">
                                Password:
                                <input className="form-control" placeholder="password" type="password" onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <button className="form-control btn btn-primary mb-2" onClick={this.login}>Log in</button>
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
    login: login
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);