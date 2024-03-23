import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const {
      title,
      body_html,
      description,
      cover_image,
    } = blog;
console.log(blog)
    return (
      <div>
        <div>
          <div
            rel="noopener noreferrer"
            href="#"
            className="mx-auto group hover:no-underline focus:no-underline"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 bg-gray-500 bg-gray-500"
              src={cover_image}
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {title}
              </h3>
              <span className="text-xs text-gray-400 text-gray-400"></span>
              <p>{description}</p>
            </div>
            <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
          </div>
        </div>
      </div>
    );
};

export default Content;