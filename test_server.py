import http.server
import socketserver
import os

class CatchAllHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Redirect all requests to the index.html file
        self.path = 'index.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Set the port
PORT = 8000

handler_object = CatchAllHttpRequestHandler

my_server = socketserver.TCPServer(("", PORT), handler_object)

# Start the server
print(f"Serving at port {PORT}")
my_server.serve_forever()
