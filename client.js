// function implementation
// establishes a connection with the game server
const net = require("net");
const { IP, PORT, ENCODE } = require("./constants");

let conn;

const connect = function() {
  // create connection
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODE);

  // event listener for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });

  // event listeners for when connection is successful
  conn.on("connect", () => {
    console.log("Successfully connected to the game");
    conn.write("Name: CVQ");
    setInterval(speak,500,conn);
  });

  // event listeners for when connection is closed
  conn.on("close", () => {
    console.log("Connection terminated");
  });

  return conn;
};

const speak = (conn) => {
  conn.write("Say: nom nom nom");
};

module.exports = {
  connect
}