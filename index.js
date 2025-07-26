import {createServer} from "node:http";

const server = createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
})

server.listen(8000);