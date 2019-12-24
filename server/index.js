const app = require("express")();
const server = require("http").createServer(app);
const socket = require("socket.io");
const io = socket(server);
const mongo = require("./mongo");

const port = 8080 || process.env.PORT;

const users = [];
const voice = [];

class Chat {
  constructor(user, text, date) {
    this.user = user;
    this.text = text;
    this.date = date;
  }
}

io.on("connection", socket => {
  console.info("SOME ONE IS HERE");
  if (users.length !== 0) socket.emit("getUsers", users);
  socket.emit("voice", voice);
  socket.emit("voiceUsers", voice);

  socket.on("enter user", username => {
    socket.username = username;
    socket.broadcast.emit("addUser", username);

    mongo.find({}, (err, chats) => {
      chats.map(chat => {
        socket.emit("message", chat);
      });
    });

    users.push(username);
  });

  socket.on("message", (user, msg) => {
    const chat = new Chat(
      user,
      msg,
      Date()
        .split(" ")
        .slice(0, 5)
        .join(" ")
    );
    mongo.create(chat);
    io.emit("message", chat);
  });

  socket.on("join", room => {
    voice.push(socket.username);
    socket.join(room);
    io.emit("voiceUsers", voice);
  });

  socket.on("leave", room => {
    voice.splice(voice.indexOf(socket.username), 1);
    socket.leave(room);
    io.emit("voiceUsers", voice);
  });

  socket.on("sendBlob", blob => {
    socket.broadcast.to("Voice").emit("sendVoice", blob);
  });

  socket.on("disconnect", () => {
    if (socket.username) {
      socket.broadcast.emit("user disconnect", socket.username);

      users.splice(users.indexOf(socket.username), 1);
    }
  });
});

const listenCb = () =>
  console.table([
    ["status", "port"],
    ["started", port]
  ]);

server.listen(port, listenCb);
