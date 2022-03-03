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

import {ADD_MESSAGE} from "./actions";

const initialState = {
    messageList: {}
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            console.log(action);
            console.log(action.chatId);
            console.log(`${action.chatId}`);
            const currentList = state.messageList[action.chatId] || [];

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
        default:
            return state
    }
}

export default messagesReducer;