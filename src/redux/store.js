import {createStore,combineReducers} from "redux";

import booksReducer from "./reducers/bookReducer";
import categoriesReducer from "./reducers/categoryReducer";
import themeReducer from "./reducers/themeReducer";
import loginReducer from "./reducers/loginReducer";

const rootReducer=combineReducers({
    booksState:booksReducer,
    categoriesState:categoriesReducer,
    themeState: themeReducer,
    loginState: loginReducer

})
const store=createStore(rootReducer)
 
export default store