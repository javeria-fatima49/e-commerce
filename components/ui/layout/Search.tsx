// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { SearchIcon } from "lucide-react"

// // Mock data for suggestions
// const mockSuggestions = [
//   "Casual Green Bomber Jacket",
//   "Jeans",
//   "Sneakers",
//   "Hoodie",
//   "Jacket",
//   "Dress",
//   "Skirt",
//   "Shorts",
//   "Sweater",
//   "Pants",
// ]

// export function Search() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [suggestions, setSuggestions] = useState<string[]>([])
//   const [isOpen, setIsOpen] = useState(false)
//   const searchRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   useEffect(() => {
//     if (searchTerm.length > 0) {
//       const filteredSuggestions = mockSuggestions.filter((suggestion) =>
//         suggestion.toLowerCase().includes(searchTerm.toLowerCase()),
//       )
//       setSuggestions(filteredSuggestions)
//       setIsOpen(true)
//     } else {
//       setSuggestions([])
//       setIsOpen(false)
//     }
//   }, [searchTerm])

//   const handleSearch = (term: string) => {
//     console.log(`Searching for: ${term}`)
//     // Implement your search logic here
//     setIsOpen(false)
//   }

//   return (
//     <div className="relative w-full max-w-md mx-auto" ref={searchRef}>
//       <div className="flex">
//         <Input
//           type="text"
//           placeholder="Search for products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full rounded-r-none"
//           aria-label="Search for products"
//         />
//         <Button onClick={() => handleSearch(searchTerm)} className="rounded-l-none" aria-label="Submit search">
//           <SearchIcon className="h-4 w-4" />
//         </Button>
//       </div>
//       {isOpen && suggestions.length > 0 && (
//         <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-b-md shadow-lg mt-1">
//           {suggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => {
//                 setSearchTerm(suggestion)
//                 handleSearch(suggestion)
//               }}
//             >
//               {suggestion}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }







"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"

export function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (term: string) => {
    if (term.trim()) {
      router.push(`/search?q=${encodeURIComponent(term.trim())}`)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm)
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto" ref={searchRef}>
      <div className="flex">
        <Input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-r-none"
          aria-label="Search for products"
        />
        <Button onClick={() => handleSearch(searchTerm)} className="rounded-l-none" aria-label="Submit search">
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

