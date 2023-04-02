import React from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import ListCategories from "../components/ListCategories";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CategoriesHome = () => {
  const navigate=useNavigate()
  const { themeState } = useSelector((state) => state);
  return (
    <div className={themeState === "light" ? "light" : "bg-dark"} >
      <Header />
      <div className="container my-5">
        <div className="d-flex justify-content-end">
          <Button
            type={"success btn btn-sm m-3"}
            text="Kategori Ekle"
            onClick={() => navigate("/add-category")}
          />
        </div>
        <ListCategories />
      </div>
    </div>
  );
};

export default CategoriesHome;