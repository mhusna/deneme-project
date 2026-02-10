import { io } from "socket.io-client";

const socket = io("https://deneme-project.vercel.app/api/socket", {
  path: "/api/socket"
});

socket.on("price", (data) => {
  console.log("Gelen veri:", data);
});
