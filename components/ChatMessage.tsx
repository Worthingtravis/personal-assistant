import React from 'react';

interface ChatMessageProps {
    message: string;
    sender: 'user' | 'assistant';
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, sender }) => {
    return (
        <div className={`chat-message ${sender}`}>
            <div className={`message-content ${sender}`}>{message}</div>
        </div>
    );
};

export default ChatMessage;
