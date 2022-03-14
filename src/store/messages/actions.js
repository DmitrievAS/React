// import message from "../../Message";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA';


export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});

export const addMessageSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    chatId, message
})

export const addMessageWithThunk = (chatId, message) => (dispatch) => {
    dispatch(addMessage(chatId, message));
    console.log(addMessageWithThunk, chatId, message);

    if (message.author !== 'bot') {
        const botMessage = {text: "привет, я бот - лови сообщение", author: 'bot'}
        setTimeout(() => {
            dispatch(addMessage(chatId, botMessage))
        }, 2000);
    }
};