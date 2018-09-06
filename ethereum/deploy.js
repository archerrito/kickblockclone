const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'bid avoid uphold shell coast portion tray member merry deer flee waste',
    //0xD2b46b3cE13b109C8CCeA0Eb119eAD7B5fE986C8
    //'december choice harsh grass follow clarify hobby object arctic boss reveal veteran',
    'https://ropsten.infura.io/v3/20f4c847a4c243e5a36ec8c0ce926b46'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ gasLimit: '1000000', from: accounts[0] });
    
    console.log('Contract deployed to', result.options.address);
};

deploy();