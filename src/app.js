import "core-js/stable";
import "regenerator-runtime/runtime";
import { io } from "socket.io-client";

const socket = io("wss://ws.postman-echo.com/raw", {
  path: "/api/socket"
});

socket.on("connect", function () {
  console.log("Bağlandı:", socket.id);
});

socket.on("message", function (msg) {
  document.getElementById("messages").innerHTML += "<p>" + msg + "</p>";
});
