// import { NextResponse } from "next/server"

// export async function GET() {
//   try {
//     return NextResponse.json({
//       status: "ok",
//       env: {
//         hasDbUrl: !!process.env.DATABASE_URL,
//         nodeEnv: process.env.NODE_ENV,
//       },
//     })
//   } catch (err) {
//     // Using err parameter to fix unused variable warning
//     return NextResponse.json({ error: err instanceof Error ? err.message : "Unknown error" }, { status: 500 })
//   }
  
// }




import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      status: "ok",
      env: {
        hasDbUrl: !!process.env.DATABASE_URL, // Check if DATABASE_URL is present
        nodeEnv: process.env.NODE_ENV,       // Current Node environment
      },
    });
  } catch (err) {
    // Fix for unused variable warning
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 }
    );
  }
}
