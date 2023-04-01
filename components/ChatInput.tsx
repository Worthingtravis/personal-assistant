import React, { useState } from 'react';
import { useChat } from '../contexts/ChatContext';

interface ChatInputProps {
    onSubmitMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSubmitMessage }) => {
    const { sendMessage } = useChat();

    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (message.trim()) {
            onSubmitMessage(message.trim());
            setMessage('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default ChatInput;
