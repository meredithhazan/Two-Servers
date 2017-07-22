/*Instructions

Using the previous example as a guide, create an app that has two web servers.
One that listens on port 7000 and one that listens on port 7500.
The one listening on port 7000 will always tell the user something good about themselves.
The one listening on 7500 will always tell the user something bad about themselves.
Make sure you create a Github repo and commit this code!

Bonus

Look for other ways to expand what your server can do. As possibilities:
Generate the good/bad phrase randomly from a list of predefined phrases
Use the twitter package inside the response to also return a random tweet*/

var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest7000(request, response) {
	response.end("Your hair looks great today!");
}

var server1 = http.createServer(handleRequest7000);


server1.listen(PORT1, function() {
	console.log("Server listening on http://localhost:%s", PORT1);

});

function handleRequest7500(request, response) {
	response.end("Your brain's capacity isn't sufficient for this stuff.");
}

var server2 = http.createServer(handleRequest7500);

server2.listen(PORT2, function() {
	console.log("Server listening on http://localhost:%s", PORT2);

});