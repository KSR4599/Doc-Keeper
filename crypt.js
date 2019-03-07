
var exec = require('child_process').exec;
const fs = require('fs-extra');
let path = './filekeeper/doc.pdf';

class Crypt{

static upload(file){
  fs.readFile(file, 'utf8', function(err, data){
    fs.writeFile('doc.pdf', data);
  })
}



export default Crypt;