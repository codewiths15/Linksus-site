import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3005');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');

    useEffect(() => {
        socket.on('chatMessage', (msg) => {
            setChat((prevChat) => [...prevChat, msg]);
        });

        socket.on('message', (msg) => {
            setChat((prevChat) => [...prevChat, msg]);
        });

        return () => {
            socket.off('chatMessage');
            socket.off('message');
        };
    }, []);

    const joinRoom = () => {
        if (username && room) {
            socket.emit('joinRoom', { username, room });
            fetchChatHistory(room);
        }
    };

    const fetchChatHistory = async (room) => {
        try {
            const response = await fetch(`http://localhost:3005/chat/history/${room}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log("Chat history fetched:", data); // Debugging line
            setChat(data);
        } catch (error) {
            console.error("Error fetching chat history:", error);
        }
    };

    const sendMessage = () => {
        const msg = {
            sender: username,
            message: message,
            timestamp: new Date().toISOString()
        };

        socket.emit('chatMessage', { room, msg });
        setMessage('');
    };

    return (
        <div>
            <h2>Chat</h2>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter room ID"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
            <div>
                {chat.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}</strong>: {msg.message} <em>({new Date(msg.timestamp).toLocaleString()})</em>
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
