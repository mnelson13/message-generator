import React from 'react';
import './MessageCard.css';

const MessageCard = props => (
    <div className="message z-depth-4">
        <h5>Message #{props.id}</h5>
        <p>{props.message}</p>
        <button className="btn waves-effect waves-light blue darken-4" onClick={() => props.send(props.id)}>Send
            <i className="material-icons right">send</i>
        </button>  
    </div>
);

export default MessageCard;