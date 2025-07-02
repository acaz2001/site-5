import { client } from './client';

export async function getTestimonials() {
  const query = `*[_type == "testimonial"]{
    _id,
    title,
    avatarImage { asset-> { url } }
  }`;
  return await client.fetch(query);
}
