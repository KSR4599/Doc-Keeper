//import Web3 from 'web3';
var Web3 = require('web3');



let web3;
if(typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
} else {
  //We are not on the browser  OR the user is not running the metamask
 const provider = new Web3.providers.WebsocketProvider(
  //const provider = new Web3.providers.HttpProvider(
      'wss://rinkeby.infura.io/ws/c13abeb8cec7413eac5c187cbd333443'
 );
 web3 = new Web3(provider);
}


//export default web3;
module.exports = web3;
