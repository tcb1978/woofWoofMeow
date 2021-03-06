import React, { Component } from "react";
import './Chat.css';
import { connect } from 'react-redux';
import io from "socket.io-client";
// No server url needs to be passed in the 'io' invokation. It defaults to the server it's on
const socket = io();

class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            // username: props.user.first_name,  // Will be the name of the user
            username: '',
            message: '',
            messages: []
        };

        this.sendMessage = () => {
            socket.emit('SEND_MESSAGE', {  // sends the message to the server
                author: this.state.username,
                message: this.state.message
            });
            this.setState({ message: '' });
        }

        socket.on('RECEIVE_MESSAGE', function(data){  // listens to incoming message
            addMessage(data);
        });

        // socket.on('DISCONNECT', )
    
        const addMessage = data => {
            this.setState({messages: [...this.state.messages, data]});
        };
    }

    componentDidMount () {
        socket.emit('JOIN');

        socket.on('GET_MESSAGES', (data) => { // gets past messages
            console.log(data);
        });
    }

    handleChange ( property, value ) {
        this.setState({ [property]: value });
    }

    render() {
        const { user, showChat } = this.props;

        return (
            <div className="Chat">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    {/* <div className="card-title">Global Chat</div>
                                    <hr/> */}
                                    {/* <div className="close"><div onClick={() => showChat()}>close</div></div> */}
                                    <span className="close" onClick={() => showChat()}><i class="fas fa-times-circle"></i></span>
                                    <div className="messages">
                                        {this.state.messages.map( (message, i) => (
                                        // <div key={i} >{message.author}: {message.message}</div>
                                        <div key={i} >
                                            <h5 className="name">{user.first_name}</h5>
                                            <div className="message">{message.message}</div>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="footer">
                                    {/* <input type="text" placeholder="Username" value={this.state.username} onChange={(e) => this.handleChange('username', e.target.value)} className="form-control"/> */}
                                    <div className="name"><h4>{user.first_name}</h4></div>
                                    <br/>
                                    <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={(e) => this.handleChange('message', e.target.value)}/>
                                    <br/>
                                    <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state)(Chat);