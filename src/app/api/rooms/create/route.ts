import { db } from '@/lib/db'

export async function GET() {
  const createdRoom = await db.chatRoom.create({
    data: {},
  })

  return new Response(createdRoom.id)
}
