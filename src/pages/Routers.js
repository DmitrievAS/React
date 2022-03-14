import {Box, Paper, ListItemButton, ListItem} from "@mui/material";
import {Link, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Chats from "./Chats";
import Profile from "./Profile";
import NoChats from "./NoChats";
import Gists from "./Gists";

const Routers = () => {
    return (
        <div className={'chatList'}>
            <Box className="header">
                <Paper className='ListFolders' elevation={0} sx={{display: 'flex', color: 'ccc' }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{height: 56, color: 'D636C9'}}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{height: 56}}>
                            <Link to='/chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{height: 56}}>
                            <Link to='/profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{height: 56}}>
                            <Link to='/gists'>Gists</Link>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/chats/:chatId" element={<Chats/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="*" element={<NoChats/>}/>
                    <Route path="/gists" element={<Gists/>}/>
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
