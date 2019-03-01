import React, { Component } from 'react';
import {
  getMessage,
  sendMessage,
  getMessagesHistory,
} from '../services/socket';

class Chat extends Component {
  state = {
    messagesDatas: [],
    messageToSend: '',
  };

  componentDidMount() {
    getMessagesHistory(messagesHistory => {
      this.setState({ messagesDatas: messagesHistory });
    });
    getMessage(message => {
      this.setState(prevState => {
        return { messagesDatas: [...prevState.messagesDatas, message] };
      });
    });
  }

  onInputChange({ target: { value } }) {
    this.setState({ messageToSend: value });
  }

  onClick() {
    const message = this.state.messageToSend;
    sendMessage(message);
  }

  render() {
    const { messagesDatas } = this.state;
    const displayMessages = messagesDatas.map(message => (
      <p>
        <b>{message.chatterName} : </b>
        {message.message}
      </p>
    ));

    return (
      <div>
        <div>{displayMessages}</div>
        <div>
          <input type="text" onChange={this.onInputChange.bind(this)} />
          <button onClick={this.onClick.bind(this)}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chat;
