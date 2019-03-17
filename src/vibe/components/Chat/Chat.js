import React from 'react';
import ChatElements from './ChatElements';
import FA from 'react-fontawesome';

function Container(props) {
  return <div className="ChatBoxContainer">{props.children}</div>;
}

function CloseChatBox(props) {
  return (
    <button className="CloseChat" onClick={props.close}>
      <FA name="times" />
      <span className="sr-only">Close Chat</span>
    </button>
  );
}

function ChatHeaderStatus(props) {
  const color =
    props.status === 'online'
      ? 'text-success'
      : props.status === 'offline'
      ? 'text-muted'
      : 'text-muted';
  return (
    <span className="m-r">
      <FA name="circle" className={color} />
    </span>
  );
}

function ChatBoxHeader(props) {
  const screenReaderText = props.isExpanded ? 'Hide Chat' : 'Show Chat';
  return (
    <header
      className="ChatHeader"
      onClick={props.toggle}
      onKeyPress={props.toggle}
      tabIndex={0}>
      {props.status && <ChatHeaderStatus status={props.status} />}
      <span className="sr-only">{screenReaderText}</span>
      {props.name}
      <CloseChatBox close={props.close} />
    </header>
  );
}

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    return (
      <div className="ChatBox">
        <ChatBoxHeader
          name={this.props.name}
          toggle={this.toggle}
          isExpanded={this.state.isExpanded}
          status={this.props.status}
          close={this.props.close}
        />
        {this.state.expanded && <ChatElements image={this.props.image} />}
      </div>
    );
  }
}

const Chat = {
  Container: Container,
  ChatBox: ChatBox
};

export default Chat;
