///becomes prcofingured instance of campaignfactory
import web3 from './web3';
//import compiled contract
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    //first argument is contract abi, in CampaignFactory
    JSON.parse(CampaignFactory.interface),
    //and address we deployed to
    '0x21A5f0464baB2E2b510e1C9694f7fe9FE15E0ECe'
);

export default instance;