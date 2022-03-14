import {Adb, Face} from "@material-ui/icons";
import PropTypes from "prop-types";
import '../App.css';
import {Avatar, ListItemAvatar, ListItem, List, Box, ListItemText} from "@mui/material";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useCallback} from "react";

const MessageList = () => {
    let {chatId} = useParams();
    const profileName = useSelector(state => state.profile.name);
    const messages = useSelector(state => state.messages.messageList);
    const getMessagesById = messages[chatId];

    const renderMessage = useCallback((message, index) => {
        return (
            <ListItem
                button
                key={index}
                sx={{width: "500px", backgroundColor: 'fff'}}
            >
                <ListItemAvatar>
                    <Avatar sx={{backgroundColor: message.author === 'bot' ? 'green' : "blue"}}>
                        {message.author !== profileName ? <Adb/> : <Face/>}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className='styleMessages'
                              sx={{textAlign: message.author === 'bot' ? 'left' : "right"}}
                              primary={message.text} secondary={message.author}/>
            </ListItem>
        )
    }, [profileName])

    return (
        <Box className="dashboard">
            <List sx={{ mb: 1, minHeight: "500px" }}>
                {getMessagesById?.map((message, index) => renderMessage(message, index))}
            </List>
        </Box>
    );
};

MessageList.propTypes = {
    messageList: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}

export default MessageList


