import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleAddToBookmarks}) => {
        const [blogs,setBlogs] = useState([]);
        useEffect(()=>{
            fetch('blogs.json')
            .then(res => res.json())
            .then (data => setBlogs(data))
        }, [])
    return (
        <div className="md:container md:mx-auto md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog =>
                 <Blog blog={blog} 
                    key={blog.id}
                    handleAddToBookmarks={handleAddToBookmarks}>
                </Blog>)
            }
        </div>
    );
};

export default Blogs;