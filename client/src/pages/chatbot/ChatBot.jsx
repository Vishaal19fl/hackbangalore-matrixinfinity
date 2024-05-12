
import React, { useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import './ChatBot.scss';

const MODEL_NAME = 'gemini-pro';
const API_KEY = 'AIzaSyDsZXccEjiiBb0Op7AXJOYO0iJAYeAYh_I'; 

function GeminiChat() {
  const [chatHistory, setChatHistory] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    setIsLoading(true);
    setIsBotTyping(true);

    const chat = model.startChat({
      generationConfig: {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
      history: [
        {
          role: "user",
          parts: [{ text: ""}],
        },
        {
          role: "model",
          parts: [{ text: ""}],
        },
      ],
    });

    const result = await chat.sendMessage(userInput);
    const response = result.response;

    setChatHistory([...chatHistory, { role: 'user', message: userInput }, { role: 'model', message: response.text() }]);
    setUserInput('');
    setIsLoading(false);
    setIsBotTyping(false);
  };

  return (
    <div className="gemini-chat-page">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.role === 'model' && (
              <>
                {isBotTyping && (
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
                <img src="https://images-platform.99static.com//vTlhgWBq9V4kbmSmKzNNCan2JO8=/81x88:583x590/fit-in/500x500/99designs-contests-attachments/143/143602/attachment_143602893" alt="Bot" className="avatar" /> 
              </>
            )}
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}

export default GeminiChat;
