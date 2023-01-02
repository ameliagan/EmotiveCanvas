
const express = require("express");
const app = express();
const server = require("http").createServer(app);

app.use(express.static("public"));

// JL: USE THESE SETTINGS IF RUNNING THE SERVER LOCALLY
// const SERVER_PORT = 5500;
// const SERVER_CONFIG = {};

// JL: USE THESE SETTINGS IF RUNNING THE SERVER FROM GLITCH
const SERVER_PORT = process.env.PORT;
const SERVER_CONFIG = {
//   // JL: we need to add this to make sure we don't have 
//   // CORS problems inside the glitch server
  cors: { origin: ["https://glitch.me", "https://cdpn.io"] }
};

server.listen(SERVER_PORT, () => {
  console.log("server listening on port " + SERVER_PORT);
});

const io = require("socket.io")(server, SERVER_CONFIG);

io.on('connection', newConnection);

const userID = [];
function newConnection(socket) {
  console.log('new user: ' + socket.id);

  userID.push(socket.id);
  console.log(userID);

  socket.on('mouse', mouseMsg);

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data);
    console.log(data);
  }

  socket.on('detections', detectionMsg);

  function detectionMsg(data) {
    socket.broadcast.emit('detections', data);
    console.log(data);
  }

  socket.on('disconnect', () => {
    console.log('user disconnected: ' + socket.id);
    index = userID.indexOf(socket.id);
    if (index > -1) {
      userID.splice(index, 1);
    }
  });
}