import React from "react";
import { Link } from "react-router-dom";
import { useDeleteBlogMutation } from "./services/blogApi";

const Card = ({ blog: { id, title, description, image } }) => {
    const [delBlog] = useDeleteBlogMutation();
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} height="50%" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text h-25">{description}</p>
        <div className="d-flex align-items-center">
          <Link to={`/blogs/${id}`}>
            <button className="btn btn-primary me-3">See More</button>
          </Link>
          <button onClick={() => delBlog(id)} className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
