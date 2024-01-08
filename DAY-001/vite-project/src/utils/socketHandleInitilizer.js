import { io } from "socket.io-client";

let socket = null;

export const socketConnection=()=>{
    socket = io("http://localhost:5000/api/socket");
    socket.on("connect", () => {
        console.log("succesfully connected with scoket io server");
   })
}