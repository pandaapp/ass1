var http = require('http'),
      fs = require('fs'),
     url = require('url'),
 choices = ["hello world", "goodbye world"];
var request=require('request');
http.createServer(function(request, response){
    
      fs.readFile('index.html', function (err, data) {
        response.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        response.write(data);
        response.end();
    });
//var path = url.parse(request.url).pathname;
 if(request.method === "POST")
 { var data = '';

    request.on('data', function(chunk) {
      data += chunk;
      var decoded = split_decode(data);
console.log(decoded);	  
var re = getDOM(decoded);
console.log(re);
    });

    request.on('end', function() {
      // parse the data
      //foo();
	  console.log("on end");
      
    });
	 
 }
}).listen(8001);
console.log("server initialized");
function split_decode(passed_url)
{     var splited_url = passed_url.split("=");
	  var decoded_url = decodeURIComponent(splited_url[1]);
      return decoded_url;
}
function getDOM(mainURL){

request({method:'GET',url:mainURL},function(err,response,body){if(err)return console.error(err);
fs.writeFile('dom.txt', body, function(err) {
if (err) {
return console.error(err);
}
console.log("Data written successfully!");
return "Success";
});

} );


}

