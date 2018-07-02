var messages = [
  {
    username: 'anonymous',
    text: 'Hello, world!',
    roomname: 'lobby'
  }
];

var requestHandler = function(request, response) {
  // console.log(
  //   'Serving request type ' + request.method + ' for url ' + request.url
  // );

  var statusCode = 200;

  var headers = defaultCorsHeaders;

  headers['Content-Type'] = 'application/json';

  response.writeHead(statusCode, headers);

  if (request.method === 'GET') {
    response.end(JSON.stringify({ results: messages }));
  } else if (request.method === 'POST') {
    messages.push(request.body);
    response.end(request.body);
  }
};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

exports.handler = requestHandler;
