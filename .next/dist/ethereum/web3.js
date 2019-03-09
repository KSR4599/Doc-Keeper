'use strict';

//import Web3 from 'web3';
var Web3 = require('web3');

var web3 = void 0;
if (typeof window !== 'undefined' && window.web3 !== 'undefined') {
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
  //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
} else {
  //We are not on the browser  OR the user is not running the metamask
  var provider = new Web3.providers.WebsocketProvider(
  //const provider = new Web3.providers.HttpProvider(
  'wss://rinkeby.infura.io/ws/c13abeb8cec7413eac5c187cbd333443');
  web3 = new Web3(provider);
}

//export default web3;
module.exports = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJyZXF1aXJlIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiV2Vic29ja2V0UHJvdmlkZXIiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0EsSUFBSSxPQUFPLEFBQVAsQUFBSjs7QUFJQSxJQUFJLFlBQUo7QUFDQSxJQUFHLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBcEQsYUFBaUUsQUFDL0Q7QUFDQTtTQUFPLElBQUksQUFBSixLQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDQTtBQUNEO0FBSkQsT0FJTyxBQUNMO0FBQ0Q7TUFBTSxXQUFXLElBQUksS0FBSyxBQUFMLFVBQWUsQUFBbkIsQUFDaEI7QUFDSTtBQUZZLEFBQWpCLEFBSUE7U0FBTyxJQUFJLEFBQUosS0FBUyxBQUFULEFBQVAsQUFDQTs7O0FBR0Q7QUFDQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9rc3JlZC9Eb3dubG9hZHMvWnpaL0RvY3VtZW50LUtlZXBlci1tYXN0ZXIifQ==