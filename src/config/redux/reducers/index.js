import { combineReducers } from "redux";
import authReducer from "./authreducers";

const rootReducer = combineReducers({
    auth: authReducer,
    
})

export default rootReducer;
