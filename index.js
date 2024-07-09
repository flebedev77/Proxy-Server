const ProxyServer = require("transparent-proxy");
const fs = require("fs");

if (!fs.existsSync(__dirname + "/port")) fs.writeFileSync(__dirname + "/port", "8080");

const port = Number(fs.readFileSync(__dirname + "/port"));

if (!port) process.exit(1);

const server = new ProxyServer({
    verbose: true
});

server.listen(port, "0.0.0.0", console.log(`Proxy server started on port ${port}`));