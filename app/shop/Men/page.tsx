import Image from "next/image";
import { Button } from "@/components/ui/button";

const Men = () => {
    return (
      <div className="py-8 px-4 ">
        
        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-2 gap-2 space-x-5 animate-slideLeft">
      
          <div className="flex fle/x-col items-center space-x-5">
    
            <div className=" gap-6 mb-4 ">
              
              <img
                src="/image/image 1.png"
                alt="Product Thumbnail"
                width={152}
                height={100}
                className=" w-48 h-30 object-cover rounded-lg border cursor-pointer hover:border-black mb-5"
              />
              <img
                src="/image/image 5.png"
                alt="Product Thumbnail"
                width={152}
                height={100}
                className="w-48 h-30 object-cover rounded-lg border cursor-pointer hover:border-black mb-5"
              />
              <img
                src="/image/image 6.png"
                alt="Product Thumbnail"
                width={152}
                height={167}
                className="w-56 h-30 object-cover rounded-lg border cursor-pointer hover:border-black "
              />
            </div>
  

            <img
              src="/image/image 1 (1).png"
              alt="Product Main"
              className="w-[419px] max-w-md object-cover rounded-lg transition-all duration-200 ease-in-out hover:shadow-lg mb-4 md:mb-5"
            />
          </div>
  

          <div className="flex flex-col">

             <h1 className="text-2xl md:text-3xl font-bold mb-2">
              ONE LIFE GRAPHIC T-SHIRT
            </h1> 
  

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="ml-2 text-sm text-gray-600">4.5/5</span>
            </div>
  

            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-green-600 mr-2">$260</span>
              <span className="line-through text-gray-500 mr-2">$300</span>
              <span className="text-red-500 text-sm">-40%</span>
            </div>
  

            <p className="text-gray-700 mb-6">
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </p>

            <div className="mb-4">
              <p className="font-semibold mb-2">Choose Color:</p>
              <div className="flex gap-4">
                <span className="w-6 h-6 bg-green-700 rounded-full border cursor-pointer hover:scale-110 transition-transform"></span>
                <span className="w-6 h-6 bg-gray-700 rounded-full border cursor-pointer hover:scale-110 transition-transform"></span>
                <span className="w-6 h-6 bg-blue-700 rounded-full border cursor-pointer hover:scale-110 transition-transform"></span>
              </div>
            </div>
  

            <div className="mb-4">
              <p className="font-semibold mb-2">Choose Size:</p>
              <div className="flex gap-4">
                <button className="border rounded-lg px-4 py-1 hover:bg-gray-200">
                  Small
                </button>
                <button className="border rounded-lg px-4 py-1 hover:bg-gray-200">
                  Medium
                </button>
                <button className="border rounded-lg px-4 py-1 bg-black text-white">
                  Large
                </button>
                <button className="border rounded-lg px-4 py-1 hover:bg-gray-200">
                  X-Large
                </button>
              </div>
            </div> 
  
         
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
                  -
                </button>
                <span className="px-4">1</span>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
                  +
                </button>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                Add to Cart
              </button>
            </div>

            <section className="p-6 mt-56 mr-96 ml-7">
              <div className="flex justify-center space-x-72 gap-8">
        <h2 className="text-sm font-bold  text-center pt-3 ">Product</h2>
        <h3 className="text-sm font-semibold  pt-3">rating-Reweis</h3>
       
        <h3 className="text-sm font-semibold  pt-3"> Faqs</h3>
  

          </div>
       
      </section>
      </div>
    
  </div>
  <div className="border-b-2 bg-black mx-20 ">
  </div>
<div className="flex justify-between pt-6">
  <h4 className="text-black font-bold text-lg ml-20 ">All Reveiws <span className="text-xs text-gray-600">(451)</span></h4>
  <div className="flex mr-20">
    <div>
      <Image
      src="/image/Frame 19.png"
      alt="Product Thumbnail"
      width={48}
      height={48}
      />
    </div>
  <div className="flex justify-end pt-2 bg-gray-200  px-6 py-2 ml-2 mr-2 rounded-[62px]">
  <select className="bg-gray-200"><option><Button className="px-6 py-2 rounded-[62px] hover:bg-gray-800">Latest</Button></option></select>  </div>
  <div className="mt-1"><Button className="bg-black text-white px-6 py-2 rounded-[62px] hover:bg-gray-800 w-36 ">Write a Reveiws</Button>
  </div>
  </div>
  </div>
  <div className="animate-slideRight">
   

<div className="flex flex-wrap gap-6 justify-center pt-5 ">
  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lgborder border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
      I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
    
  </div>
  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
        I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div>
  </div>

  <div className="w-full sm:w-[385px] md:w-[450px] lg:w-[610px] h-auto rounded-[20px] px-8 transition-all duration-200 ease-in-out hover:shadow-lg border border-gray-200">
    <p className="stars flex items-center text-yellow-400 text-2xl gap-1">★★★★☆</p>
    <div>
      <h1 className="font-bold text-lg">Samantha D.</h1>
      <p className="text-gray-700">
      I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.
      </p>
      <p className="text-sm text-gray-500">Posted on August 14, 2023</p>
    </div></div>
</div>
</div>
<div className="flex justify-center pt-6 ">
<Button className="bg-white text-black px-6 py-2 font-medium text-base rounded-[62px] hover:bg-gray-100 w-[230px] h-[52px] ">Load More Reviews</Button>
</div>
<section className="p-6 animate-slideBottom">
        <h2 className="text-5xl font-bold mb-7r text-center pt-3 mb-8">You might also like</h2>
        <div className="w-[1640px] md:[1700px] h-[152px] md:pb-[100px] flex flex-col gap-6 justify-center md:flex-row">
         <div >
            <Image
              src="/image/Frame 2.png"
              alt="Travel"
              width={295}
              height={150}
              className="transition-all duration-200 ease-in-out hover:shadow-lg"
            />
        <h3 className="text-sm font-semibold w-[225px] pt-3">Polo with Contrast Trims</h3>

        <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-[150px] h-[19px]">
          ★★★★☆ <span className="text-black"> (4.0/5)</span>
        </div>
        <span className="text-black font-bold">$212</span>
          <span className="line-through text-gray-500">$242</span>
          <span className="text-xs text-red-500 bg-red-100 rounded-lg">-20%
</span> 
      </div>
    {/* </div> */}

          <div className="relative">
            <Image
              src="/image/Frame 3.png"
              alt="Health"
              width={295}
              height={150}
              className="transition-all duration-200 ease-in-out hover:shadow-lg"
            />
             <h3 className="text-sm font-semibold w-[225px] pt-3">Gradient Graphic T-shirt</h3>

          
        <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-[150px] h-[19px]">
          ★★★★ <span className="text-black"> (3.5/5)</span>
        </div>
        <span className="text-black font-bold">$145</span>
       
           </div>
          <div className="relative">
            <Image
              src="/image/Frame 1.png"
              alt="Sport"
              width={295}
              height={150}
              className="transition-all duration-200 ease-in-out hover:shadow-lg"
            />
             <h3 className="text-sm font-semibold w-[225px] pt-3">Polo with Tipping Details</h3>
        
        
        <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-[150px] h-[19px]">
          ★★★★☆ <span className="text-black"> (4.5/5)</span>
        </div>
        <span className="text-black font-bold">$180</span>
       
</div>
          <div>
            <Image
              src="/image/Frame 38.png"
              alt="Health and Fitness"
              width={295}
              height={150}
              className="transition-all duration-200 ease-in-out hover:shadow-lg"
            />
             <h3 className="text-sm font-semibold w-[225px] pt-3">Black Striped T-shirt</h3>
   
  
        <div className="stars flex items-center text-yellow-400 text-2xl gap-1 w-[150px] h-[19px]">
          ★★★★☆ <span className="text-black"> (5.0/5)</span>
        </div>
        <span className="text-black font-bold">$120</span>
          <span className="line-through text-gray-500 pl-3 pr-1">$150</span>
          <span className="text-xs text-red-500 bg-red-100 rounded-lg">-30%</span>
</div>
</div>
      </section>
<div className="flex justify-center mt-56  animate-pulse">
<Button variant={"outline"} className="rounded-[64px] w-[218px] h-[52px]">View All</Button>
</div>
  </div>
    );
  };
  export  default Men;