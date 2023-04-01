import React from 'react';
import ChatMessage from './ChatMessage';
import {useChat} from "../contexts/ChatContext";



const ChatMessages: React.FC = () => {
    const { messages } = useChat();

    return (
        <div>
            {messages.map((message) => (
                <ChatMessage key={message.id} message={message.message} sender={message.sender} />
            ))}
        </div>
    );
};

export default ChatMessages;
