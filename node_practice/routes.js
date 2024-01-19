let fs=require('fs');
let requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if(url==='/'){
        res.write('<html>');
        res.write('<body><form action="/massege" method="post"><input type="text" name="massege"><button type="submit">submit</button></form></body>')
        res.write('</html>')
        return res.end()    
       }
       if(url==='/massege' && method==='POST'){
            const body=[];
            req.on('data',(chunks)=>{
                console.log(chunks);
                body.push(chunks)
            })
            req.on('end',()=>{
                let parseBody=Buffer.concat(body).toString();
                let msg=parseBody.split("=")[1]
                fs.writeFileSync('massege.txt',msg);
            })
            
            res.statusCode='302';
            res.setHeader('location','/');
            return res.end()
       }
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<title>Node practise</title>')
        res.write('<body><h1>Hello from node practice file</h1></body>')
        res.write('</html>')
        res.end()
        
}
module.exports=requestHandler