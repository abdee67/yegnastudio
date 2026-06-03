import { NextResponse } from 'next/server'

type TelegramPayload = {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const MAX_LENGTH = {
  name: 120,
  email: 180,
  phone: 80,
  service: 120,
  message: 1800,
  website: 120,
}

function readText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(text: string) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function formatTelegramMessage(payload: TelegramPayload) {
  return [
    '<b>📬 New Contact Form Submission</b>',
    '',
    `<b>👤 Name:</b> ${escapeHtml(payload.name)}`,
    payload.email ? `<b>📧 Email:</b> ${escapeHtml(payload.email)}` : '',
    payload.phone ? `<b>📞 Phone:</b> ${escapeHtml(payload.phone)}` : '',
    payload.service ? `<b>💼 Service:</b> ${escapeHtml(payload.service)}` : '',
    '',
    `<b>💬 Message:</b>\n${escapeHtml(payload.message)}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export async function POST(request: Request) {
  let body: Record<string, unknown>

  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const website = readText(body.website, MAX_LENGTH.website)

  if (website) {
    return NextResponse.json({ success: true })
  }

  const payload: TelegramPayload = {
    name: readText(body.fullName || body.name, MAX_LENGTH.name),
    email: readText(body.email, MAX_LENGTH.email),
    phone: readText(body.phone, MAX_LENGTH.phone),
    service: readText(body.service, MAX_LENGTH.service),
    message: readText(body.message, MAX_LENGTH.message),
  }

  if (!payload.name || !payload.message || (!payload.email && !payload.phone)) {
    return NextResponse.json(
      { error: 'Please provide your name, message, and either phone or email.' },
      { status: 400 },
    )
  }

  if (payload.email && !isValidEmail(payload.email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return NextResponse.json({ error: 'Telegram credentials are not configured.' }, { status: 500 })
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatTelegramMessage(payload),
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    })

    if (!response.ok) {
      const details = await response.text()
      console.error('Telegram API error:', response.status, details.slice(0, 500))
      return NextResponse.json({ error: 'Could not send the message right now.' }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: 'Message sent.' })
  } catch (error) {
    console.error('Telegram send failed:', error)
    return NextResponse.json({ error: 'Could not send the message right now.' }, { status: 500 })
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed.' }, { status: 405, headers: { Allow: 'POST' } })
}
