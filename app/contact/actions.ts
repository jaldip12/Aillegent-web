"use server"

import nodemailer from "nodemailer"
import { z } from "zod"
import { site } from "@/lib/site"

export type ContactState = {
  ok: boolean
  message: string
  errors?: Record<string, string>
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email."),
  company: z.string().trim().optional().default(""),
  role: z.string().trim().optional().default(""),
  link: z.string().trim().url("Enter a valid URL (including https://).").or(z.literal("")).optional().default(""),
  achieve: z.string().trim().optional().default(""),
  stage: z.string().trim().optional().default(""),
})

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    role: formData.get("role"),
    link: formData.get("link"),
    achieve: formData.get("achieve"),
    stage: formData.get("stage"),
  })

  if (!parsed.success) {
    const errors: Record<string, string> = {}
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0])
      if (!errors[key]) errors[key] = issue.message
    }
    return { ok: false, message: "Please fix the highlighted fields.", errors }
  }

  const d = parsed.data
  const subject = `New enquiry — ${d.name}${d.company ? ` (${d.company})` : ""}`
  const text = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    d.company ? `Company: ${d.company}` : null,
    d.role ? `Role: ${d.role}` : null,
    d.link ? `Link: ${d.link}` : null,
    d.stage ? `Stage: ${d.stage}` : null,
    d.achieve ? "" : null,
    d.achieve ? "What they want to achieve:" : null,
    d.achieve ? d.achieve : null,
  ]
    .filter((l) => l !== null)
    .join("\n")

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env

  // No silent "demo mode" anymore: if the server has no SMTP config, say so plainly.
  // (On a deployment this means the env vars weren't added, or the site wasn't
  //  redeployed after adding them, or they were scoped to the wrong environment.)
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error("[contact] SMTP env missing on this deployment", {
      host: !!SMTP_HOST,
      user: !!SMTP_USER,
      pass: !!SMTP_PASS,
    })
    return {
      ok: false,
      message:
        "Email isn't configured on the server yet (SMTP variables missing on this deployment). Please email us directly at " +
        site.email +
        ".",
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
      // fail fast instead of hanging the serverless function
      connectionTimeout: 10000,
      greetingTimeout: 8000,
      socketTimeout: 12000,
    })

    await transporter.sendMail({
      from: `"${site.name} Website" <${SMTP_USER}>`,
      to: CONTACT_TO || site.email,
      replyTo: `"${d.name}" <${d.email}>`,
      subject,
      text,
    })

    return {
      ok: true,
      message: "Thank you. We have received your message and will review the context before getting back to you.",
    }
  } catch (err) {
    const e = err as { message?: string; code?: string; responseCode?: number }
    console.error("[contact] send failed:", e?.code, e?.responseCode, e?.message)
    // TEMPORARY debug detail in the UI so we can see the real reason on the live site.
    return {
      ok: false,
      message:
        `Couldn't send your message [${e?.code || "ERR"}${e?.responseCode ? " " + e.responseCode : ""}]: ${
          e?.message || "unknown error"
        }. Please email us directly at ` +
        site.email +
        ".",
    }
  }
}
