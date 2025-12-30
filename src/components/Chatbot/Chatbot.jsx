import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { GoogleGenerativeAI } from '@google/generative-ai'
import './Chatbot.css'

function Chatbot() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Initialize Gemini API - Get API key from environment variable
  // You need to set VITE_GEMINI_API_KEY in your .env file
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null
  const model = genAI ? genAI.getGenerativeModel({ model: 'gemini-pro' }) : null

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Get initial query from location state
  useEffect(() => {
    if (location.state?.query && messages.length === 0) {
      const initialQuery = location.state.query
      // Add user message
      const newUserMessage = { role: 'user', content: initialQuery }
      setMessages([newUserMessage])
      setIsLoading(true)

      const sendInitialMessage = async () => {
        try {
          if (!model) {
            throw new Error('Gemini API key not configured')
          }

          const prompt = `You are a helpful AI assistant for Source Central, a platform for product sourcing and supplier discovery. 
          Help users with questions about product sourcing, finding suppliers, manufacturing, and global supply chain.
          
          User question: ${initialQuery}
          
          Provide a helpful, concise response focused on product sourcing and supplier discovery.`

          const result = await model.generateContent(prompt)
          const response = await result.response
          const text = response.text()

          setMessages(prev => [...prev, { role: 'assistant', content: text }])
        } catch (error) {
          console.error('Error calling Gemini API:', error)
          setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: 'Sorry, I encountered an error. Please make sure your Gemini API key is configured correctly in the .env file as VITE_GEMINI_API_KEY.' 
          }])
        } finally {
          setIsLoading(false)
        }
      }

      sendInitialMessage()
    }
  }, [location.state, model])

  const handleSend = async (query = null) => {
    const userMessage = query || inputValue.trim()
    if (!userMessage) return

    // Add user message
    const newUserMessage = { role: 'user', content: userMessage }
    setMessages(prev => [...prev, newUserMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      if (!model) {
        throw new Error('Gemini API key not configured')
      }

      // Call Gemini API
      const prompt = `You are a helpful AI assistant for Source Central, a platform for product sourcing and supplier discovery. 
      Help users with questions about product sourcing, finding suppliers, manufacturing, and global supply chain.
      
      User question: ${userMessage}
      
      Provide a helpful, concise response focused on product sourcing and supplier discovery.`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      // Add AI response
      setMessages(prev => [...prev, { role: 'assistant', content: text }])
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please make sure your Gemini API key is configured correctly in the .env file as VITE_GEMINI_API_KEY.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.3536 3.64645C10.5488 3.84171 10.5488 4.15829 10.3536 4.35355L6.70711 8L10.3536 11.6464C10.5488 11.8417 10.5488 12.1583 10.3536 12.3536C10.1583 12.5488 9.84171 12.5488 9.64645 12.3536L5.64645 8.35355C5.45118 8.15829 5.45118 7.84171 5.64645 7.64645L9.64645 3.64645C9.84171 3.45118 10.1583 3.45118 10.3536 3.64645Z" fill="currentColor"/>
          </svg>
          Back
        </button>
        <h1 className="chatbot-title">Source Central AI Assistant</h1>
        <div style={{ width: '60px' }}></div>
      </div>

      <div className="chatbot-messages">
        {messages.length === 0 && (
          <div className="chatbot-welcome">
            <div className="welcome-icon">🤖</div>
            <h2>Welcome to Source Central AI</h2>
            <p>Ask me anything about product sourcing, finding suppliers, or global supply chains.</p>
            <div className="suggested-questions">
              <button 
                className="suggestion-btn"
                onClick={() => handleSend('Find suppliers for electronics')}
              >
                Find suppliers for electronics
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSend('How to source products from China?')}
              >
                How to source products from China?
              </button>
              <button 
                className="suggestion-btn"
                onClick={() => handleSend('What is the minimum order quantity?')}
              >
                What is the minimum order quantity?
              </button>
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
          >
            <div className="message-content">
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="message assistant-message">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input-container">
        <div className="chatbot-input-wrapper">
          <textarea
            placeholder="Ask about product sourcing, suppliers, or manufacturing..."
            rows="1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="chatbot-textarea"
            disabled={isLoading}
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isLoading}
            className="chatbot-send-button"
            title="Send message"
          >
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.57576 6.42427C3.34145 6.18995 3.34145 5.81006 3.57576 5.57574L7.57576 1.57574C7.81007 1.34143 8.18997 1.34143 8.42429 1.57574L12.4243 5.57574C12.6586 5.81006 12.6586 6.18995 12.4243 6.42427C12.19 6.65858 11.8101 6.65858 11.5758 6.42427L8.60002 3.44853V14C8.60002 14.3314 8.3314 14.6 8.00002 14.6C7.66865 14.6 7.40002 14.3314 7.40002 14L7.40002 3.44853L4.42429 6.42427C4.18997 6.65858 3.81007 6.65858 3.57576 6.42427Z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot

