'use client'

import { useState } from "react"
import { Globe, MessageSquare, X } from "lucide-react"

export function ChatGlobe() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, message])
      setMessage("")
    }
  }

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 h-96 flex flex-col">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-semibold">Live Chat</span>
            </div>
            <button 
              className="text-white hover:text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 h-full flex flex-col justify-center">
                <p>No messages yet</p>
                <p className="text-sm mt-2">Start a conversation with us!</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className="mb-3 text-right">
                  <div className="bg-blue-100 text-gray-800 rounded-lg p-3 inline-block max-w-xs">
                    {msg}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Just now</div>
                </div>
              ))
            )}
          </div>
          
          <div className="border-t p-3 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border rounded-l-lg p-2 focus:outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
      
      <button 
        className={`mt-3 ${isOpen ? 'bg-gray-600' : 'bg-blue-600'} text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors flex items-center`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
      </button>
    </div>
  )
}
