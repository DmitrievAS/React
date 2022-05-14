import {Link, useParams} from 'react-router-dom';
import {Button, Dialog, DialogTitle, List, ListItem, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {Delete} from "@material-ui/icons";
import {addChatWithFB, deleteChatWithFB, initTrackerWithFB} from "../store/middleware";
import {useDispatch, useSelector} from "react-redux";


const ChatList = () => {

    const chats = useSelector(state => state.chats.chatList);
    const {chatId} = useParams();
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState('');
    const dispatch = useDispatch();


    const handleOpen = () => {
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
    }

    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChatWithFB(newChatName));
        setNewChatName("");
        handleClose();
    }

    const handleDelete = (id) => {
        dispatch(deleteChatWithFB(id));
    }

    useEffect(() => {
        dispatch(initTrackerWithFB());
    }, []);


    // useEffect(() => {
    //     const db = getDatabase(firebase);
    //     const dbRef = ref(db);
    //     get(child(dbRef, "/chats")).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             const obj = snapshot.val();
    //             const chatIds = Object.keys(obj);
    //             const chatArr = chatIds.map(item => ({id: item, name: obj[item].name}));
    //             setChats(chatArr);
    //             console.log("useEffect. get chatArr", chatArr)
    //         } else {
    //             console.log("no data");
    //         }
    //     })
    // }, [])

    return (
        //todo сделать class для основного div

        <div>
            <label style={{fontSize: "large", display: 'block', padding: '10px'}}>Chats:</label>
            <List>
                {chats?.length > 0 ? chats.map((chat, index) => (
                    <ListItem key={index}>
                        <Link to={`/chats/${chat.id}`}>
                            <b style={{color: chat.id === chatId ? `black` : `grey`}}>
                                {chat.name}
                            </b>
                            <Button onClick={() => handleDelete(chat.id)}>
                                <Delete style={{color: "white"}}/>
                            </Button>
                        </Link>
                    </ListItem>
                )) : <div> No chats </div>}
            </List>
            <div>
                <Button onClick={handleOpen}>Add chat</Button>
                <Dialog onClose={handleClose} open={visible}>
                    <DialogTitle> Please, insert chat`s name </DialogTitle>
                    <div className='chatNameBox'>
                        <TextField value={newChatName} onChange={handleChange}/>
                        <Button onClick={onAddChat}>Add chat</Button>
                    </div>
                </Dialog>
            </div>
        </div>

    )
}
export default ChatList;
