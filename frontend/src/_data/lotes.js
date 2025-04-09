import { SanityClient } from "sanity";

const MODEL__PAGE = `
    _id,
    nombre,
    ciudad,
    edad
`;


export const getDataLotes = async () => {
  const query = `*[_type == "lotes"]{
    ${MODEL__PAGE}
  }`;
  const data = await SanityClient.fetch(query);
  return data;
}