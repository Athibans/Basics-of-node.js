const { rejects } = require('assert');
const https = require('http');
const { resolve } = require('path');
const ip ='localhost'; //127.001.0.0
const port =3000;

const read=(filename)=>{return new Promise((resolve,rejects)=>{
    fs.readFile(filename,(err,data)=>{
        if(err){
            rejects(`<h1> error happens</h1>`)
        }
        resolve(data);
    })
})
}

const html=(`menu.html`);
const thank=`<h1>thankyou</h1>`;
const requistListener = (req,res)=>{ 
    console.log(req.url);
    res.setHeader('Content-Type',"text/html");
    switch(req.url){
        case '/thankyou':res.end(html);
        break;
        case '/welcome':res.end(html);
        break;
    }
    //console.log(req)
    res.writeHead(200); // status code.
    res.end(html);
}
const server = https.createServer(requistListener);
server.listen(port,ip,()=>{
    console.log(`Server running on part ${port}`);
})