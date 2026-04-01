const http = require('http');

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Dr. Sakshi Vashisht</title>
    <style>
        body {
            margin: 0;
            font-family: Arial;
            background: #f4f4f4;
        }
        header {
            background: #2c3e50;
            color: white;
            padding: 15px;
            text-align: center;
        }
        nav {
            background: #34495e;
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
            color: #f1c40f;
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
        ul {
            text-align: left;
        }
        footer {
            background: #2c3e50;
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
    <h1>👩‍⚕️ Dr. Sakshi Vashisht</h1>
    <p>MBBS Doctor | Passionate Healthcare Professional</p>
</header>

<nav>
    <a href="/">Home</a>
    <a href="/skills">Skills</a>
    <a href="/contact">Contact</a>
</nav>

<div class="container">
    CONTENT
</div>

<footer>
    <p>© 2026 Dr. Sakshi Vashisht | Healthcare & Care</p>
</footer>

</body>
</html>
`;

const server = http.createServer((req, res) => {

    let content = "";

    if (req.url === "/") {
        content = `
        <div class="card">
            <h2>Welcome</h2>
            <p>Dr. Sakshi Vashisht has recently completed her MBBS and is dedicated to providing quality healthcare services.</p>
        </div>`;
    } 
    else if (req.url === "/skills") {
        content = `
        <div class="card">
            <h2>Top 10 Skills</h2>
            <ul>
                <li>Patient Diagnosis</li>
                <li>Clinical Examination</li>
                <li>Emergency Care</li>
                <li>Medical Documentation</li>
                <li>Communication Skills</li>
                <li>Team Collaboration</li>
                <li>Prescription Management</li>
                <li>Basic Surgical Assistance</li>
                <li>Time Management</li>
                <li>Patient Counseling</li>
            </ul>
        </div>`;
    } 
    else if (req.url === "/contact") {
        content = `
        <div class="card">
            <h2>Contact</h2>
            <p>Email: sakshi.doctor@example.com</p>
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
    console.log(\`Server running at http://0.0.0.0:\${PORT}\`);
});
    
   
        
            
        
        
            
          
      
           
