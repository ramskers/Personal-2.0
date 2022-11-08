import React, { useEffect, useState } from "react";
import { client } from "../../lib/client.js";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogData, setBlog] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            }
        }`
      )
      .then((data) => setBlog(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center mt-12">Blog</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my blog post page
        </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData &&
          blogData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span
                className="block bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-800"
                key={index}
              >
                <img
                  className="w-full h-full rounded-r object-cover absolute"
                  src={post.mainImage.asset.url}
                  alt="main hero display for blog post"
                />
                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                  <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                    {post.title}
                  </h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
