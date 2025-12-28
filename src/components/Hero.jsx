import { useState } from 'react'
import './Hero.css'

function Hero() {
  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (inputValue.trim()) {
      // Handle send action
      console.log('Sending:', inputValue)
      setInputValue('')
    }
  }

  const handleSuggestion = (suggestion) => {
    setInputValue(suggestion)
  }

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-brand">
          <div className="hero-logo">
            <span style={{ fontSize: '4rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>Source Central</span>
          </div>
          <div className="hero-tagline">Source top products from global suppliers by chatting with AI</div>
        </div>
        <div className="hero-chat-input">
          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <textarea
                placeholder="Describe anything about product sourcing"
                rows="1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                className="chat-textarea"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                title="Send message"
                className="chat-send-button"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.57576 6.42427C3.34145 6.18995 3.34145 5.81006 3.57576 5.57574L7.57576 1.57574C7.81007 1.34143 8.18997 1.34143 8.42429 1.57574L12.4243 5.57574C12.6586 5.81006 12.6586 6.18995 12.4243 6.42427C12.19 6.65858 11.8101 6.65858 11.5758 6.42427L8.60002 3.44853V14C8.60002 14.3314 8.3314 14.6 8.00002 14.6C7.66865 14.6 7.40002 14.3314 7.40002 14L7.40002 3.44853L4.42429 6.42427C4.18997 6.65858 3.81007 6.65858 3.57576 6.42427Z" fill="white"></path>
                </svg>
              </button>
            </div>
            <div className="chat-suggestions">
              <button className="suggestion-chip" onClick={() => handleSuggestion('Find suppliers')}>
                <div className="suggestion-icon" style={{ color: '#1DC264' }}>
                  <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.7 4.43696V12C2.7 12.4419 3.05817 12.8 3.5 12.8H8.3L8.3 3.03696L2.7 4.43696ZM8.00896 1.87278L1.5 3.50002V12C1.5 13.1046 2.39543 14 3.5 14H9.5V3.03696C9.5 2.25627 8.76633 1.68344 8.00896 1.87278Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.49999 12.8H13.5C13.9418 12.8 14.3 12.4418 14.3 12V4.47577L9.49999 5.47577V12.8ZM13.5 14C14.6046 14 15.5 13.1046 15.5 12V4.47577C15.5 3.71459 14.8004 3.14575 14.0552 3.30099L8.29999 4.5V14H13.5Z" fill="currentColor"></path>
                    <rect x="4" y="10" width="3" height="1.2" rx="0.6" fill="currentColor"></rect>
                    <rect x="4" y="7" width="3" height="1.2" rx="0.6" fill="currentColor"></rect>
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.76466 0.0552051C4.50721 -0.0933049 5.2 0.474645 5.2 1.2319V3.50002H4L4 1.2319L2.7 1.4919V5.00002H1.5V1.4919C1.5 0.919885 1.90375 0.427387 2.46466 0.315205L3.76466 0.0552051Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span>Find suppliers</span>
              </button>
              <button className="suggestion-chip" onClick={() => handleSuggestion('Deep search suppliers')}>
                <div className="suggestion-icon" style={{ color: '#577EFF' }}>
                  <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.90002 8.00003C1.90002 7.66866 2.16865 7.40003 2.50002 7.40003L8.40003 7.40002C8.7314 7.40002 9.00003 7.66865 9.00003 8.00002C9.00003 8.33139 8.7314 8.60002 8.40003 8.60002L2.50002 8.60003C2.16865 8.60003 1.90002 8.3314 1.90002 8.00003Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.8905 1.29442C9.14209 1.51007 9.17123 1.88885 8.95558 2.14045C7.99061 3.26625 6.60002 5.21258 6.60002 7.99997C6.60002 9.08493 6.94202 10.2689 7.42264 11.3423C7.90226 12.4134 8.49782 13.3255 8.95558 13.8595C9.17123 14.1111 9.14209 14.4899 8.8905 14.7055C8.6389 14.9212 8.26012 14.892 8.04447 14.6404C7.50222 14.0078 6.84779 12.9948 6.32741 11.8327C5.80803 10.6727 5.40002 9.31502 5.40002 7.99997C5.40002 4.78737 7.00944 2.56704 8.04447 1.3595C8.26012 1.1079 8.6389 1.07877 8.8905 1.29442Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 8.25C13.6569 8.25 15 9.59315 15 11.25C15 11.8978 14.7924 12.496 14.4434 12.9863L15.8535 14.3965C16.0488 14.5917 16.0488 14.9083 15.8535 15.1035C15.6583 15.2988 15.3417 15.2988 15.1465 15.1035L13.7363 13.6934C13.246 14.0424 12.6478 14.25 12 14.25C10.3431 14.25 9 12.9069 9 11.25C9 9.59315 10.3431 8.25 12 8.25ZM12 9.4502C11.0059 9.4502 10.2002 10.2559 10.2002 11.25C10.2002 12.2441 11.0059 13.0498 12 13.0498C12.9941 13.0498 13.7998 12.2441 13.7998 11.25C13.7998 10.2559 12.9941 9.4502 12 9.4502Z" fill="currentColor"></path>
                    <path d="M8.5 14.4C8.5 14.0686 8.23059 13.8033 7.90095 13.7694C4.97916 13.4696 2.7 11.001 2.7 8C2.7 4.79675 5.29675 2.2 8.5 2.2C11.501 2.2 13.9696 4.47916 14.2694 7.40095C14.3033 7.73059 14.5686 8 14.9 8C15.2314 8 15.5027 7.73044 15.4747 7.40026C15.1704 3.81501 12.164 1 8.5 1C4.63401 1 1.5 4.13401 1.5 8C1.5 11.664 4.31501 14.6705 7.90026 14.9747C8.23044 15.0027 8.5 14.7314 8.5 14.4Z" fill="currentColor"></path>
                    <path d="M8.04448 2.14051C7.82883 1.88891 7.85796 1.51013 8.10956 1.29448C8.36116 1.07883 8.73994 1.10796 8.95559 1.35956C9.82332 2.37192 11.0948 4.09612 11.4831 6.52008C11.5354 6.84628 11.2927 7.1393 10.964 7.17173C10.6332 7.20435 10.3412 6.96089 10.2853 6.6332C9.93318 4.56589 8.84308 3.07221 8.04448 2.14051Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span>Deep search suppliers</span>
              </button>
              <button className="suggestion-chip" onClick={() => handleSuggestion('Research product')}>
                <div className="suggestion-icon" style={{ color: '#52A8FF' }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.3523 4.49745L8.85715 2.4795C8.32675 2.17327 7.67327 2.17327 7.14287 2.4795L3.64768 4.49745C3.11728 4.80367 2.79054 5.36961 2.79054 5.98206V10.018C2.79054 10.6304 3.11728 11.1963 3.64768 11.5026L7.14287 13.5205C7.67327 13.8268 8.32675 13.8268 8.85715 13.5205L12.3523 11.5026C12.8827 11.1963 13.2095 10.6304 13.2095 10.018V5.98206C13.2095 5.36961 12.8827 4.80367 12.3523 4.49745ZM9.50001 1.36604C8.57181 0.830137 7.42822 0.830137 6.50001 1.36604L3.00482 3.38398C2.07662 3.91988 1.50482 4.91026 1.50482 5.98206V10.018C1.50482 11.0898 2.07662 12.0801 3.00482 12.616L6.50001 14.634C7.42822 15.1699 8.57181 15.1699 9.50001 14.634L12.9952 12.616C13.9234 12.0801 14.4952 11.0898 14.4952 10.018V5.98206C14.4952 4.91026 13.9234 3.91988 12.9952 3.38398L9.50001 1.36604Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.97906 4.55944C2.14347 4.27173 2.50998 4.17177 2.79769 4.33618L6.78611 6.61527C7.90778 7.25623 8.60001 8.44906 8.60001 9.74095V14C8.60001 14.3313 8.33138 14.6 8.00001 14.6C7.66863 14.6 7.40001 14.3313 7.40001 14V9.74095C7.40001 8.87969 6.93852 8.08447 6.19074 7.65716L2.20232 5.37807C1.91461 5.21366 1.81465 4.84715 1.97906 4.55944Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.021 4.55944C14.1854 4.84715 14.0854 5.21366 13.7977 5.37807L9.80929 7.65716C9.06151 8.08447 8.60002 8.87969 8.60002 9.74095V14C8.60002 14.3313 8.3314 14.6 8.00002 14.6C7.66865 14.6 7.40002 14.3313 7.40002 14V9.74095C7.40002 8.44906 8.09225 7.25623 9.21392 6.61527L13.2023 4.33618C13.4901 4.17177 13.8566 4.27173 14.021 4.55944Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.97906 4.55944C2.14347 4.27173 2.50998 4.17177 2.79769 4.33618L6.80927 6.62851C7.54711 7.05013 8.4529 7.05013 9.19074 6.62851L13.2023 4.33618C13.49 4.17177 13.8565 4.27173 14.021 4.55944C14.1854 4.84715 14.0854 5.21366 13.7977 5.37807L9.78611 7.6704C8.67935 8.30283 7.32066 8.30283 6.21391 7.6704L2.20232 5.37807C1.91461 5.21366 1.81465 4.84715 1.97906 4.55944Z" fill="currentColor"></path>
                    <path d="M3.40002 7.84562C3.40002 7.46532 3.80776 7.22424 4.14098 7.40751L4.88194 7.81504C5.20149 7.99079 5.40002 8.32657 5.40002 8.69126V9.25435C5.40002 9.63465 4.99229 9.87573 4.65907 9.69246L3.91811 9.28493C3.59856 9.10918 3.40002 8.77341 3.40002 8.40872V7.84562Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span>Research product</span>
              </button>
              <button className="suggestion-chip" onClick={() => handleSuggestion('Help center')}>
                <div className="suggestion-icon" style={{ color: '#FF60DC' }}>
                  <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2.2H5C4.28203 2.2 3.7 2.78203 3.7 3.5V12.5C3.7 13.218 4.28203 13.8 5 13.8H12.5C12.9418 13.8 13.3 13.4418 13.3 13V3C13.3 2.55817 12.9418 2.2 12.5 2.2ZM5 1C3.61929 1 2.5 2.11929 2.5 3.5V12.5C2.5 13.8807 3.61929 15 5 15H12.5C13.6046 15 14.5 14.1046 14.5 13V3C14.5 1.89543 13.6046 1 12.5 1H5Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 13.8H12.5C12.9418 13.8 13.3 13.4418 13.3 13V11.0336C13.055 11.1406 12.7844 11.2 12.5 11.2H5C4.28203 11.2 3.7 11.782 3.7 12.5C3.7 13.218 4.28203 13.8 5 13.8ZM13.3 9.2C13.3 8.53726 13.8373 8 14.5 8V13C14.5 14.1046 13.6046 15 12.5 15H5C3.61929 15 2.5 13.8807 2.5 12.5C2.5 11.1193 3.61929 10 5 10H12.5C12.9418 10 13.3 9.64183 13.3 9.2Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M5.40002 4.50002C5.40002 4.16865 5.66865 3.90002 6.00002 3.90002H11C11.3314 3.90002 11.6 4.16865 11.6 4.50002C11.6 4.8314 11.3314 5.10002 11 5.10002H6.00002C5.66865 5.10002 5.40002 4.8314 5.40002 4.50002Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span>Help center</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img 
        src="https://cdn.prod.website-files.com/668b5b657900bc7490aa07fe/668ba543ae98dc7b65f60e40_hero_bg.avif" 
        alt="Hero background" 
        className="hero-background-image"
      />
    </div>
  )
}

export default Hero


