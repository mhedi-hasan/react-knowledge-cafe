import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="lg:w-2/3 w-full">
            <h1 className="text-3xl">Blogs : {blogs.length}</h1>
        </div>
    );
};

export default Blogs;