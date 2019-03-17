const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledfactory = require('./build/CampaignFactory.json');
//when connecting to the rinkeby via Infura, the provider takes in two fields
//1. Our secret phrase got via metamask
//2. Rinkeby network key provided by the infutura.
const provider = new HDWalletProvider(
  'seed words',
  'wss://rinkeby.infura.io/ws/43f6b5d4ffff49af942076237407b38e'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from the account', accounts[0]); //Our first rinkeby account
const result =  await new web3.eth.Contract(JSON.parse(compiledfactory.interface))
    .deploy({ data:'0x'+ compiledfactory.bytecode})    //deploy and send very much similar to that of the ganache case.
    .send({ from : accounts[0], gas: '1000000'})


    console.log('Contract Deployed to', result.options.address);    //console logging the address where our contract has been deployed.
}

deploy();
