import {Adb, Face} from "@material-ui/icons";
import PropTypes from "prop-types";
import '../App.css';
import {Avatar, ListItemAvatar, ListItem, List, Box, ListItemText} from "@mui/material";

const MessageList = (messages) => {
    console.log({messages})

    return (
        <Box sx={{ width: 600, height: 600, border: '1px solid #ссс', overflow: "auto" }}>
            <List sx={{mb: 2}}>
                {messages?.map((message, i) => (
                    <ListItem
                        button
                        key={i}
                    >
                        <ListItemAvatar>
                            <Avatar sx={{bgcolor: messages.author === 'Bot' ? 'green' : "blue"}}>
                                {messages.author === "bot" ? <Adb/> : <Face/>}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={messages.text} secondary={messages.author}/>
                    </ListItem>
                ))};
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