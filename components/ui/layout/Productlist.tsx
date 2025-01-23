// import Image from "next/image"
// import { client } from "@/sanity/lib/client"

// type Product = {
//   _id: string
//   name: string
//   price: number
//   imageUrl: string
// }

// export async function ProductList({ query }: { query: string }) {
//   // Simulate a delay to show loading state
//   await new Promise((resolve) => setTimeout(resolve, 1000))

//   // Fetch products from Sanity based on the search query
//   const products: Product[] = await client.fetch(`
//     *[_type == "product" && name match "*${query}*"] {
//       _id,
//       name,
//       price,
//       "imageUrl": image.asset->url
//     }
//   `)

//   if (products.length === 0) {
//     return <p className="text-center text-gray-500">No products found.</p>
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {products.map((product) => (
//         <div key={product._id} className="border rounded-lg p-4">
//           <div className="relative h-48 mb-4">
//             <Image
//               src={product.imageUrl || "/placeholder.svg"}
//               alt={product.name}
//               fill
//               className="object-cover rounded-md"
//             />
//           </div>
//           <h3 className="font-semibold">{product.name}</h3>
//           <p className="text-gray-600">${product.price.toFixed(2)}</p>
//         </div>
//       ))}
//     </div>
//   )
// }






"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export function ProductList({ query }: { query: string }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const fetchedProducts: Product[] = await client.fetch(`
        *[_type == "product" && name match "*${query}*"] {
          _id,
          name,
          price,
          "imageUrl": image.asset->url
        }
      `);
      setProducts(fetchedProducts);
      setLoading(false);
    }

    fetchProducts();
  }, [query]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-500">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg p-4">
          <div className="relative h-48 mb-4">
            <Image
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover rounded-md"
            />
          </div>
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
