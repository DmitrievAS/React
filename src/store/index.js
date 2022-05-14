import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
// import createSagaMiddleware from "redux-saga";
// import storage from 'redux-persist/lib/storage';
// import {persistReducer, persistStore} from "redux-persist";
import profileReducer from "../store/profile/profileReducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import gistsReducer from "./gists/reducer";
import thunk from "redux-thunk";
// import mySaga from "./sagas";

// const persistConfig = {
//     key: 'root',
//     storage
// }

const allReducers = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer
})
// const persistedReducer = persistReducer(persistConfig, allReducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk))); - это строка для middleware(persist)
export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunk)));
// sagaMiddleware.run(mySaga);
//
// export const persistor = persistStore(store);