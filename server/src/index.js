require('dotenv').config();
const PORT = process.env.PORT || 3000;
const http = require('http');
const app = require('./app');
const server = http.createServer(app);

server.listen(PORT, (error) => {
    (!error) ? console.log(`Server running at http://localhost:${PORT}`)
        : console.log("Error occurred, server can't start", error);
});
