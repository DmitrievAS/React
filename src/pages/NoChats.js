import ChatList from "../components/ChatList";

const NoChats = ({ chats }) => {
    return (
        <div className={'chatsList'}>
            <ChatList chats={chats}/>
        </div>

    );
};


export default NoChats;