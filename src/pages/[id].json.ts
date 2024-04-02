import type { APIRoute } from 'astro';

const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();

export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;
  return new Response(
    JSON.stringify({
      name: data[id]
    })
  )
}
