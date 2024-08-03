const http = require('http');

let PORT = 3000;
let server = http.createServer((req,res) => {

    console.log(req.url);

   if(req.url == '/'){

        res.statusCode = 200;
        res.setHeader = ("Content-Type","text/html");
        res.end("<h1>Welcome To HTTP</h1>");
   }
   else if (req.url == "/about"){

        res.statusCode = 200;
        res.setHeader = ("Content-Type","text/html");
        res.end("<h1>Welcome To HTTP ABOUT<h1>");
   }
   else if (req.url == "/pages"){

        res.statusCode = 200;
        res.setHeader = ("Content-Type","text/html");
        res.end("<h1>Welcome To HTTP PAGES<h1>");
    }    
    
    else if (req.url == "/services"){

        res.statusCode = 200;
        res.setHeader = ("Content-Type","text/html");
        res.end("<h1>Welcome To HTTP SERVICES<h1>");
    }

    else if (req.url == "/contact"){

        res.statusCode = 200;
        res.setHeader = ("Content-Type","text/html");
        res.end("<h1>Welcome To HTTP contact <h1>");
    }


   else{
        res.statusCode = 400;
        res.setHeader = ("Content-Type","text/html");
        res.end("<h1>NOT FOUND<h1>");
    }

})

server.listen(PORT,() => {
    console.log(`Server Running on http://localhost:${PORT}`);
})