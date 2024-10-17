'use client';
import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! I am here to help you discover Reply', sender: 'bot' },
  ]);
  const [showChat, setShowChat] = useState(false);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMessage = { text: inputText, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInputText('');
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { text: 'Thanks for your message!', sender: 'bot' }]);
    }, 1000);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      {showChat ? (
        <div className="p-4 fixed right-4 bottom-24 max-w-md w-full mx-auto bg-white rounded-lg shadow-lg">
          <div className="h-80 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-center my-2 ${
                  msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`p-2 rounded-md ${
                    msg.sender === 'bot' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                  }`}
                >
                  <div className={`${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded"
              placeholder="Type here"
              value={inputText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded-full">
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowChat(true)}
          className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 shadow-lg"
        >
          +
        </button>
      )}
    </div>
  );
};

export default ChatInterface;
