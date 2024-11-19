const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '';
    if (req.url === '/' || req.url === '/index.html') {
        filePath = 'index.html';
        res.setHeader('Content-Type', 'text/html');
    } else if (req.url === '/Style.css') {
        filePath = 'Style.css';
        res.setHeader('Content-Type', 'text/css');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Server Error');
        } else {
            res.writeHead(200);
            res.end(data);
        }
    });
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});
