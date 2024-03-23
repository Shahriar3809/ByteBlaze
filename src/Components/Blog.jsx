import { Link, useNavigation } from "react-router-dom";
import PlaceHolder from '../assets/404.jpg'
// import Loader from "./Loader";
import { IoMdCloseCircle } from "react-icons/io";
import { deleteBlog } from "../Utils";
// import { ToastContainer } from "react-toastify";

const Blog = ({ blog, deletable, handleRemove }) => {
  // console.log(blog)
  const { title, description, cover_image, id } = blog;

  
  return (
    <div className="relative">
      <Link
        to={`/blog/${id}`}
        rel="noopener noreferrer"
        href="#"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 bg-gray-500 bg-gray-500"
          src={cover_image || PlaceHolder}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-400 text-gray-400">
            {new Date(blog.published_at).toLocaleDateString()}
          </span>
          <p>{description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute -top-3 -right-3 cursor-pointer bg-green-600 rounded-full"
        >
          <IoMdCloseCircle className="text-3xl text-white" />
        </div>
      )}
     
    </div>
  );
};

export default Blog;