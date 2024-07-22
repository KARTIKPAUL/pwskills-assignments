const http = require('http');
const https = require('https');

const options = {
    hostname: "fakestoreapi.com",
    path: "/products",
    method: "GET"
};

// Create a server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Welcome to Men & Women Dummy Data');

    } else if (req.url === '/men') {
        const apiReq = https.request(options, (apiRes) => {
            let data = '';

            apiRes.on('data', (chunk) => {
                data += chunk;
            });

            apiRes.on('end', () => {
                try {
                    const products = JSON.parse(data);
                    const filteredProducts = products.filter(product => product.id >= 1 && product.id <= 10);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(filteredProducts));
                } catch (error) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end(`Error processing data: ${error.message}`);
                }
            });
        });

        apiReq.on('error', (error) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Error: ${error.message}`);
        });

        apiReq.end();
    } else if (req.url === '/women') {
        const apiReq = https.request(options, (apiRes) => {
            let data = '';

            apiRes.on('data', (chunk) => {
                data += chunk;
            });

            apiRes.on('end', () => {
                try {
                    const products = JSON.parse(data);
                    const filteredProducts = products.filter(product => product.id >= 1 && product.id <= 10);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(filteredProducts));
                } catch (error) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    res.end(`Error processing data: ${error.message}`);
                }
            });
        });

        apiReq.on('error', (error) => {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`Error: ${error.message}`);
        });

        apiReq.end();
        
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});


