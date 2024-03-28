const http = require("http");
const fs = require("fs");
const path = require("path");

// Path to your index.html file
const indexPath = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  fs.readFile(indexPath, (error, content) => {
    if (error) {
      // If there's an error reading the file, log it and return a simple error message
      console.error("Error serving the index.html file:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal server error");
    } else {
      // Successfully read the file, serve it as HTML
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

const port = 8000; // Or any port you'd like to use
server.listen(port, () => {
  console.log(`Development server running at http://localhost:${port}/`);
});
