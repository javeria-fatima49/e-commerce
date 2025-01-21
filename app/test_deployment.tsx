// "use client"

// import { useEffect, useState } from "react"

// interface ApiResponse {
//   status: string
//   env?: {
//     hasDbUrl: boolean
//     nodeEnv: string
//   }
//   error?: string
// }

// export default function TestDeployment() {
//   const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
//   const [data, setData] = useState<ApiResponse | null>(null)
//   const [error, setError] = useState<string>("")

//   useEffect(() => {
//     async function checkDeployment() {
//       try {
//         const res = await fetch("/api/test")
//         if (!res.ok) throw new Error("API response was not ok")
//         const data = await res.json()
//         setData(data)
//         setStatus("success")
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "Unknown error occurred")
//         setStatus("error")
//       }
//     }

//     checkDeployment()
//   }, [])

//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <h2 className="text-lg font-bold">Deployment Status Check</h2>
//         <p className="text-sm text-muted-foreground">Current status: {status}</p>
//       </div>

//       {status === "loading" && <p>Loading...</p>}

//       {status === "error" && (
//         <div className="p-4 border border-red-200 rounded bg-red-50">
//           <p className="text-red-700">Error: {error}</p>
//         </div>
//       )}

//       {status === "success" && data && (
//         <div className="p-4 border rounded">
//           <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   )
// }





"use client"

import { useEffect, useState } from "react"

interface ApiResponse {
  status: string
  env?: {
    hasDbUrl: boolean
    nodeEnv: string
  }
  error?: string
}

export default function TestDeployment() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [data, setData] = useState<ApiResponse | null>(null)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    async function checkDeployment() {
      try {
        const res = await fetch("/api/test")
        if (!res.ok) throw new Error("API response was not ok")
        const data = await res.json()
        setData(data)
        setStatus("success")
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("Unknown error occurred")
        }
        setStatus("error")
      }
    }

    checkDeployment()
  }, [])

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-lg font-bold">Deployment Status Check</h2>
        <p className="text-sm text-muted-foreground">Current status: {status}</p>
      </div>

      {status === "loading" && <p>Loading...</p>}

      {status === "error" && (
        <div className="p-4 border border-red-200 rounded bg-red-50">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}

      {status === "success" && data && (
        <div className="p-4 border rounded">
          <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
