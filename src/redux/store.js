import {createStore,combineReducers} from "redux";

import booksReducer from "./reducers/bookReducer";
import categoriesReducer from "./reducers/categoryReducer";

const rootReducer=combineReducers({
    booksState:booksReducer,
    categoriesState:categoriesReducer
})
const store=createStore(rootReducer)
 
export default store