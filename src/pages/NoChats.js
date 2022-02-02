import ChatList from "../components/ChatList";
import {useParams} from "react-router-dom";

const NoChats = (chats) => {
    const {chatId} = useParams();

    return (
        <div>
            Chats not found
                    </div>

    );
};

export default NoChats;