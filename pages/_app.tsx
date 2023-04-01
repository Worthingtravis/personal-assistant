import type { AppProps } from 'next/app';
import { ChatProvider } from '../contexts/ChatContext';
// import '../styles/globals.scss'; // Import your global styles if you have any

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChatProvider>
            <Component {...pageProps} />
        </ChatProvider>
    );
}

export default MyApp;
