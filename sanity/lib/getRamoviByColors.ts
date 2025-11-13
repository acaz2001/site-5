import { client } from './client';

export async function getRamoviByColors() {
  const query = `*[_type == "Product"]{
    _id,
    variants[] {
        dimenzije[] {
            bojaRama
      }
}
  }`;
  return await client.fetch(query);
}
