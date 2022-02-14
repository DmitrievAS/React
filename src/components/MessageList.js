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
            >
                <ListItemAvatar>
                    <Avatar sx={{backgroundColor: message.author === 'bot' ? 'green' : "blue"}}>
                        {message.author !== profileName ? <Adb/> : <Face/>}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className='styleMessages' primary={message.text} secondary={message.author}/>
            </ListItem>
        )
    }, [profileName])

    return (
        <Box className={"dashboard"} sx={{ border: '1px solid #ссс'}}>
            <List sx={{mb: 2, width: 500, }}>
                {getMessagesById?.map((message, index) => renderMessage( message, index ))}
            </List>
        </Box>
    );
};


// const [messageList, setMessagesList] = useState([]);


// useEffect(() => {
//         let timer;
//         if (messageList.length > 0 && messageList[messageList.length - 1].author === 'me') {
//             timer = setInterval(() => {
//                 setMessagesList([...messageList, {
//                     text: 'сообщение бота',
//                     author: 'bot'
//                 }]);
//             }, 1500);
//         }
//
//         return () => {
//             clearTimeout(timer);
//         }
//     },
//     [messageList])

// const MessageList = ({chats, chatsId = []}) => {
//     return (<div className='dashboard'>
//         {/*{messageList.map((message, index) => (*/}
//         {/*    <div*/}
//         {/*        key={index}*/}
//         {/*        className={`styleMessages ${message.author === 'me' ? 'me' : 'bot'}`}*/}
//         {/*    >*/}
//         {/*        {message.text} <sup style={styleAuthor}>{message.author} </sup>*/}
//         {/*    </div>*/}
//         {/*))}*/}
//         Привет!
//
//     </div>)
// }

MessageList.propTypes = {
    messageList: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string,
        author: PropTypes.string
    }))
}

export default MessageList


//TODO есть в уроке 7.