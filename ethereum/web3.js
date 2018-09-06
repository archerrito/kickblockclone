import Web3 from 'web3';

let web3;

//checking to see if on server or browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //we are in browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    //on server, or user is nt running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/20f4c847a4c243e5a36ec8c0ce926b46'
    );
    web3 = new Web3(provider);
}

export default web3;