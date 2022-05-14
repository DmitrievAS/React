import {Box, Paper, ListItemButton, ListItem, Button} from "@mui/material";
import {Link, Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Home from "./Home";
import Chats from "./Chats";
import Profile from "./Profile";
import NoChats from "./NoChats";
import Gists from "./Gists";
import SignUp from "./SignUp";
import RequiredAuth from "../hocs/RequiredAuth";
import Login from "./Login";
import useAuth from "../hook/useAuth";

const Routers = () => {
    let auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    return (
        <div className={'chatList'}>
            <Box className="header">
                <Paper className='ListFolders' elevation={0} sx={{display: 'flex'}}>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton className={"mainMenuButton"} sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/gists'>Gists</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/signup'>Sign Up</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Link to='/login'>Login</Link>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding className={"mainMenuItem"}>
                        <ListItemButton sx={{height: 56, justifyContent: "center"}}>
                            <Button onClick={() => auth.signout(() => {
                                navigate(from, {replace: true})
                            })}>Sign Out</Button>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home message={"Hi"}/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>

                    <Route element={<RequiredAuth/>}>
                        <Route path="/chats/" exact element={<NoChats/>}/>
                        <Route path="/chats/:chatId" element={<Chats/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/gists" element={<Gists/>}/>
                    </Route>
                    <Route path="*" element={<NoChats/>}/>
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
