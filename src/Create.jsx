import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddBlogMutation } from "./services/blogApi";

const Create = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imgaeRef = useRef();
  const [addBlog] = useAddBlogMutation();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const desc = descriptionRef.current.value;
    const img = imgaeRef.current.value;
    const newBlog = {
      id: Date.now(),
      title: title,
      description: desc,
      image: img,
    };
    addBlog(newBlog);
    navigate("/")
    console.log(newBlog);
  };
  return (
    <div className="my-5">
      <h2>Creat New Blog</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="form-label">Title</label>
          <input type="text" ref={titleRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="form-label">Description</label>
          <input type="text" ref={descriptionRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="form-label">Image</label>
          <input type="text" ref={imgaeRef} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary me-3">
          Create
        </button>
        <Link to={"/"}>
          <button className="btn btn-danger">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
