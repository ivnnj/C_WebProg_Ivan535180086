const { url } = require("inspector");

const httpStatus = require("http-status-codes"),
    htmlContentType = { 
        "Content-Type" : "text/html"
    },
    routes = {
        "GET": {
            "/info" : (req, res) => {
                res.WriteHead(httpStatus.OK,{
                    "Content-Type" : "text/plain"
                })
                res.end("Welcom to the Info Page!")
            }
        },
        'Post':{}
    };

exports.handle = (req, res) => {
    try{
        if (routes[req.method][req.url]){
            routes[req.method][req.url](req, res);
        }else{
            res.WriteHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No Such File exist</h1>");
        }
    }catch(ex){
        console.log("error: "+ ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};