import sanityClient from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3zmvbige",
  dataset: "production",
  apiVersion: "2022-06-10",
  useCdn: true,
  token: process.env.PUBLIC_SANITY_TOKEN,
});

const builder = imageURLBuilder(client);

export const urlFor = (source) => builder.image(source);
