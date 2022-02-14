import {ADD_CHAT} from "./actions";
import {CHANGE_NAME} from "../profile/chatActions";

const initialState = {
    chatList: []
}

// массив [{
//     id: string,
//     name: string
//  }]

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: 'id${state.chatsList.length}',
                        name: action.name
                    }
                ]
            }
        default:
            return state
    }
}
export default chatsReducer;
