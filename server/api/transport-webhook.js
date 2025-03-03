import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const webhookUrl = 'https://services.leadconnectorhq.com/hooks/nyhG009oHEsLI7BASiqK/webhook-trigger/ab4223d7-f307-41af-9137-2cf00f14afa0'
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