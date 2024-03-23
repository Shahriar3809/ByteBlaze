import { Link } from "react-router-dom";
import NotFound from '../assets/404.jpg'

const Empty = ({message}) => {
    return (
      <div className="h-screen flex items-center flex-col justify-center">
        <h1 className="text-4xl font-bold">{message}</h1>
        <img className="w-1/4" src={NotFound} alt="" />
        <Link
          to="/blogs"
          href="#_"
          className="relative inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-pink-600 group-hover:bg-primary"></span>
          <span className="relative text-black group-hover:text-white">
            See Blogs
          </span>
        </Link>
      </div>
    );
};

export default Empty;