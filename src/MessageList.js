import React from 'react';
import PropTypes from "prop-types";
import './App.css';

const styleAuthor = {
    fontSize: 10,
    color: 'white'
}

const MessageList = ({messageList = []}) => {
    return <div className='dashboard'>
        {messageList.map((message, index) => (
            <div
                key={index}
                className={`styleMessages ${message.author === 'me' ? 'me' : 'bot'}`}
            >
                {message.text} <sup style={styleAuthor}>{message.author} </sup>
            </div>
        ))}
    </div>
}

MessageList.propTypes = {
    messageList: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}

export default MessageList