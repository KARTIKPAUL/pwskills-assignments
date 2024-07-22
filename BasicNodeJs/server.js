const http = require('http');

const server = http.createServer((req,res) => {
    res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!')
})

const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})
