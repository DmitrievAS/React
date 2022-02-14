import {Box, Fab, TextField} from "@material-ui/core";
import React, {useCallback, useEffect, useState} from "react";
import {Send} from '@material-ui/icons';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {addMessage} from "../store/messages/actions";
import profile from "../pages/Profile";
import chats from "../pages/Chats";


const ControlPanel = () => {

    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const profileName =useSelector(state => state.profile.name)
    const { chatId } = useParams();

    const messages = useSelector( state => state.messages.messageList);

    const sendMessage = (message, author) => {
        dispatch(addMessage(chatId, {
            text: message,
            author: author
        }))
    }

    const handleButton = () => {
        sendMessage(value, profileName)
        setValue("")
    }

    const handleChange = useCallback((event) => {
        const valueFromInput = event.target.value;
        setValue(valueFromInput);
    }, [value])

    useEffect(() => {
    let timer;
    const currentChat = messages[chatId];


    if (currentChat?.length > 0 && currentChat[currentChat?.length - 1]?.author === profileName) {
        timer = setInterval(() => {
            const currentMessage = 'Сообщение сгенерировано автоматически';
            sendMessage(currentMessage, 'bot')
        }, 1500);
    }

    return () => {
        clearTimeout(timer);
    }
}, [messages[chatId]])

    return (
    <>
        <Box sx={{
            margin: '20px 0px 0px 110px'
        }}
             component='form'
             noValidate
             autoComplete='off'
             flexDirection='row'
             justifyContent='space-between'
        >
            <div className='controlPanel' style={{margin: "10px 20px"}}>
                <TextField
                    style={{margin: '0 20px'}}
                    id="outlined-basic"
                    label="Insert message"
                    variant="filled"
                    value={value}
                    onChange={handleChange}
                    autoFocus
                />
                <Fab color="primary" aria-label="edit" onClick={handleButton}>
                    <Send/>
                </Fab>

            </div>
        </Box>
    </>)
}

export default ControlPanel;