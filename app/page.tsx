import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white pt-5 w-full min-h-screen relative">
<div className="relative w-full h-auto">
  <Image
    src="/image/Rectangle 2.png"
    alt="profile"
    layout="responsive"
    width={1640}
    height={900}
    className="object-cover"
  />
  <div className="absolute inset-0 flex flex-col justify-start md:justify-center items-start text-white px-4 sm:px-8 md:px-16 lg:px-32 py-6 sm:py-12">
    <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl mt-4 sm:mt-6">
      FIND CLOTHES THAT MATCH YOUR STYLE
    </h1>
    <p className="text-black mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of
      style.
    </p>
    <Button className="mt-4 sm:mt-6 bg-black hover:bg-gray-900 text-white font-bold rounded-xl w-32 sm:w-40 md:w-48 h-10 sm:h-12 md:h-14 text-sm sm:text-base md:text-lg">
      Shop Now
    </Button>
  </div>
</div>
      <div className="bg-black py-8 grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
        {["Group (1)", "zara-logo-1 1", "gucci-logo-1 1", "prada-logo-1 1", "Group"].map(
          (logo, index) => (
            <Image
              key={index}
              src={`/image/${logo}.png`}
              alt={logo}
              width={150}
              height={50}
              className="object-contain"
            />
          )
        )}
      </div>

      <section className="p-6">
        <h2 className="text-4xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "Frame 32", price: "$120", rating: "4.5/5" },
            { img: "Frame 33", price: "$240", discount: "-20%", oldPrice: "$260", rating: "4.5/5" },
            { img: "Frame 34", price: "$120", rating: "4.5/5" },
            { img: "Frame 38", price: "$130", discount: "-20%", oldPrice: "$160", rating: "4.5/5" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/image/${item.img}.png`}
                alt={item.img}
                width={295}
                height={150}
                className="rounded shadow-md"
              />
              <h3 className="text-sm font-semibold mt-3 text-center">
                T-SHIRT WITH TAPE DETAILS
              </h3>
              <div className="stars flex items-center text-yellow-400 text-lg gap-1">
                ★★★★☆ <span className="text-black">({item.rating})</span>
              </div>
              <div className="text-black font-bold mt-2">
                {item.price}
                {item.oldPrice && (
                  <>
                    <span className="line-through text-gray-500 pl-2">
                      {item.oldPrice}
                    </span>
                    <span className="text-xs text-red-500 bg-red-100 rounded-lg px-1 ml-2">
                      {item.discount}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant={"outline"} className="rounded-full px-6 py-2">
            View All
          </Button>
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-4xl font-bold text-center mb-8">TOP SELLING</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "Frame 32 (1)", price: "$212", discount: "-20%", oldPrice: "$232", rating: "4.5/5" },
            { img: "Frame 33 (1)", price: "$145", rating: "4.5/5" },
            { img: "Frame 34 (1)", price: "$80", rating: "4.5/5" },
            { img: "Frame 38 (1)", price: "$210", rating: "4.5/5" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/image/${item.img}.png`}
                alt={item.img}
                width={295}
                height={150}
                className="rounded shadow-md"
              />
              <h3 className="text-sm font-semibold mt-3 text-center">
                {item.img.includes("1") ? "VERTICAL STRIPED SHIRT" : "T-SHIRT WITH TAPE DETAILS"}
              </h3>
              <div className="stars flex items-center text-yellow-400 text-lg gap-1">
                ★★★★☆ <span className="text-black">({item.rating})</span>
              </div>
              <div className="text-black font-bold mt-2">
                {item.price}
                {item.oldPrice && (
                  <>
                    <span className="line-through text-gray-500 pl-2">
                      {item.oldPrice}
                    </span>
                    <span className="text-xs text-red-500 bg-red-100 rounded-lg px-1 ml-2">
                      {item.discount}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant={"outline"} className="rounded-full px-6 py-2">
            View All
          </Button>
        </div>
      </section>
        <div className="bg-gray-100 py-8 px-4 md:px-6 lg:px-8 rounded-[40px] mx-auto max-w-7xl">
  <h2 className="text-center text-5xl md:text-3xl font-bold mb-8">
    Browse by Dress Style
  </h2>
  <div className="flex flex-wrap gap-4 justify-center md:gap-6">
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 11.png"
        alt="Casual"
        width={407}
        height={289}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Casual</span>
      </div>
    </div>
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 13.png"
        alt="Formal"
        width={684}
        height={289}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Formal</span>
      </div>
    </div>
  </div>
  <div className="flex flex-wrap gap-4 justify-center md:gap-6 mt-6">
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 12.png"
        alt="Party"
        width={698}
        height={289}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Party</span>
      </div>
    </div>
    <div className="relative rounded-lg overflow-hidden shadow-lg w-full sm:w-[48%] md:w-[23%] lg:w-[23%]">
      <Image
        src="/image/image 14.png"
        alt="Gym"
        width={407}
        height={289}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-white bg-opacity-0 flex pt-4 pl-4 justify-start">
        <span className="text-black text-lg font-bold">Gym</span>
      </div>
    </div>
  </div>

</div>

      </div>
    
  );
}
