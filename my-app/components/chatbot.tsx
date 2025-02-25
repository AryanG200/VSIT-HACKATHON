"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
}

const suggestions = ["Track my order", "View menu", "Payment methods", "Contact support"]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! How can I help you today?",
      sender: "bot",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom, messages])

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { id: Date.now(), text: text, sender: "user" }])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: `Thanks for your message! I'll help you with "${text}"`,
          sender: "bot",
        },
      ])
    }, 1000)
  }

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative">
          <MessageCircle className="h-12 w-12 text-primary" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full" />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-[350px] bg-white rounded-lg shadow-lg z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-semibold">Chat Support</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Quick Suggestions */}
            <div className="p-4 border-t border-b">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <Button key={suggestion} variant="outline" size="sm" onClick={() => handleSendMessage(suggestion)}>
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage(inputValue)
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

