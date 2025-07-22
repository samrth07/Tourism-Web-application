"use client"

import { useState, useRef, useEffect } from "react"
import { Search, Plus, Send, Paperclip, Smile, MoreVertical, Phone, Video, MessageSquare } from "lucide-react"

const MessengerUI = () => {
  // Sample data for conversations
  const [conversations, setConversations] = useState([
    {
      id: 1,
      partner: {
        name: "Alex Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Online",
      },
      messages: [
        {
          id: 1,
          sender: "Alex Johnson",
          text: "Hey Sarah! Ready for our trip to Iceland?",
          time: "10:00 AM",
          self: false,
        },
        {
          id: 2,
          sender: "Me",
          text: "Hey Alex! Almost! Just finalizing my packing list. So excited!",
          time: "10:01 AM",
          self: true,
        },
        {
          id: 3,
          sender: "Alex Johnson",
          text: "Awesome! Did you check out the Northern Lights tour details I sent?",
          time: "10:05 AM",
          self: false,
        },
        {
          id: 4,
          sender: "Me",
          text: "Yes, looks incredible! I'm also thinking about adding a glacier hike.",
          time: "10:06 AM",
          self: true,
        },
        {
          id: 5,
          sender: "Alex Johnson",
          text: "That sounds amazing! We should definitely do it. I'll look into booking options.",
          time: "10:07 AM",
          self: false,
        },
      ],
    },
    {
      id: 2,
      partner: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Offline",
      },
      messages: [
        { id: 1, sender: "Jane Smith", text: "Hi! How was your last trip?", time: "Yesterday", self: false },
        { id: 2, sender: "Me", text: "It was fantastic! I'll tell you all about it.", time: "Yesterday", self: true },
      ],
    },
    {
      id: 3,
      partner: {
        name: "Travel Group: Europe",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Online",
      },
      messages: [
        { id: 1, sender: "Group", text: "Meeting at 3 PM today for planning.", time: "11:30 AM", self: false },
        { id: 2, sender: "Me", text: "Got it!", time: "11:31 AM", self: true },
      ],
    },
  ])

  const [activeConversationId, setActiveConversationId] = useState(conversations[0]?.id || null)
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)

  const activeConversation = conversations.find((conv) => conv.id === activeConversationId)
  const chatPartner = activeConversation?.partner

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [activeConversation?.messages]) // Scroll when active conversation messages change

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim() && activeConversation) {
      const updatedConversations = conversations.map((conv) =>
        conv.id === activeConversationId
          ? {
              ...conv,
              messages: [
                ...conv.messages,
                {
                  id: conv.messages.length + 1,
                  sender: "Me",
                  text: newMessage.trim(),
                  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                  self: true,
                },
              ],
            }
          : conv,
      )
      setConversations(updatedConversations)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-[90vh] fixed w-full bg-gray-900 text-white p-6 mb-4 flex items-center justify-center ">
      <div className="w-full max-w-5xl h-[80vh] bg-gray-800 rounded-xl shadow-lg flex border border-gray-700 overflow-hidden">
        {/* Left Sidebar: Friends/Chats List */}
        <div className="w-80 flex-shrink-0 border-r border-gray-700 bg-gray-700 flex flex-col">
          {/* Search and New Chat */}
          <div className="p-4 border-b border-gray-600 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search chats..."
                className="w-full p-2 pl-8 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" />
            </div>
            <button className="p-2 bg-green-600 hover:bg-green-500 rounded-full text-white transition-colors">
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto custom-scrollbar">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setActiveConversationId(conv.id)}
                className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-600 transition-colors ${
                  activeConversationId === conv.id ? "bg-gray-600 border-l-4 border-blue-500" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={conv.partner.avatar || "/placeholder.svg"}
                    alt={conv.partner.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-700 ${
                      conv.partner.status === "Online" ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white truncate">{conv.partner.name}</h4>
                  <p className="text-sm text-gray-400 truncate">
                    {conv.messages[conv.messages.length - 1]?.text || "No messages yet."}
                  </p>
                </div>
                <span className="text-xs text-gray-500">{conv.messages[conv.messages.length - 1]?.time || ""}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Active Chat Interface */}
        <div className="flex-1 flex flex-col">
          {activeConversation ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-700">
                <div className="flex items-center gap-3">
                  <img
                    src={chatPartner.avatar || "/placeholder.svg"}
                    alt={chatPartner.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{chatPartner.name}</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-1">
                      <span
                        className={`w-2 h-2 rounded-full ${chatPartner.status === "Online" ? "bg-green-500" : "bg-gray-500"}`}
                      ></span>
                      {chatPartner.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full hover:bg-gray-600 transition-colors text-blue-400">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-600 transition-colors text-green-400">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-600 transition-colors text-gray-400">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Message Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
                {activeConversation.messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.self ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[70%] p-3 rounded-lg shadow-md ${
                        msg.self
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-700 text-gray-100 rounded-bl-none"
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <span className={`block text-xs mt-1 ${msg.self ? "text-blue-200" : "text-gray-400"} text-right`}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} /> {/* Scroll anchor */}
              </div>

              {/* Message Input */}
              <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-gray-700 bg-gray-700 flex items-center gap-3"
              >
                <button type="button" className="p-2 rounded-full hover:bg-gray-600 transition-colors text-gray-400">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button type="button" className="p-2 rounded-full hover:bg-gray-600 transition-colors text-gray-400">
                  <Smile className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-3 rounded-lg bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-transparent focus:border-blue-500 transition-all"
                />
                <button
                  type="submit"
                  className="p-3 rounded-full bg-green-600 hover:bg-green-500 text-white transition-colors"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <MessageSquare className="w-16 h-16 mb-4" />
              <p className="text-lg">Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #374151; /* gray-700 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563; /* gray-600 */
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280; /* gray-500 */
        }
      `}</style>
    </div>
  )
}

export default MessengerUI
