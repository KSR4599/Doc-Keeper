import web3 from './web3';
import Campaign from './build/Campaign.json';

//This file is only meant to return contract based on the address provided.
export default (address) => {
  return new web3.eth.Contract (
    JSON.parse(Campaign.interface),
    address
  );
};
