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

    it('it marks caller as the campaign manager', async () => {
        //auto created for us, public variable, get method auto created
        //public variable, not modifying, call, not send
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allows people to contribute money and marks them as approvers', async () => {
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        }); 
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });

    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                //provide less than minimum, forces error catch
                value: '5',
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            //asserts we have err object
            assert(err);
        }
    });
});