import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function Update() {
  const [error, setError] = useState(false);

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const bookId = location.pathname.split("/")[2];

  const changeHandler = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);

  const clickHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input
        type='text'
        placeholder='title'
        onChange={changeHandler}
        name='title'
      />
      <input
        type='text'
        placeholder='desc'
        onChange={changeHandler}
        name='desc'
      />
      <input
        type='number'
        placeholder='price'
        onChange={changeHandler}
        name='price'
      />
      <input
        type='text'
        placeholder='cover'
        onChange={changeHandler}
        name='cover'
      />
      <button className='formButton' onClick={clickHandler}>
        Update
      </button>
      {error && "Somthing when wrong!"}
      <Link to='/'>See all books</Link>
    </div>
  );
}

export default Update;
