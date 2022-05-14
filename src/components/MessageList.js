import {AccountCircle, Adb, Android, Face} from "@material-ui/icons";
import PropTypes from "prop-types";
import '../App.css';
import {Avatar, ListItemAvatar, ListItem, List, Box, ListItemText, Paper} from "@mui/material";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {getDatabase, get, ref, child} from "firebase/database";
import firebase from "../service/firebase";
import {getMessagesByChatIdWithFB} from "../store/middleware";
import {AUTHORS} from "../constants/endpoints";

;

const MessageList = () => {
    const allMessages = useSelector(state => state.messages.messageList);
    const {chatId} = useParams();
    const messages = allMessages[chatId];
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getMessagesByChatIdWithFB(chatId));
        },
        [chatId]);


    return (
        <Paper elevation={1} sx={{padding: "5px", margin: "10px", minWidth: "500px"}}>
            <List sx={{width: '100%', maxWidth: 350, bgcolor: 'background.paper'}}>
                {messages?.map((item, index) => (
                    <ListItem key={index}>
                        <ListItemAvatar>
                            <Avatar>{item.author !== AUTHORS.bot ? <AccountCircle/> : <Android/>}</Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.text} secondary={item.author}/>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
};

MessageList.propTypes = {
    messageList: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}

export default MessageList


