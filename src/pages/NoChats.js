import ChatList from "../components/ChatList";

const NoChats = ({ chats }) => {
    return (
        <div>
            Chats not found
            <ChatList chats={chats} />
        </div>

    );
};

export default NoChats;