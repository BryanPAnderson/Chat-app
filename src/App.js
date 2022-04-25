import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="cb13b36b-db76-4661-8623-cb4b5eb21784"
            userName="johndoe"
            userSecret="Password"
            renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps} />}

        />
    )
}

export default App;