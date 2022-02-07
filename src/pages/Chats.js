import {useParams} from "react-router-dom";
import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import NoChats from "./NoChats";

const Chats = ({chats, messages, handleAddChat, handleDelChat}) => {
    let {chatId} = useParams();

    return chats ? (
        <div className={'chatsList'}>
            <ChatList
                chats={chats}
                chatId={chatId}
                handleAddChat={handleAddChat}
                handleDelChat={handleDelChat}
                isChat
            />
            <MessageList messages={messages} chatId={chatId}/>
        </div>
    ) : <NoChats/>;
}
export default Chats;

//TODO: урок №6 примерно 1 час 5 минут

