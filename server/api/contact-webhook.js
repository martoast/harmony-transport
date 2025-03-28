import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const webhookUrl = 'https://services.leadconnectorhq.com/hooks/nyhG009oHEsLI7BASiqK/webhook-trigger/4a63773a-a228-4607-a06a-d65f5339cdbf'
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