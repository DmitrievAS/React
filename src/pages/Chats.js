import MessageList from '../components/MessageList';
import ChatList from '../components/ChatList';
import ControlPanel from "../components/ControlPanel";

const Chat = () => {

    return (
        <div className ="messenger" style = {{display:"flex"}}>
            <div className = "chatsList">
                <ChatList/>
            </div>
            <div className='controlPanel'>
                <MessageList/>
                <ControlPanel/>
            </div>
        </div>
    )
}
export default Chat;


