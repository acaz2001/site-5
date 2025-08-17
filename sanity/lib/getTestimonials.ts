import { client } from './client';

export async function getTestimonials() {
  const query = `*[_type == "testimonial"]{
    _id,
    title,
    avatarName,
    avatarImage { asset-> { url } }
  }`;
  return await client.fetch(query);
}
