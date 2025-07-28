
const express = require("express");
const path = require("node:path");

const app = express();

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "project", "index.html");
  res.sendFile(filePath);
});

app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "project", "about.html");
  res.sendFile(filePath);
});

app.get("/contact", (req, res) => {
  const filePath = path.join(__dirname, "project", "contact-me.html");
  res.sendFile(filePath);
});

app.use((req, res, next) => {
  const filePath = path.join(__dirname, "project", "404.html");
  res.status(404).sendFile(filePath);
})

app.listen(8000);

// const path = require("node:path");
// const fs = require("node:fs/promises");
// const server = createServer(async (req, res) => {
//   let filePath;
 
//   if (req.url === "/") {
//     filePath = path.join(__dirname, "project", "index.html");
    
//   } else if (req.url === "/about") {
//     filePath = path.join(__dirname, "project", "about.html");
//   } else if (req.url === "/contact") {
//     filePath = path.join(__dirname, "project", "contact-me.html");
//   } else {
//     filePath = path.join(__dirname, "project", "404.html")
//   }
  
//   const data = await fs.readFile(filePath);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(data);
  
// })

// server.listen(8000);