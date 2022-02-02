import {Box, Paper, ListItemButton, List, ListItemText, Divider, ListItem} from "@mui/material";
import React, {useState} from "react";
import {Link, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Chats from "./Chats";
import Profile from "./Profile";
import NoChats from "./NoChats";
import ChatList from "../components/ChatList";

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


const chatListInitial = [
    {id: 'id1', name: 'Chat 1'},
    {id: 'id2', name: 'Chat 2'}
];

const messagesInitial = {
    id1: [{text: 'Hello', author: 'me'}],
    id2: [{text: 'Ciao', author: 'me'}]
};

const Routers = () => {
//TODO: поменять initialChats на chatListInitial
    const [chats, setChats] = useState(chatListInitial);
    const [messages, setMessages] = useState(messagesInitial)

    const handleDelChat = (id) => {
        const newChats = chats.filter(chat => chat.id !== id);
        setChats(newChats);
        const newMsg = {...messages};
        delete newMsg[id];
        setMessages(newMsg);
    };
    const handleAddChat = () => {
        const chatLen = chats.length
        setChats([...chats, {id: `id${chatLen}`, name: `Chat ${chatLen}`}]);
        setMessages({...messages, ...{[`id${chatLen}`]: []}})
    };


    return (

        <div className='chatsList'>
            <Box sx={{ display: 'flex' }}>
                <Paper elevation={0} sx={{ minWidth: 256, display: 'flex' }}>
                    <ListItem component='div' disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component='div' disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem component='div' disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link to='/profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messenger'}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/chats:chatId" element={<Chats
                        chats={chats}
                        handleAddChat={handleAddChat}
                        handleDelChat={handleDelChat}
                    />
                    }/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="*" element={<NoChats chats={chats}/>}/>
                </Routes>
            </div>


        </div>
    )
    // внутри div - это Children
}

export default Routers;


//1. Установить react-router-dom. Добавить домашнюю страницу по адресу “/” со списком ссылок на страницу чатов и страницу профиля. +
// 2. Добавить страницу профиля (пока не несет никакой функциональности, можно сделать ее пустой). +
// 3. Настроить разделение приложения на чаты с помощью роутера (использовать параметры url). Приложение должно корректно работать, если пользователь вводит идентификатор несуществующего чата или если идентификатора чата нет (т.е. адрес “/chats/”). +
// 4. * Добавить возможность удаления и добавления чатов.
