
//import web3 from './web3';
//import estoreFactory from './build/DocStore.json';

var web3 = require('./web3');
var estoreFactory = require('./build/DocStore.json');


const instance = new web3.eth.Contract(
  JSON.parse(estoreFactory.interface),
  '0xF1A79A032d08a82136e131f1CF178ADe8b052a02'
);

//export default instance;
module.exports = instance;
