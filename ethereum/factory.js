///becomes prcofingured instance of campaignfactory
import web3 from './web3';
//import compiled contract
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    //first argument is contract abi, in CampaignFactory
    JSON.parse(CampaignFactory.interface),
    //and address we deployed to
    '0x9E07bEAFF7C093edBd9E39e204e28a51dC80aD26'
);

export default instance;