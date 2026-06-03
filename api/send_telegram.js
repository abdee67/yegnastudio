/* global process */

const MAX_LENGTH = {
  name: 120,
  email: 180,
  phone: 80,
  service: 120,
  message: 1800,
  website: 120,
}

function readText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function formatTelegramMessage(payload) {
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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const body = req.body || {}

  if (readText(body.website, MAX_LENGTH.website)) {
    return res.status(200).json({ success: true })
  }

  const payload = {
    name: readText(body.fullName || body.name, MAX_LENGTH.name),
    email: readText(body.email, MAX_LENGTH.email),
    phone: readText(body.phone, MAX_LENGTH.phone),
    service: readText(body.service, MAX_LENGTH.service),
    message: readText(body.message, MAX_LENGTH.message),
  }

  if (!payload.name || !payload.message || (!payload.email && !payload.phone)) {
    return res.status(400).json({ error: 'Please provide your name, message, and either phone or email.' })
  }

  if (payload.email && !isValidEmail(payload.email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!botToken || !chatId) {
    return res.status(500).json({ error: 'Telegram credentials are not configured.' })
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

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Message sent.' })
    }

    const details = await response.text()
    console.error('Telegram API error:', response.status, details.slice(0, 500))
    return res.status(502).json({ error: 'Could not send the message right now.' })
  } catch (error) {
    console.error('Telegram send failed:', error)
    return res.status(500).json({ error: 'Could not send the message right now.' })
  }
}
