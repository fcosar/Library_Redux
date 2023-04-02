import React, {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "./redux/actions/actionTypes";

import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';
import EditBook from './pages/EditBook';
import Error from './components/Error';
import CategoriesHome from './pages/CategoriesHome';
import AddCategory from "./pages/AddCategory";
import CategoryEdit from './pages/CategoryEdit';
import Login from './pages/Login';


import api from "./api/api";
import urls from "./api/urls";
import Loading from "./components/Loading";


function App() {
   /* const booksState=useSelector(state=>state.booksState)
  const categoriesState=useSelector(state => state.categoriesState) */
  const {booksState,categoriesState,loginState}=useSelector(state=>state)
  const dispatch=useDispatch()
  useEffect(() => {
    /* get books */
    dispatch({ type: actionTypes.bookActions.GET_BOOKS_START });
    api
      .get(urls.books)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.bookActions.GET_BOOKS_SUCCESS,
            payload: res.data,
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.bookActions.GET_BOOKS_FAIL,
          payload: "Kitaplari çekme işlemi esnasinda bir hata oluştu",
        });
      });
    /* get categories */
    dispatch({ type: actionTypes.categoryActions.GET_CATEGORIES_START });
    api
      .get(urls.categories)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.categoryActions.GET_CATEGORIES_SUCCESS,
            payload: res.data,
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.categoryActions.GET_CATEGORIES_FAIL,
          payload: "Kategori bilgilerini çekerken bir hata oluştu.",
        });
      });
  }, []);
  if(booksState.pending === true || categoriesState.pending === true) return <Loading />
  if(booksState.error === true || categoriesState.error === true) return <Error />
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={loginState.success ? <Home /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/add-book"
        element={
          loginState.success ? <AddBook /> : <Navigate to={"/login"} />
        }
      />
      <Route
        path="/book-detail/:bookId"
        element={
          loginState.success ? <BookDetail /> : <Navigate to={"/login"} />
        }
      />
      <Route
        path="/edit-book/:bookId"
        element={
          loginState.success ? <EditBook /> : <Navigate to={"/login"} />
        }
      />
      <Route
        path="/categories"
        element={
          loginState.success ? <CategoriesHome /> : <Navigate to={"/login"} />
        }
      />
      <Route
        path="/add-category"
        element={
          loginState.success ? <AddCategory /> : <Navigate to={"/login"} />
        }
      />
      <Route
        path="/edit-category/:categoryId"
        element={
          loginState.success ? <CategoryEdit /> : <Navigate to={"/login"} />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
