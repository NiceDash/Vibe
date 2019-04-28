import React from 'react';
import ChatElements from './ChatElements';
import FA from 'react-fontawesome';

function Container({ children }) {
  return <div className="ChatBoxContainer">{children}</div>;
}

function CloseChatBox({ close }) {
  return (
    <button className="CloseChat" onClick={close}>
      <FA name="times" />
      <span className="sr-only">Close Chat</span>
    </button>
  );
}

function ChatHeaderStatus({ status }) {
  const color = status === 'online' ? 'text-success' : status === 'offline' ? 'text-muted' : 'text-muted';
  return (
    <span className="m-r">
      <FA name="circle" className={color} />
    </span>
  );
}

function ChatBoxHeader({ close, isExpanded, name, status, toggle }) {
  const screenReaderText = isExpanded ? 'Hide Chat' : 'Show Chat';
  return (
    <header className="ChatHeader" onClick={toggle} onKeyPress={toggle} tabIndex={0}>
      {status && <ChatHeaderStatus status={status} />}
      <span className="sr-only">{screenReaderText}</span>
      {name}
      <CloseChatBox close={close} />
    </header>
  );
}

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
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
  ChatBox: ChatBox,
};

export default Chat;
