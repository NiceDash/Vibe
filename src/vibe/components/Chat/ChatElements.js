import React from 'react';

function ChatSubText({ message }) {
  return (
    <div className="ChatSubText text-muted">
      <i className="fa fa-ok text-success" />
      {message}
    </div>
  );
}

function ChatMessage({ message }) {
  return (
    <div className="clear p-b">
      <div>
        <div className="p-a-xs p-l-sm p-r-sm bg-primary text-white inline-block rounded text-left">{message}</div>
      </div>
      <ChatSubText message="Just now" />
    </div>
  );
}

function ChatDisplay({ currentUserImage, height }) {
  const style = {
    height: height ? height : 200,
  };
  return (
    <div className="ChatDisplay" style={style}>
      <div className="p-a">
        <span className="pull-left w-32 m-r-sm">
          <img src={currentUserImage} alt="." className="w-full img-circle" />
        </span>
        <ChatMessage message={'Hello'} />
      </div>
    </div>
  );
}

function ChatInput() {
  return (
    <div className="p-a-sm b-t bg-white">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Say something" />
        <span className="input-group-btn m-l-sm">
          <button className="btn bg-white b-a no-shadow" type="button">
            <i className="fa fa-send" />
            <span className="sr-only">Send Message</span>
          </button>
        </span>
      </div>
    </div>
  );
}

export default function ChatBox({ image }) {
  return (
    <div className="Chat-wrap">
      <ChatDisplay currentUserImage={image} />
      <ChatInput />
    </div>
  );
}
