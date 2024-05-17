import type { VercelRequest, VercelResponse } from '@vercel/node'

import { createClient } from 'redis'

export const GET = async () => {
  const redis = createClient({ url: import.meta.env.VITE_REDIS_URL })
  await redis.connect()
  //get the count of all the keys of the 'emails' set
  const count = await redis.sCard('emails')
  console.log('count', count)
  return new Response(
    JSON.stringify({
      message: count
    })
  )
}
