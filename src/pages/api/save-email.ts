import type { VercelRequest, VercelResponse } from '@vercel/node'

import { createClient } from 'redis'

export const POST: APIRoute = async ({ request }) => {
  // response.setHeader('Content-Type', 'application/json')
  const data = await request.json()
  console.log('request.body', data)
  if (!data.email) {
    return new Response(
      JSON.stringify({
        message: 'Faltan campos requeridos'
      })
    )
  }
  const redis = createClient({ url: import.meta.env.VITE_REDIS_URL })
  await redis.connect()

  redis.on('error', (err) => console.log('Redis Client Error', err))
  const emails = await redis.sMembers('emails')
  if (emails.includes(data.email)) {
    return new Response(
      JSON.stringify({
        message: 'Ya estás suscrito'
      })
    )
  } else {
    await redis.sAdd('emails', data.email)
    return new Response(
      JSON.stringify({
        message: '¡Éxito!'
      })
    )
  }
}
