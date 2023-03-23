import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetSingleBlogQuery, useUpdateBlogMutation } from "./services/blogApi";

const Edit = () => {
  const { id } = useParams();
  const { data: blog } = useGetSingleBlogQuery(id);
  const [updateBlog] = useUpdateBlogMutation(id);
  const titleRef = useRef(blog?.title);
  const descriptionRef = useRef(blog?.description);
  const imageRef = useRef(blog?.image);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const desc = descriptionRef.current.value;
    const img = imageRef.current.value;
    console.log(title, desc, img);
    const newData = {id:id, title:title, description:desc, image:img}
    updateBlog(newData);
    navigate("/");
  };

  return (
    <div className="my-5">
      <h2>Update Blog</h2>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="form-label">Title</label>
          <input
            type="text"
            defaultValue={titleRef.current}
            ref={titleRef}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="form-label">Description</label>
          <input
            type="text"
            defaultValue={descriptionRef.current}
            ref={descriptionRef}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="form-label">Image</label>
          <input
            type="text"
            defaultValue={imageRef.current}
            ref={imageRef}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-outline-success me-3">
          Update
        </button>
        <Link to={"/"}>
          <button className="btn btn-outline-danger">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Edit;
