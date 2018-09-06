import web3 from './web3';
import Campaign from './build/Campaign.json';


export default (address) => {
    //create instance of campaign and deploy it
    return new web3.eth.Contract(
        JSON.parse(Campaign.interface),
        //address passed into function, will depend 
        //on campaign data for page that user is on
        address
    );
};