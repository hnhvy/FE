import { combineReducers, createStore } from "redux";
import BookChairReducer from "../reducers/BookChairReducer";
const rootReducer = combineReducers({
  //store
  BookChairReducer
})
export const store = createStore(rootReducer)