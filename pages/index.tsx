// pages/index.tsx

import ChatInput from '../components/ChatInput';
import ChatMessages from '../components/ChatMessages';
import { useChat } from '../contexts/ChatContext';

export default function Home() {
    const { messages, sendMessage } = useChat();

    return (
        <div>
            <h1>Personal Assistant</h1>
            <ChatMessages/>
            <ChatInput onSubmitMessage={sendMessage} />
        </div>
    );
}
