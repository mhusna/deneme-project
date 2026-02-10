import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socket",
      cors: {
        origin: "*",
      },
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Bir kullanıcı bağlandı:", socket.id);
      socket.emit("message", "Hoş geldin!");
    });
  }

  res.end();
}
