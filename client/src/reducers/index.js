import { combineReducers } from "redux";
import { authReducer } from "./auth";
// 3. combine multiple reducers
const rootReducer = combineReducers({
    user: authReducer
})

export default rootReducer;