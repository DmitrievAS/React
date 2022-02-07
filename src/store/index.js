import { createStore } from 'redux'
import profileReducer from "../store/profile/profileReducer";

export const store = createStore(profileReducer);



