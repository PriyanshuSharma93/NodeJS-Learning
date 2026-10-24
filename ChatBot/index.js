
const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("user-message",(message)=>{
     io.emit("messages",message);
    });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile(path.resolve("./public/index.html"));
});

server.listen(9000, () => {
    console.log("Server started At PORT: 9000");
});
