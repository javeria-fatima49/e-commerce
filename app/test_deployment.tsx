"use client"

import { useEffect, useState } from "react"

export default function TestDeployment() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    async function checkDeployment() {
      try {
        // Replace with your actual API endpoint
        const res = await fetch("/api/products")
        if (!res.ok) throw new Error("API response was not ok")
        const data = await res.json()
        setData(data)
        setStatus("success")
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred")
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
          <p className="mt-2 text-sm">
            Please check:
            <ul className="list-disc pl-5 mt-1">
              <li>Environment variables are set in Vercel</li>
              <li>Database connection is working</li>
              <li>API routes are properly configured</li>
            </ul>
          </p>
        </div>
      )}

      {status === "success" && (
        <div className="p-4 border rounded">
          <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

