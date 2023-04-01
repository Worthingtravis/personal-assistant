import { createContext, useContext, useState } from 'react';

interface ChatMessage {
    id: string;
    message: string;
    sender: 'user' | 'assistant';
}

interface ChatContextData {
    messages: ChatMessage[];
    sendMessage: (message: string) => void;
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData);

export const useChat = () => {
    return useContext(ChatContext);
};

interface ChatProviderProps {
    children: React.ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const sendMessage = async (message: string) => {
        const userMessage: ChatMessage = {
            id: generateId(),
            message,
            sender: 'user',
        };

        setMessages((prevMessages) => [...prevMessages, userMessage]);

        // Send the user message to your NLP model and get the assistant response
        const assistantResponse = await fetchAssistantResponse(message);

        const assistantMessage: ChatMessage = {
            id: generateId(),
            message: assistantResponse,
            sender: 'assistant',
        };

        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
    };

// Generate a unique ID for each message
    const generateId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const fetchAssistantResponse = async (userMessage: string) => {
        try {
            const response = await fetch('/api/assistant', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            if (!response.ok) {
                throw new Error('Error fetching assistant response');
            }

            const data = await response.json();
            return data.response;
        } catch (error) {
            console.error('Error fetching assistant response:', error);
            return 'Sorry, I am unable to process your request at the moment.';
        }
    };



    return (
        <ChatContext.Provider value={{ messages, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );
};
