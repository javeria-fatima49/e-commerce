import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Add your database connection check here
    // For example, if using Prisma:
    // await prisma.$queryRaw`SELECT 1`

    return NextResponse.json({
      status: "ok",
      env: {
        hasDbUrl: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 })
  }
}

