import {Adb, Face} from "@material-ui/icons";
import PropTypes from "prop-types";
import '../App.css';
import {Avatar, ListItemAvatar, ListItem, List, Box, ListItemText} from "@mui/material";


const MessageList = ({messageList}) => {
    return (
        <Box
            sx={{
                width: 300,
                height: 600,
                border: '1px solid #ссс',
                overflow: "auto"
            }}>
            <List sx={{mb: 2}}>
                {messageList.map((message, i) => (
                    <ListItem
                        button
                        key={i}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: message.author === 'Bot' ? 'green' : "blue"}}>
                                {message.author === "bot" ? <Adb/> : <Face/>}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={message.text} secondary={message.author}/>
                    </ListItem>
                ))};
            </List>
        </Box>
    );
};


// const styleAuthor = {
//     fontSize: 10,
//     color: 'white'
// }

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