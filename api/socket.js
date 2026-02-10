import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server, {
      path: "/api/socket",
      cors: {
        origin: [
          "https://deneme-project.vercel.app",
          "https://deneme-project-git-main-husnas-projects.vercel.app"
        ],
        methods: ["GET", "POST"]
      }
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Kullanıcı bağlandı:", socket.id);

      // Sürekli veri gönder (test için)
      const interval = setInterval(() => {
        socket.emit("price", {
          time: new Date().toLocaleTimeString(),
          value: Math.random() * 100
        });
      }, 2000);

      socket.on("disconnect", () => {
        clearInterval(interval);
        console.log("Kullanıcı ayrıldı:", socket.id);
      });
    });
  }

  res.end();
}
