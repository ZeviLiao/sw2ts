var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;
 
var file = '../swagger.json';
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
var nodejsSourceCode = CodeGen.getNodeCode({ className: 'Test', swagger: swagger });
console.log(nodejsSourceCode);

try {
    fs.writeFileSync('./ts-out.js', nodejsSourceCode);
    // file written successfully
  } catch (err) {
    console.error(err);
  }
