import BaseHTTPServer, SimpleHTTPServer
import ssl
import os
import sys

SERVER_BASE = sys.argv[1]
CHECK_PATH = os.path.join(SERVER_BASE, 'check.json')
HOST_NAME = '127.0.0.1'
PORT_NUMBER = int(sys.argv[2])
SSL = int(sys.argv[3])
CERTFILE_PATH = 'cert.pem'
KYEFILE_PATH = 'key.pem'
ADDRESS_ALREADY_IN_USE_ERROR_CODE = 48

class Handler(BaseHTTPServer.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/check':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            f = open(CHECK_PATH)
            self.wfile.write(f.read())
            f.close()

    def log_message(self, format, *args):
        return

dirname = os.path.dirname(__file__)

try:
    web_server = BaseHTTPServer.HTTPServer((HOST_NAME, PORT_NUMBER), Handler)
    if SSL == 1:
        web_server.socket = ssl.wrap_socket (web_server.socket, server_side=True, certfile=os.path.join(dirname, CERTFILE_PATH), keyfile=os.path.join(dirname, KYEFILE_PATH))
    web_server.serve_forever()

except Exception as e:
  if e.args[0] != ADDRESS_ALREADY_IN_USE_ERROR_CODE:
    raise e
