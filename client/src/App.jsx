import React from 'react';
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components';

import './App.css';

const apiKey = 'mvw5ur48tzyn';

const client = StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team dark">
                <ChannelListContainer
                
                />
                <ChannelContainer
                
                />
            </Chat>
        </div>
    );
}

export default App
