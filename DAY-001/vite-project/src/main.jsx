import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css'
import { io } from 'socket.io-client';
import { jwtDecode } from 'jwt-decode';

const socket = io(`${import.meta.env.PROD ? import.meta.env.VITE_SERVER_URL : import.meta.env.VITE_LOCAL_URL}/api/socket`,{query:{user: localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")).name: "anonymous"}});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
)
