import {createStore,combineReducers} from "redux";

import booksReducer from "./reducers/bookReducer";
import categoriesReducer from "./reducers/categoryReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer=combineReducers({
    booksState:booksReducer,
    categoriesState:categoriesReducer,
    themeState: themeReducer
})
const store=createStore(rootReducer)
 
export default store