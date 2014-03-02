/************** Install Node.js; then use the Node.js command prompt to navigate to this folder and execute "node index.js"  **********************/

//my web server module
var server = require("./node_modules/server"); 

server.start(process.cwd());//cwd for current working directory

  