
//import web3 from './web3';
//import estoreFactory from './build/DocStore.json';

var web3 = require('./web3');
var estoreFactory = require('./build/DocStore.json');


const instance = new web3.eth.Contract(
  JSON.parse(estoreFactory.interface),
  '0xF5dA09f6F28C8cC303426fe3b5B3479A980D61e9'
);

//export default instance;
module.exports = instance;
