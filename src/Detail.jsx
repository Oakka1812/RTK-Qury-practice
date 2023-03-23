import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from './services/blogApi';

const Detail = () => {
    const {id} = useParams();
    const {data: blog} = useGetSingleBlogQuery(id);

  return (
    <div className='mt-5'>
        <img src={blog?.image} width="300px" alt="" />
        <h2>{blog?.title}</h2>
        <p>{blog?.description}</p>
        <Link to={"/"}>
        <button className='btn btn-outline-primary me-3'>Home</button>
        </Link>
        <Link to={`/edit/${blog?.id}`}>
        <button className='btn btn-outline-success'>Edit</button>
        </Link>
    </div>
  )
}

export default Detail