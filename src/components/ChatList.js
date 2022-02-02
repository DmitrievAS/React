import {Link} from 'react-router-dom';

const ChatList = ({chats}) => {
    console.log({ chats })
    return (<div className={"ChatList"}>
        {chats?.map((chat, i) => {
            return (
                <Link to={`chats/${chat}`} key={i}>
                    {chat?.name}
                </Link>
            );
        })}
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
