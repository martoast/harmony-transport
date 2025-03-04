import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const webhookUrl = 'https://services.leadconnectorhq.com/hooks/nyhG009oHEsLI7BASiqK/webhook-trigger/90d2d8f4-e239-4ff9-9a5e-0e70ca74af3a'
  const headers = { 'Content-Type': 'application/json' }

  try {
    const body = await readBody(event)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })

    const data = await response.json()
    return data
  } catch (error) {
    event.node.res.statusCode = 500
    return {
      error: 'Error forwarding request',
      details: error.message
    }
  }
})