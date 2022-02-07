import {Link} from 'react-router-dom';
import Button from "../Button";
import {Delete} from "@material-ui/icons";

const ChatList = ({chats, chatId, isChat, handleAddChat, handleDelChat}) => {
    return (<div>
        {chats?.map((chat, i) => {
            return (
                <Link to={`chats/${chat.id}`} key={i} style={{color: chat.id === chatId ? 'grey' : 'black', padding: 5}}>
                    {chat?.name}
                    {isChat && <button style={{marginLeft: 15}} onClick={() => handleDelChat(chat.id)}><Delete/></button>}
                </Link>
            );
        })}
        {isChat && <Button variant='outlined' style={{margin: 20}} onClick={handleAddChat}>addChat</Button>}
    </div>)
}
export default ChatList;


// const ChatList = ({chats, chatId, handleAddChat, handleDelChat, isChat}) => {
//     return (<div className={"ChatList"}>
//     {chats?.map((chat, i) => {
//         console.log(chat);
//         return (
//             <Link to={'chats/${chat}'} key={i} style={{color: chat === chatId ? 'grey' : 'black'}}>
//                 {chats[chat]?.name}
//                 {isChat && <button onClick={() => handleDelChat(chat)}><Delete/></button>}
//             </Link>
//         );
//     })}
//     {isChat && <Button variant='outlined' style={{margin: 20}} onClick={handleAddChat}>addChat</Button>}
//     </div>)
// }
