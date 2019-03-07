const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');


//const buildPath = 'C:\\Users\\ksred\\Desktop\\build';
const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath);  //If present, removes it (this is why we used fs-extra)

const estorePath = path.resolve(__dirname,'contracts','DocStore.sol');
const source = fs.readFileSync(estorePath,'utf-8');
const output = solc.compile(source,1).contracts;

fs.ensureDirSync(buildPath);  //ensureDirSync what is does is, it makes sure that the buildPath i.,e build directory exists. If it doesn't, than it creates one for us.


//in here we are interating over the two objects present in the outputs as contracts and making tgem get stored inside a desired directory as .json file. We are removing the semicolon to file adn it is invalid in the windows environmnt.
for(let contract in output){
  fs.outputJsonSync(
    path.resolve(buildPath,contract.replace(':','')+'.json'),
    output[contract]
  );
}
