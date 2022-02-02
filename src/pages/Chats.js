import {useParams} from "react-router-dom";
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import NoChats from "./NoChats";
import {useState} from "react";


const initialChats = {
    id1: {
        name: "Chat 1",
        messages: [{text: "FirstMessage", author: 'bot'}],
    },
    id2: {
        name: "Chat 2",
        messages: [{text: "FirstMessageHereToo!", author: 'me'},
            {text: "SecondMessageHereToo!", author: 'me'}],
    },
};


const Chats = ({chats, handleAddChat, handleDelChat}) => {
    // const [chatsList, setChatsList] = useState(initialChats);
    let {chatId} = useParams();

    return chats[chatId] ? (
        // <div className={'chats'}>
        //     <ChatList chats={chatsList} chatId={chatId} />
        //     <MessageList messageList={chatsList[chatId].messages} />
        // </div>
        <div className={'chats'}>
            <ChatList
                chats={chats}
                chatId={chatId}
                handleAddChat={handleAddChat}
                handleDelChat={handleDelChat}
                isChat
            />
            <MessageList messageList={chats[chatId].messages}/>
        </div>
    ) : <NoChats/>;
}

export default Chats;

//TODO: урок №6 примерно 1 час 5 минут

