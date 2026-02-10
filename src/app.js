import { io } from "socket.io-client";

const socket = io(
  "https://deneme-project-git-main-husnas-projects.vercel.app/api/socket",
  { path: "/api/socket" }
);

socket.on("connect", () => {
  console.log("Bağlandı:", socket.id);
});

socket.on("price", (data) => {
  console.log("Gelen veri:", data);
});
