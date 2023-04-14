import { combineReducers } from "redux";
import productReducer from "./productReduceer";

const rootReducer = combineReducers({
    product: productReducer,
});

export default rootReducer;
