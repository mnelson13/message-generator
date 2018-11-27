import React from 'react';
import './MessageCard.css';

//MessageCard component to render a card for each message template
const MessageCard = props => (
    <div className="message z-depth-4">
        <h5>Message #{props.id}</h5>
        <p>{props.message}</p>
        <button className="btn waves-effect waves-light blue darken-4" onClick={() => props.send(props.id)}>
            Send   <i class="far fa-envelope"></i>
        </button>  
    </div>
);

export default MessageCard;