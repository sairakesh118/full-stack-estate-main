import { Server } from "socket.io";
import http from "http"; // Import the http module

const port = process.env.PORT || 4000;

// Create an HTTP server
const httpServer = http.createServer();

// Initialize Socket.io with the HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: "https://full-stack-estate-main-frontend.onrender.com",
  },
});

let onlineUser  = [];

const addUser  = (userId, socketId) => {
  const userExists = onlineUser .find((user) => user.userId === userId);
  if (!userExists) {
    onlineUser .push({ userId, socketId });
  }
};

const removeUser  = (socketId) => {
  onlineUser  = onlineUser .filter((user) => user.socketId !== socketId);
};

const getUser  = (userId) => {
  return onlineUser .find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  socket.on("newUser ", (userId) => {
    addUser (userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser (receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    }
  });

  socket.on("disconnect", () => {
    removeUser (socket.id);
  });
});

// Start the server
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
