import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import { list } from "postcss";
import Blog from "../Components/Blog";
import Empty from "../Components/Empty";



const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        const stored = getBlogs();
        setBlogs(stored);
    },[])
// console.log(blogs)

const handleRemove = (blogId) => {
  deleteBlog(blogId);
    const stored = getBlogs();
    setBlogs(stored);
};



if(blogs.length<1) {
    return <Empty message={`No Bookmarks Available`}></Empty>;
}
    return (
      <div className=" max-w-[1230px] mx-auto py-8 grid grid-cols-3 gap-5">
        {blogs.map((blog) => (
          <Blog
            handleRemove={handleRemove}
            deletable={true}
            blog={blog}
            key={blog.id}
          ></Blog>
        ))}
      </div>
    );};

export default Bookmarks;