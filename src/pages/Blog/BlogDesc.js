import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../lib/client";
import imageURLBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageURLBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

function BlogDesc() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  //Fetching data from sanity client
  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug] {
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto bg-green-100 rounded-lg mt-12">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="text-3xl lg:text-6xl mb-4">{postData.title}</h2>
              <div className="flex justify-center text-gray-800">
                <img
                  className="w-10 h-10 rounded-full"
                  src={urlFor(postData.authorImage)
                    .width(100)
                    .url()}
                  alt="author is Ramtin"
                />
                <h4 className="flex items-center pl-2 text-2xl">
                  {postData.name}
                </h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rouned-t"
            style={{ height: "400px" }}
            src={urlFor(postData.mainImage)
              .width(200)
              .url()}
            alt="main for post"
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={client.clientConfig.projectId}
            dataset={client.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogDesc;
