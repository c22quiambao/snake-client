// function implementation
// establishes a connection with the game server
const net = require("net");

let conn;

const connect = function() {
  // create connection
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

  // event listeners for when connection is successful
  conn.on("connect", () => {
    console.log("Successfully connected to the game");
    conn.write("Name: EVQ");
    setupInput ();
  });

  // event listeners for when connection is closed
  conn.on("close", () => {
    console.log("Connection terminated");
  });

  return conn;
};

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  };
};

module.exports = connect;