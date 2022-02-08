import {Adb, Face} from "@material-ui/icons";
import PropTypes from "prop-types";
import '../App.css';
import {Avatar, ListItemAvatar, ListItem, List, Box, ListItemText} from "@mui/material";
import {useParams} from "react-router-dom";


// const MessageList2 = (messages) => {
//     // (Object.keys(messages).map((el) => console.log(el)));
//     let {chatId} = useParams();
//     console.log(messages);
//
//     return (
//         <Box sx={{width: 600, height: 600, border: '1px solid #ссс', overflow: "auto", display: "flex"}}>
//             <List sx={{mb: 2}}>
//                 {messages["id1"]?.map((message, i) =>
//                 <ListItem
//                             // button
//                             // key={i}
//
//                                     >
//                     <ListItemAvatar>
//                         <Avatar
//                             sx={{bgcolor: messages.id1 === 'bot' ? 'green' : "blue"}}
//                             >
//                             {messages.id1.author === "bot" ? <Adb/> : <Face/>}
//                         </Avatar>
//                     </ListItemAvatar>
//                     <ListItemText primary={messages.id1.text} secondary={messages.id1.author}/>
//                 </ListItem>)
//                 }}};
//             </List>
//         </Box>
//     )
// }

const MessageList = (messages) => {
    let {chatId} = useParams();
    console.log(chatId)
    return (
        <Box className={"styleMessages"} sx={{width: 600, height: 600, border: '1px solid #ссс', overflow: "auto"}}>
            <List sx={{mb: 2}}>
                {messages[chatId]?.map((message, i) => (
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