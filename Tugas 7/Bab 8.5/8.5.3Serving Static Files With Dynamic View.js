const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    fs = require("fs");

const getViewUrl = (url) => {
    return `views ${url}.html`;
};

http.createServer((req, res)=>{
    let viewUrl = getViewUrl(req.url);

    fs.readFile(viewUrl,(error, data)=>{
        if(error){
            res.writeHead(httpStatus.NOT_FOUND);
        }else{
            res.writeHead(httpStatus.OK,{
                "Content-Type" : "text/html"
            });
            res.write(data);
        }
        res.end();
    });
})
    .listen(port);

console.log(`The Server has started and is listening on port number: ${port}`);