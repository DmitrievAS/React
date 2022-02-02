// messageList: {
// [chatId]: {
//  id: string, ex: 01, 02, 03,
//     text: string,
//      author: string
// }
// }

import {ADD_MESSAGE} from "./action";
import messageList from "../../components/MessageList";
import {unstable_concurrentAct} from "react-dom/cjs/react-dom-test-utils.production.min";

// const messageReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_MESSAGE:
//             console.log(action);
//             const currentList = state.messageList[action.chatId] || [];
//             return {
//                 ...state,
//                 messageList: [action.chatId]: [
//             ...currentList,
//             {...action.message,
//                 id: '${action}'
//             //    TODO: дописать УРОК 6 примерно 48 минута урока.
//             }
//         ]
//     }
// }
// }