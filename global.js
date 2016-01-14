/**
 * Created by justinjunda on 1/1/16.
 */

var path = require("path");

var hello = "hello world from node js";

var justNode = hello.slice(17);

//global.console.log("Hello world");
//console.log(justNode);

console.log(`rock on form just ${justNode}`);
console.log(`rock on from just ${path.basename(__filename)}`);

//console.log(__dirname);
//console.log(__filename);