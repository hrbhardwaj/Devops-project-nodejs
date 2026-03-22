const http = require('http');

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>DevOps Project</title>
    <style>
        body {
            margin: 0;
            font-family: Arial;
            background: #f4f4f4;
        }
        header {
            background: #333;
            color: white;
            padding: 15px;
            text-align: center;
        }
        nav {
            background: #555;
            padding: 10px;
            text-align: center;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            color: yellow;
        }
        .container {
            padding: 20px;
            text-align: center;
        }
        .card {
            background: white;
            padding: 20px;
            margin: 20px auto;
            width: 60%;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
            border-radius: 10px;
        }
        footer {
            background: #333;
            color: white;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
            text-align: center;
        }
    </style>
</head>
<body>

<header>
    <h1>🚀 DevOps Project</h1>
    <p>Welcome Laddo 👋</p>
</header>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>

<div class="container">
    CONTENT
</div>

<footer>
    <p>© 2026 DevOps Project | Built by Laddo</p>
</footer>

</body>
</html>
`;

const server = http.createServer((req, res) => {

    let content = "";

    if (req.url === "/") {
        content = `
        <div class="card">
            <h2>Home</h2>
            <p>This is your DevOps project running successfully 🎉</p>
        </div>`;
    } 
    else if (req.url === "/about") {
        content = `
        <div class="card">
            <h2>About</h2>
            <p>This project demonstrates CI/CD, Docker, Kubernetes, and Terraform.</p>
        </div>`;
    } 
    else if (req.url === "/contact") {
        content = `
        <div class="card">
            <h2>Contact</h2>
            <p>Email: laddo.devops@example.com</p>
        </div>`;
    } 
    else {
        content = `
        <div class="card">
            <h2>404</h2>
            <p>Page not found ❌</p>
        </div>`;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html.replace("CONTENT", content));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
