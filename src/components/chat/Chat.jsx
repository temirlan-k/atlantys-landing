'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! I am here to help you discover Reply', sender: 'bot' },
  ]);
  const [showChat, setShowChat] = useState(false);
  const [inputText, setInputText] = useState('');
  const [socket, setSocket] = useState(null);
  const [userMessageQueue, setUserMessageQueue] = useState([]); // Очередь сообщений от пользователя
  const [showLoader, setShowLoader] = useState(false); // Флаг для отображения загрузки
  const endOfMessagesRef = useRef(null);
  const sendMessageTimeoutRef = useRef(null); // Таймер для отправки
  const timerActive = useRef(false); // Флаг для предотвращения перезапуска таймера
  const isRequestSentRef = useRef(false); // Флаг для предотвращения двойной отправки
  const loaderTimeoutRef = useRef(null); // 

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const socket = new WebSocket('wss://atlantys.kz/api/ws/chat');
    setSocket(socket);

    socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data,'utf-8');

        if (parsedData.sender && parsedData.message) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: parsedData.message, sender: parsedData.sender },
          ]);
          setShowLoader(false);
        } else {
          console.warn('Unexpected response format from server:', parsedData);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = (event) => {
      if (event.wasClean) {
        console.log(`WebSocket closed cleanly, code=${event.code}, reason=${event.reason}`);
      } else {
        console.error('WebSocket connection closed unexpectedly.');
      }
    };

    return () => {
      socket.close();
    };
  }, []);


  // Мемоизированная функция с useCallback
  const sendQueuedMessages = useCallback(() => {
    if (isRequestSentRef.current) {
      console.log('Запрос уже отправлен. Пропускаем отправку.');
      return; // Если запрос уже был отправлен, выходим из функции
    }

    setUserMessageQueue((prevQueue) => {
      if (!prevQueue.length) {
        console.log('Очередь сообщений пуста. Ничего не отправляем.');
        return prevQueue; // Возвращаем текущее состояние без изменений
      }

      const allMessages = prevQueue.map((item) => item.text).join(' ');
      console.log('Отправляем все сообщения:', allMessages);

      if (socket && !isRequestSentRef.current) {
        socket.send(JSON.stringify({ message: allMessages }), 'utf-8');
        isRequestSentRef.current = true; // Устанавливаем флаг, что запрос отправлен
      }

      // Возвращаем пустую очередь после отправки
      return [];
    });

    timerActive.current = false; // Сбрасываем флаг таймера после отправки

    // Сброс флага для разрешения следующего запроса
    setTimeout(() => {
      isRequestSentRef.current = false; // Сбрасываем флаг после отправки
      console.log('Флаг отправки сброшен, можно отправлять следующий запрос.');
    }, 1000); // Сбросим через 1 секунду после отправки
  }, [socket]);

  const startMessageTimer = () => {
    if (timerActive.current) return; // Если таймер уже запущен, не перезапускаем

    timerActive.current = true; // Устанавливаем флаг, что таймер активен
    console.log('Таймер запущен. Отправка через 10 секунд...');

    sendMessageTimeoutRef.current = setTimeout(() => {
      sendQueuedMessages(); // Отправляем сообщения через 10 секунд
    }, 5000); // Запускаем таймер на 5 секунд
  };

  const startLoaderTimer = () => {
    clearTimeout(loaderTimeoutRef.current); // Очищаем предыдущий таймер загрузки
    setShowLoader(false); // Сбрасываем отображение загрузчика, если он был показан
    loaderTimeoutRef.current = setTimeout(() => {
      setShowLoader(true); // Показать загрузку через 2 секунды
    }, 2000);
  };

  const sendMessage = () => {
    if (!inputText.trim()) return; // Проверяем, что введено сообщение

    const textMessage = { text: inputText, sender: 'user' };

    // Добавляем сообщение в очередь
    setUserMessageQueue((prevQueue) => [...prevQueue, textMessage]);
    console.log('Добавлено сообщение в очередь:', textMessage);

    // Добавляем сообщение в список сообщений для отображения
    setMessages((prevMessages) => [...prevMessages, textMessage]);

    // Очищаем поле ввода
    setInputText('');

    // Сбрасываем таймер загрузки и показываем новый таймер для нового сообщения
    clearTimeout(loaderTimeoutRef.current);
    startLoaderTimer(); // Запускаем таймер для загрузки при каждом новом сообщении

    // Запускаем таймер, если он ещё не запущен
    startMessageTimer();
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const handleSendClick = () => {
    sendMessage(); // Немедленно вызываем sendMessage при клике на кнопку "Send"
    clearTimeout(sendMessageTimeoutRef.current); // Очищаем таймер, если пользователь нажал "Send"
    clearTimeout(loaderTimeoutRef.current); // Очищаем таймер загрузки при отправке
    setShowLoader(false); // Скрыть загрузчик
    sendQueuedMessages(); // Отправляем все сообщения
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <div>
      {showChat ? (
        <div className="p-4 fixed right-4 bottom-24 max-w-md w-full mx-auto bg-white rounded-lg shadow-lg">
          <div className="flex justify-between mb-4">
            <h2 className="font-bold">Chat</h2>
            <button onClick={handleCloseChat} className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-times"></i>
            </button>
          </div>
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
            {showLoader && (
              <div className="flex items-center justify-start">
                <div className="p-2 bg-blue-500 text-white rounded-md">Typing...</div>
              </div>
            )}
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
            <button onClick={handleSendClick} className="p-2 bg-blue-500 text-white rounded-full">
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
