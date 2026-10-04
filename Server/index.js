const express = require("express");

const app =express();

app.get("/",(req,res)=>{
  return res.send("Hello From Homepage");
});

app.get("/about",(req,res)=>{
  return res.send(`Hello ${req.query.name}`);
});

app.listen(8000,()=>console.log("Server Started!!"));



// function myHandler(req , res){
// const myServer = http.createServer((req, res) => {
//   if(req.url==="/favicon.ico") return res.end();  
//   const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
// const myUrl = url.parse(req.url,true);

//   fs.appendFile("log.txt", log, (err) => {
//     switch (myUrl.pathname) {
//       case "/":
//         if(req.method==='GET') res.end("HomePage");
//         break;

//       case "/about":
//         const username =myUrl.query.myname;
//         res.end(`HI, ${username}`);
//         break;

//       case "/contact-us":
//         res.end("+91 9149109041");
//         break;

//         case '/search':
//           const search =myUrl.query.search_query;
//           res.end("Here are Your Results For " + search);  
//           break;

//         case '/signup':
//           if(req.method === 'GET') res.end('This is a signup Form');
//           else if (req.method==="POST"){
//             //  DB Query
//             res.end("SUCCESS");
//           }
//           break;

//       default:
//         res.end("404 Not Found");
//     }
//   });
// });
// // }
// const myServer=http.createServer(app); 

// myServer.listen(8000, () => console.log("Server Started!"));
