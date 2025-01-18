import Image from "next/image";
import { client } from "@/sanity/lib/client";

type Product = {
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
};

export default async function Home() {
  const query = `*[_type == "product"]{
    name,
    description,
    price,
    discountPercentage,
    priceWithoutDiscount,
    rating,
    tags,
    sizes,
    "imageUrl": image.asset->url
  }`;

  const products: Product[] = await client.fetch(query);
  console.log("Products Data:", products);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {product.imageUrl && (
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-cover w-full h-64"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2">{product.description.substring(0, 100)}...</p>
              
              <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-bold text-blue-600">
                  ${product.price}
                </p>
                {product.discountPercentage > 0 && (
                  <p className="text-sm line-through text-gray-500">
                    ${product.priceWithoutDiscount}
                  </p>
                )}
              </div>
              
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">{'⭐'.repeat(Math.round(product.rating))}</span>
                <p className="text-sm text-gray-500 ml-2">{product.rating} / 5</p>
              </div>

              <div className="tags flex flex-wrap gap-2 mt-4">
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
