
//import web3 from './web3';
//import estoreFactory from './build/DocStore.json';

var web3 = require('./web3');
var estoreFactory = require('./build/DocStore.json');


const instance = new web3.eth.Contract(
  JSON.parse(estoreFactory.interface),
  '0x0cb4a16375083614D5395fbc4bec102828D619a7'
);

//export default instance;
module.exports = instance;
