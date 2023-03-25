'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

const Page: FC = () => {
  let roomIdInput = ''
  const router = useRouter()

  const createRoom = async () => {
    const res = await fetch('/api/rooms/create')
    const roomId: string = await res.text()
    router.push(`/room/${roomId}`)
  }

  const joinRoom = async (roomId: string) => {
    router.push(`/room/${roomId}`)
  }

  return (
    <div>
      <button onClick={createRoom}>Create room</button>
      <div className='flex gap-2'>
        <input
          type='text'
          onChange={({ target }) => (roomIdInput = target.value)}
          className='border border-zinc-300'
        />

        <button onClick={() => joinRoom(roomIdInput)}>Join room</button>
      </div>
    </div>
  )
}

export default Page
