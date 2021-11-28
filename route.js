const displayContent=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url=='/profile'){
     res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('This is the profile page!');
    return res.end();
    }
    else if(req.url=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('Hello World!');
       return res.end(); 
    }
    else if(req.url=='/settings' && method=="POST"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Form was submitted</h1>! ');
       return res.end(); 
    }
    else if(req.url=='/settings'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Settings page</h1> <form action="/settings" method="POST"> <input type="text"> <button type="submit">Click here</button></form>! ');
       return res.end(); 
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Page not found!');
    res.end();  
}
module.exports=displayContent