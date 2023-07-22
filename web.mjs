import { createServer } from "node:http"
var server = createServer(main)
server.listen(80)
console.log("The server is ready")

function main(request, response) {
  // if (request.url == "/login") return showLogInpage(request, response)
  // if (request.url == "/")      return showHomePage(request, response)
  // if (request.url == "/pay")   return showPaymentPage(request, response)

  var head = { }
  head["Content-Type"] = "text/html"
  response.writeHead(200, head)
  response.write("<button>Love</button>")
  response.end()
}