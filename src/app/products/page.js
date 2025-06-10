import Image from 'next/image';

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error('Product not found');
  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full h-96 object-cover mb-4"
      />
      <p className="mb-2 text-gray-700">{product.description}</p>
      <p className="font-semibold text-lg">Price: ${product.price}</p>
      <p className="text-yellow-500">⭐ Rating: {product.rating}</p>
    </div>
  );
}
