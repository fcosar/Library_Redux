import React from "react";
import Icon from "../assets/tl.png"
import { useParams} from "react-router-dom";
import { useSelector } from "react-redux";

const Price = ()=> {
    const { bookId } = useParams();
    const { booksState} = useSelector((state) => state);
    const bookPrice = booksState.books.find((item) => item.id === bookId);
    console.log(bookPrice)
  return (
    <div  style={{
      display:"flex",
      justifyContent:"space-between",
       alignItems:"center"
    }}>
      <p className="m-1 fw-bold fs-4 text-success">{bookPrice.price === "" ? "Belirtilmemiş" : bookPrice.price}</p>
      <img src={Icon} />
    </div>
  )
}

export default Price