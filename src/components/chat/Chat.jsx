'use client';
import React, { useState, useRef, useEffect } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! I am here to help you discover Reply', sender: 'bot' },
  ]);
  const [showChat, setShowChat] = useState(false);
  const [inputText, setInputText] = useState('');
  const [socket, setSocket] = useState(null);
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket('wss://podcast-ai.onrender.com/ws/chat');
    setSocket(socket);

    // WebSocket connection established
    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    // Listen for messages from the server
    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data); // First parse the event.data
        if (parsedData && parsedData.data) {
          // Update the message list directly with the bot response
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: parsedData.data, sender: 'bot' },
          ]);
        } else {
          console.warn('No "data" field found in the response:', parsedData);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    // Handle WebSocket errors
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Handle WebSocket connection closure
    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`WebSocket closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error('WebSocket connection closed unexpectedly.');
      }
    };

    // Cleanup WebSocket connection when component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (!inputText.trim()) return;
    const newMessage = { text: inputText, sender: 'user' };
    setMessages([...messages, newMessage]); // Add user's message to the chat

    if (socket) {
      socket.send(JSON.stringify({ message: inputText }));
    }
    setInputText(''); 
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
            <div ref={endOfMessagesRef} />
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
