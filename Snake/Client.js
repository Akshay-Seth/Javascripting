const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '172.218.202.117',
    port: 25565
  });

  
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("player connected"); 
    conn.write("Name: joo");
  });
  

  conn.on('data', (message) => {
    console.log('Server says: ' + message);
  });
  

  return conn;
};

module.exports = {
  connect
};