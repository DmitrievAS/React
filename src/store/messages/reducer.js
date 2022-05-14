//chatId Type = {
//  id:string
// }
// messageList: {
// [chatId]: {
//  id: string, ex: 01, 02, 03,
//     text: string,
//      author: string
// }
// }
//

import {ADD_MESSAGE, UPDATE_MESSAGES_WITH_FB} from "./actions";
import {DELETE_CHAT} from "../chats/actions";

const initialState = {
    messageList: {}
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const currentList = state.messageList[action.chatId] || [];
            console.log("ADD_MESSAGE", currentList)
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`,

                        }
                    ]
                }
            }

        case UPDATE_MESSAGES_WITH_FB:
            console.log('msg, reducer', action);
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: action.messages
                }
            };

        case DELETE_CHAT:
            //todo: Удаление сообщений чата при удалении самого чата, по chatID
            // const filteredKeys = Object.keys(state.messageList).filter(chatId => chatId !== action.chatId);
            // const newState ={};
            // filteredKeys.map(element => {
            //     if (newState[element] =)
            //     newState[element] = state[element]
            // })
            return {...state};

        default:
            return state
    }
}

export default messagesReducer;