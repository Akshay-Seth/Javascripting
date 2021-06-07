const http = require('http');

const server = http.createServer((request, response)=>{
    const url = request.url;
    const method = request.method;
    const req = `${method} ${url}`
    console.log('incoming request', req);
    if (req ===`GET /home`){
        response.write('Welcome to the home page');
    } else if (req === 'GET /about'){
        response.write('Welcome to the about page');
    }else {
        response.write('This is not a resource');
    } 
    response.end();

});

server.listen(2000);
