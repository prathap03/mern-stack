import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css'
import { io } from 'socket.io-client';

const socket = io("https://mern-stack-backend-2zxg.onrender.com/api/socket",{query:{token:localStorage.getItem("token")}});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
)
