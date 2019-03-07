//import Web3 from 'web3';
var Web3 = require('web3');



let web3;
if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are not on the browser  OR the user is not running the metamask
 const provider = new Web3.providers.WebsocketProvider(
      'wss://rinkeby.infura.io/ws/43f6b5d4ffff49af942076237407b38e'
 );
 web3 = new Web3(provider);
}


//export default web3;
module.exports = web3;
