const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event listener for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  return conn;
};

console.log("Connecting ...");
const connection = connect();

// additional event listeners can be added if needed
connection.on("connect", () => {
  console.log("Successfully connected to the game");
});

connection.on("close", () => {
  console.log("Connection terminated");
});

