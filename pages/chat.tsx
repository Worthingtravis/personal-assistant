import ChatInput from '../components/ChatInput';
import ChatMessages from '../components/ChatMessages';

const Chat = () => {
    return (
        <div className="chat-container">
            <div className="chat-messages">
                <ChatMessages />
            </div>
            <div className="chat-input">
                {/*<ChatInput  />*/}
            </div>
        </div>
    );
};

export default Chat;
