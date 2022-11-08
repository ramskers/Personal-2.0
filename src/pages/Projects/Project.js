import React, { useEffect, useState } from "react";
import { client } from "../../lib/client.js";
import { Link } from "react-router-dom";

export default function Project() {
  const [projectData, setProject] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "project"]{
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
      .then((data) => setProject(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-green-100 min-h-screen p-12">
      <div className="container mx-auto">
        <h2 className="text-5xl flex justify-center mt-12">Projects</h2>
        <h3 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my Project post page
        </h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData &&
          projectData.map((project, index) => (
            <Link to={"/" + project.slug.current} key={project.slug.current}>
              <span
                className="block bg-white block h-64 relative rounded shadow leading-snug border-l-8 border-green-800"
                key={index}
              >
                <img
                  className="w-full h-full rounded-r object-cover absolute"
                  src={project.mainImage.asset.url}
                  alt="main hero display for blog post"
                />
                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                  <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                    {project.title}
                  </h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
