'use client'
import { pusherClient } from '@/lib/pusher'
import { FC, useEffect, useState } from 'react'

interface MessagesProps {
  initialMessages: {
    text: string
    id: string
  }[]
  roomId: string
}

const Messages: FC<MessagesProps> = ({ initialMessages, roomId }) => {
  const [incomingMessages, setIncomingMessages] = useState<string[]>([])

  useEffect(() => {
    pusherClient.subscribe(roomId)

    pusherClient.bind('incoming-message', (text: string) => {
      setIncomingMessages((prev) => [...prev, text])
    })

    return () => {
      pusherClient.unsubscribe(roomId)
    }
  }, [])

  return (
    <div>
      {initialMessages.map((message) => (
        <p key={message.id}>{message.text}</p>
      ))}
      {incomingMessages.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  )
}

export default Messages
