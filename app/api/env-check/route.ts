import { NextResponse } from "next/server"

// TEMPORARY diagnostic — remove after fixing. Exposes NO secret values,
// only whether each var is present + which environment is running.
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function GET() {
  return NextResponse.json({
    vercelEnv: process.env.VERCEL_ENV || null, // "production" | "preview" | "development" | null
    nodeEnv: process.env.NODE_ENV || null,
    smtp: {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT || null,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
      CONTACT_TO: !!process.env.CONTACT_TO,
    },
    // names only (no values) of any env vars that look SMTP/CONTACT related — catches typos
    matchingKeys: Object.keys(process.env).filter((k) => /smtp|contact/i.test(k)),
  })
}
