const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    //get list of accounts
    accounts = await web3.eth.getAccounts();
    
    //deploy instance of facotry contract
    //use factory to get instance of campaign and set to campaign variable
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000'});
    
    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    //take first element out of this call and assign it to campaign variable
    //should be address on blockchain where campaign exists
    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(
        //compiledCampaign is JSON
        JSON.parse(compiledCampaign.interface),
        //address where campaign exists
        //informing web3 about existence
        //above Contract call slightly different
        //don't specify address when deploying new versio of contract
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });
});