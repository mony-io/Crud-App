import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Add() {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(book);

  const clickHandler = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='form'>
      <h1>Add New Book</h1>
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
        Add
      </button>
    </div>
  );
}

export default Add;
