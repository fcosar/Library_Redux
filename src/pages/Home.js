import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ListBooks from "../components/ListBooks";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const { themeState } = useSelector((state) => state);
  return (
    <div
      className={themeState === "light" ? "light" : "bg-dark"} >
      <Header />
      <div 
       className="container my-5">
        <div className="d-flex justify-content-end">
          <Button
            className="btn-sm m-3"
            type={themeState === "light" ? "success" : "success" }
            text="Kitap Ekle"
            onClick={() => navigate("/add-book")}
          />
        </div>
        <ListBooks />
      </div>
    </div>
  );
};

export default Home;