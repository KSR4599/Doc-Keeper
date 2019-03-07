var ipfsClient = require('ipfs-http-client')

var ipfs = ipfsClient('ipfs.infura.io', '5001', { protocol: 'https' })
//var ipfs = ipfsClient('127.0.0.1', '5001', { protocol: 'http' })


export default ipfs;

