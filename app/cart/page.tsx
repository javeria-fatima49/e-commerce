"use client";

// import React, { useState } from "react";
// import Image from "next/image";

// type CartItem = {
//   id: number;
//   name: string;
//   size: string;
//   color: string;
//   price: number;
//   quantity: number;
//   image: string;
// };

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([
//     { id: 1, name: "Gradient Graphic T-shirt", image: "/image/Frame 4.png", size: "Large", color: "White", price: 145, quantity: 1 },
//     { id: 2, name: "Checkered Shirt", image: "/image/Frame 34.png", size: "Medium", color: "Red", price: 180, quantity: 1 },
//     { id: 3, name: "Skinny Fit Jeans", image: "/image/Frame 33.png", size: "Large", color: "Blue", price: 240, quantity: 1 },
//   ]);

//   const discountPercentage: number = 20;
//   const deliveryFee: number = 15;

//   const updateQuantity = (id: number, action: "increase" | "decrease") => {
//     const updatedItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: action === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
//         };
//       }
//       return item;
//     });
//     setCartItems(updatedItems);
//   };

//   const deleteItem = (id: number) => {
//     const updatedItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedItems);
//   };

//   const subtotal: number = cartItems.reduce(
//     (acc: number, item: CartItem) => acc + item.price * item.quantity,
//     0
//   );
//   const discount: number = (subtotal * discountPercentage) / 100;
//   const total: number = subtotal - discount + deliveryFee;

//   return (
//     <div className="p-4 lg:p-8 animate-slideBottom">
//       <div className="flex flex-col lg:flex-row justify-between gap-8">
//         <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div key={item.id} className="flex flex-col lg:flex-row items-center justify-between border-b pb-4 relative">
//                 <button
//                   className="absolute top-2 right-2 text-red-500 text-lg -mt-6"
//                   onClick={() => deleteItem(item.id)}
//                 >
//                   <Image
//                     src="/image/delete.png"
//                     alt="delete"
//                     width={20}
//                     height={15}
//                   />
//                 </button>
//                 <div className="flex items-center gap-4 w-full">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-16 h-16 rounded-md object-cover"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       Size: {item.size}, Color: {item.color}
//                     </p>
//                     <p className="text-lg font-bold">${item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center gap-2 mt-2 lg:mt-8">
//                   <button
//                     className="px-2 py-1 text-lg bg-gray-200 rounded"
//                     onClick={() => updateQuantity(item.id, "decrease")}
//                   >
//                     -
//                   </button>
//                   <span className="font-semibold">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 text-lg bg-gray-200 rounded"
//                     onClick={() => updateQuantity(item.id, "increase")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>${subtotal}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Discount ({discountPercentage}%)</span>
//               <span className="text-red-500">-${discount}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span>${deliveryFee}</span>
//             </div>
//             <div className="flex justify-between font-bold">
//               <span>Total</span>
//               <span>${total}</span>
//             </div>
//           </div>
//           <div className="mt-4">
//             <input
//               type="text"
//               placeholder="Add promo code"
//               className="w-full px-4 py-2 border rounded-md mb-4"
//             />
//             <button className="w-full bg-black text-white py-2 rounded-md">
//               Go to Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


































// "use client"
// import { client } from "@/sanity/lib/client"
// import { useCart } from "../../app/context/CartContext"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { useRouter } from 'next/navigation'
// import { useEffect, useState } from "react"
// import CheckoutPage from "@/components/ui/layout/Checkout";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";


//    interface Order {
//      _id: string;
//      user: string;
//      email: string;
//      products: string[];
//      total: number;
//      status: string;
//    }

// const Cart = () => {
//   const { state: cartItems, dispatch } = useCart()
//   const [order, setProducts] = useState<Order[]>([])
//   const [error, setError] = useState(false)
//   const [user, setUser] = useState("");
//    const [email, setEmail] = useState("");

//   useEffect(() => {
//     const fetchOrder = async () => {
//       const query = `*[_type == "order"]{
//         _id,
//         user,
//         email,
//         products,
//         total,
//         status,
//       }`
  
//       try {
//         const fetchedProducts = await client.fetch(query)
//         setProducts(fetchedProducts)
//       } catch (err) {
//         console.error("Failed to fetch products:", err)
//         setError(true)
//       }
//     }

//     fetchOrder()
//   }, [])

//   const updateQuantity = (id: string, action: "increase" | "decrease") => {
//     dispatch({
//       type: action === "increase" ? "INCREMENT_ITEM" : "DECREMENT_ITEM",
//       payload: { id },
//     })
//   }

//   const deleteItem = (id: string) => {
//     dispatch({
//       type: "REMOVE_ITEM",
//       payload: { id },
//     })
//   }

//   const subtotal: number = cartItems.items.reduce(
//     (acc: number, item) => acc + item.price * item.quantity, 
//     0
//   )



//   const router = useRouter()
//   const [loading, setLoading] = useState(false)
//   // const [error, setError] = useState('')
//   const [formData, setFormData] = useState({
//     customerName: '',
//     email: '',
//     total: ''
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault()
//     setLoading(true)
//     setError('')

//     try {
//       console.log('Submitting order:', formData)
      
//       const response = await fetch('http://localhost:3000/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           customerName: formData.customerName,
//           email: formData.email,
//           total: Number(formData.total)
//         }),
//       })

//       if (!response.ok) {
//         const errorData = await response.json()
//         throw new Error(errorData.error || 'Failed to create order')
//       }

//       const data = await response.json()
//       console.log('Order created:', data)

//       // Reset form
//       setFormData({
//         customerName: '',
//         email: '',
//         total: ''
//       })

//       // Show success message
//       alert('Order placed successfully!')

//       // Refresh the page
//       router.refresh()

//     } catch (error) {
//       console.error('Order submission error:', error)
//       setError(error instanceof Error ? error.message : 'Failed to place order')
//     } finally {
//       setLoading(false)
//     }
//   }


//   return (
//     <div className="p-4 lg:p-8 animate-slideBottom">
//       <div className="flex flex-col lg:flex-row justify-between gap-8">
//         <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//           <div className="space-y-6">
//             {cartItems.items.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex flex-col lg:flex-row items-center justify-between border-b pb-4 relative"
//               >
//                 <button
//                   className="absolute top-2 right-2 text-red-500 text-lg -mt-6"
//                   onClick={() => deleteItem(item.id)}
//                 >
//                   <Image src="/image/delete.png" alt="delete" width={20} height={15} />
//                 </button>
//                 <div className="flex items-center gap-4 w-full">
//                   <img
//                     src={item.image || "/placeholder.svg"}
//                     alt={item.name}
//                     className="w-16 h-16 rounded-md object-cover"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p className="text-sm text-gray-500">
//                       Size: {item.size}, Color: {item.color}
//                     </p>
//                     <p className="text-lg font-bold">${item.price}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-center gap-2 mt-2 lg:mt-8">
//                   <button
//                     className="px-2 py-1 text-lg bg-gray-200 rounded"
//                     onClick={() => updateQuantity(item.id, "decrease")}
//                   >
//                     -
//                   </button>
//                   <span className="font-semibold">{item.quantity}</span>
//                   <button
//                     className="px-2 py-1 text-lg bg-gray-200 rounded"
//                     onClick={() => updateQuantity(item.id, "increase")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <Card className="max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Place New Order</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {error && (
//             <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
//               {error}
//             </div>
//           )}
          
//           <div>
//             <label htmlFor="customerName" className="block text-sm font-medium mb-1">
//               Your Name
//             </label>
//             <Input
//               id="customerName"
//               name="customerName"
//               value={formData.customerName}
//               onChange={handleChange}
//               required
//               placeholder="Enter your name"
//             />
//           </div>
          
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium mb-1">
//               Email
//             </label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Enter your email"
//             />
//           </div>
          
//           {/* <div>
//             <label htmlFor="total" className="block text-sm font-medium mb-1">
//               Order Amount ($)
//             </label>
//             <Input
//               id="total"
//               name="total"
//               type="number"
//               value={formData.total}
//               onChange={handleChange}
//               required
//               min="1"
//               step="0.01"
//               placeholder="Enter order amount"
//             />
//           </div> */}
//           <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span>$15.00</span>
//             </div>
//             <div className="flex justify-between font-bold">
//               <span>Total</span>
//               <span>${(subtotal + 15).toFixed(2)}</span>
//             </div>
//           <button 
//             type="submit" 
//             className="w-full" 
//             disabled={loading}
//           >
//             {loading ? 'Placing Order...' : 'Place Order'}
//           </button>
//         </form>
//       </CardContent>
//     </Card>
//         <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
//           <h2 className="text-xl font-bold mb-4">Order Summary</h2>
//           <div className="space-y-4">
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex flex-col space-y-4">
//                <p>Name</p>
//                <input
//                  type="text"
//                  placeholder="Enter your name"
//                  value={user}
//                  onChange={(e) => setUser(e.target.value)}
//                  className="w-full px-4 py-2 border rounded-md mb-4"
//                />
//                <p>Email</p>
//                <input
//                  type="email"
//                  placeholder="Enter your email"
//                  value={email}
//                  onChange={(e) => setEmail(e.target.value)}
//                  className="w-full px-4 py-2 border rounded-md mb-4"
//                />
//              </div>
//             {/* <div className="flex justify-between">
//               <span>Delivery Fee</span>
//               <span>$15.00</span>
//             </div>
//             <div className="flex justify-between font-bold">
//               <span>Total</span>
//               <span>${(subtotal + 15).toFixed(2)}</span>
//             </div> */}
//           </div>
//           <div className="mt-4">
//             <input type="text" placeholder="Add promo code" className="w-full px-4 py-2 border rounded-md mb-4" />
//             {/* <Link href="/checkout"> */}
//               <Button className="w-full bg-black text-white py-2 rounded-md" >Go to Checkout</Button>
//             {/* </Link> */}
//             <CheckoutPage/>
//           </div>
//         </div>
//       </div>
//       </div>
//   )
// }

// export default Cart



















"use client"
import { client } from "@/sanity/lib/client"
import { useCart } from "../../app/context/CartContext"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link";

interface Order {
  _id: string
  user: string
  email: string
  products: string[]
  total: number
  status: string
}

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size: string
  color: string
}

const Cart = () => {
  const { state: cartItems, dispatch } = useCart()
  const [orders, setOrders] = useState<Order[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
  })

  const router = useRouter()

  useEffect(() => {
    const fetchOrders = async () => {
      const query = `*[_type == "order"]{
        _id,
        user,
        email,
        products,
        total,
        status,
      }`

      try {
        const fetchedOrders = await client.fetch(query)
        setOrders(fetchedOrders)
      } catch (err) {
        console.error("Failed to fetch orders:", err)
        setError("Failed to fetch orders. Please try again.")
      }
    }

    fetchOrders()
  }, [])

  const updateQuantity = (id: string, action: "increase" | "decrease") => {
    dispatch({
      type: action === "increase" ? "INCREMENT_ITEM" : "DECREMENT_ITEM",
      payload: { id },
    })
  }

  const deleteItem = (id: string) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id },
    })
  }

  const subtotal: number = cartItems.items.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerName: formData.customerName,
          email: formData.email,
          total: subtotal + 15,
          products: cartItems.items.map((item) => item.id),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to create order")
      }
      
      const data = await response.json()
      console.log('Order created:', data)

      // Reset form
      setFormData({
        customerName: '',
        email: '',
      })

      // Show success message
      alert('Order placed successfully!')

      // Refresh the page
      router.refresh()

    } catch (error) {
      console.error("Order submission error:", error)
      setError(error instanceof Error ? error.message : "Failed to place order")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 lg:p-8 animate-slideBottom">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          <div className="space-y-6">
            {cartItems.items.map((item: CartItem) => (
              <div
                key={item.id}
                className="flex flex-col lg:flex-row items-center justify-between border-b pb-4 relative"
              >
                <button
                  className="absolute top-2 right-2 text-red-500 text-lg -mt-6"
                  onClick={() => deleteItem(item.id)}
                >
                  <Image src="/image/delete.png" alt="delete" width={20} height={15} />
                </button>
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.size}, Color: {item.color}
                    </p>
                    <p className="text-lg font-bold">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2 lg:mt-8">
                  <button
                    className="px-2 py-1 text-lg bg-gray-200 rounded"
                    onClick={() => updateQuantity(item.id, "decrease")}
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    className="px-2 py-1 text-lg bg-gray-200 rounded"
                    onClick={() => updateQuantity(item.id, "increase")}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card className="max-w-md mx-auto w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-4">
          <CardHeader>
            <CardTitle>Place New Order</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}

              <div>
                <label htmlFor="customerName" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(subtotal + 15).toFixed(2)}</span>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Placing Order..." : "Place Order"}
              </Button>
            
            </form>
          </CardContent>
          <div className="mt-4">
              <Link href="/checkout">
             <Button className="w-full bg-black text-white py-2 rounded-md" >Go to Checkout</Button>
           </Link>
          </div>
        </Card>
        </div>
      </div>
  )
}

export default Cart
