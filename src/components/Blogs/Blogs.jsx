// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])
    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="lg:w-2/3 w-full">
            <h1 className="text-2xl font-semibold">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog =><Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};
Blogs.prototypes = {
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;