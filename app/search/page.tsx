// import { Suspense } from "react"
// import { Search } from "../../components/ui/layout/Search"
// import { ProductList } from "../../components/ui/layout/Productlist"
// import { Skeleton } from "../../components/ui/layout/Skeleton "

// export default function SearchPage({
//   searchParams,
// }: {
//   searchParams: { q: string }
// }) {
//   const query = searchParams.q

//   return (
//     <main className="flex min-h-screen flex-col items-center p-24">
//       <h1 className="text-4xl font-bold mb-8">Search Results</h1>
//       <Search />
//       <div className="mt-8 w-full max-w-4xl">
//         <h2 className="text-2xl font-semibold mb-4">Results for "{query}"</h2>
//         <Suspense fallback={<ProductListSkeleton />}>
//           <ProductList query={query} />
//         </Suspense>
//       </div>
//     </main>
//   )
// }

// function ProductListSkeleton() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {[...Array(6)].map((_, i) => (
//         <div key={i} className="border rounded-lg p-4">
//           <Skeleton className="h-48 w-full mb-4" />
//           <Skeleton className="h-4 w-3/4 mb-2" />
//           <Skeleton className="h-4 w-1/2" />
//         </div>
//       ))}
//     </div>
//   )
// }





import { Suspense } from "react";
import { Search } from "../../components/ui/layout/Search";
import { fetchProducts, ProductList } from "../../components/ui/layout/Productlist";
import { Skeleton } from "../../components/ui/layout/Skeleton ";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const query = searchParams.q;
  const products = await fetchProducts(query); // Fetch products server-side

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Search Results</h1>
      {/* <Search /> */}
      <div className="mt-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Results for "{query}"</h2>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList products={products} />
        </Suspense>
      </div>
    </main>
  );
}

function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="border rounded-lg p-4">
          <Skeleton className="h-48 w-full mb-4" />
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
