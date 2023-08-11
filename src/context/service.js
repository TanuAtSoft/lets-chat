import React from "react";
import socketio from "socket.io-client";
// import { SOCKET_URL } from "config";

export const socket = socketio.connect("ws://localhost:8800");
export const SocketContext = React.createContext();