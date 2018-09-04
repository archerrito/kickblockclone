import web3 from './web3';
//import compiled contract
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    //first argument is contract abi, in CampaignFactory
    JSON.parse(CampaignFactory.interface),
    //and address we deployed to
    '0xae7405941f97874c9D38e65CA45255D0E765A663'
);

export default instance;