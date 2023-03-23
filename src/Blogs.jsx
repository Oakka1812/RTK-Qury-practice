import React from "react";
import { useGetBlogsQuery } from "./services/blogApi";
import Card from "./Card";
import { Link } from "react-router-dom";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();
  return (
    <>
      <div className="mt-5 d-flex flex-column align-items-center">
        <Link to={"/create"}>
          <button className="btn btn-primary mb-5">Create New Blog</button>
        </Link>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {blogs?.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
