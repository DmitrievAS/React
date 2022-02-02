import {Link} from 'react-router-dom';
import {Delete} from "@material-ui/icons";
import {Button} from '@mui/material'
import React from "react";

const ChatList = ({chats, chatId, handleAddChat, handleDelChat, isChat}) => {
    return (<div className={"ChatList"}>
    {chats?.map((chat, i) => {
        return (
            <Link to={'chats/${chat}'} key={i} style={{color: chat === chatId ? 'grey' : 'black'}}>
                {chats[chat]?.name}
                {isChat && <button onClick={() => handleDelChat(chat)}><Delete/></button>}
            </Link>
        );
    })}
    {isChat && <Button variant='outlined' style={{margin: 20}} onClick={handleAddChat}>addChat</Button>}
    </div>)
}
export default ChatList;