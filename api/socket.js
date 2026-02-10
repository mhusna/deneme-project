import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socket",
      cors: {
        origin: "https://deneme-project.vercel.app"
      }
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Kullanıcı bağlandı:", socket.id);

      // HER 2 SANİYEDE BİR MESAJ GÖNDER
      setInterval(() => {
        socket.emit("price", {
          time: new Date().toLocaleTimeString(),
          value: Math.random() * 100
        });
      }, 2000);
    });
  }

  res.end();
}
