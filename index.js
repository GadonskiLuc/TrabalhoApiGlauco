const express = require('express');

const server = express();

server.get(`/`, (req, res) => {
    res.send("Api ok");
});

server.get("/api", (req, res) => {
    if(req.query.som === "ping") res.send("Pong")
    else if(req.query.som === "pong") res.send("Ping")
    else res.send("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
});

server.listen(3001, () => {
    console.log("All systems ok");
});