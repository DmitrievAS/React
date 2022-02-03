import {useParams} from "react-router-dom";
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import NoChats from "./NoChats";

const Chats = ({chats, messages, handleAddChat, handleDelChat}) => {
    let {chatId} = useParams();

    return chats[chatId] ? (
        <div className={'chats'}>
            <ChatList
                chats={chats}
                chatId={chatId}
                handleAddChat={handleAddChat}
                handleDelChat={handleDelChat}
                isChat
            />
            <MessageList messageList={messages}/>
        </div>
    ) : <NoChats/>;
}
export default Chats;

//TODO: урок №6 примерно 1 час 5 минут

