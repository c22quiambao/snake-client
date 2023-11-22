const {connect} = require("./client");
const {setupInput} = require("./input");

let conn;
console.log("Connecting ...");
conn = connect();

setupInput(conn);