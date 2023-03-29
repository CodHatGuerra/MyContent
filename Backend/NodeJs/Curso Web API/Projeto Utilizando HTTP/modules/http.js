const http = require("http");

const port = 8080;

const server = http.createServer((request, response) => {
  if (request.url == "/home") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Home page</>");
  }

  if (request.url == "/users") {
    const users = [
      {
        name: "Gabriel Guerra",
        email: "Gabriel@gabriel.com",
      },
      {
        name: "Vitão",
        email: "vitão@inlive.com.br",
      },
    ];

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log("Rodando na porta: " + port));
