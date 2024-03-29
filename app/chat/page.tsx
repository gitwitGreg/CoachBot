'use client'
import { useRef, useEffect } from "react"
import { useChat } from 'ai/react'
import Image from "next/image"
import ppic from '../../public/pj.jpg'
import p from '../../public/p.jpeg'

export default function Chat() {

    const chatContainer = useRef<HTMLDivElement>(null)

    const {messages, input, handleInputChange, handleSubmit} = useChat({
        api: '/api/openai',
    })

    const renderResponse = () => {
       return(
        <div className="gap-4 flex flex-col mt-10 overflow-y-scroll h-screen">
            {messages.map((message, index) => (
                <div key={message.id} className="flex items-center">
                    <Image
                    src={message.role === 'user' ? ppic : p}
                    width={40}
                    height={40}
                    className="rounded"
                    alt='avatar'
                    />
                    <div className="w-full ml-10 flex gap-3">
                        <p>{message.content}</p>
                        {index < messages.length -1 && <hr></hr>}
                    </div>
                </div>
            ))}
        </div>
       )
    }

    return(
        <div ref={chatContainer} className="px-10 gap-4 flex flex-col h-auto overflow-y-scroll items-center">
            {renderResponse()}
            <form onSubmit={handleSubmit} className="flex gap-4 w-full mb-4">
                <input 
                className="w-full rounded p-3 text-black"
                placeholder="Enter a message"
                type='text'
                onChange={handleInputChange}
                value={input}></input>
                <button type='submit' className="bg-orange-400 rounded p-3">Enter</button>
            </form>
        </div>
    )
}