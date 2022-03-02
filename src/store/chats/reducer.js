import {ADD_CHAT, DELETE_CHAT} from "./actions";

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
                        id: `id${state.chatList.length}`,
                        name: action.name
                    }
                ]
            }
        case DELETE_CHAT:
            return {
                ...state,
               chatList: [
                   ...state.chatList.slice(0, action.index),
                   ...state.chatList.slice(action.index +1),
                   // ...state.chatList.slice(),
               ]
            }

        default:
            return state
    }
}
export default chatsReducer;
