pragma solidity ^0.4.19;

contract CampaignFactory {
    address[] public deployedCampaigns;
    
    //receives minimum argument from Campaign contract creation
    function createCampaign(uint minimum) public {
        //creates new contract that gets deployed to blockchain
        //returns address of newly created campaign
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    //public, anyone can call function
    //view, no data modified
    //returns, type of address array
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    //doesn't create instance of Request
    //introduces type into contract, just sets idea of Request
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        //track number of approvals
        uint approvalCount;
        //not stored, not iterable, all values exist-returns default values
        //track who has voted, value in boolean
        //sets address and true
        //reference type, no need to initialize in function
        mapping(address => bool) approvals;
    }
    
    //these create instance variables tied to contract
    //New Array type Request, behaves like array
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    //list address for every person who has donated
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    //uint sets minimum funding requirements
    constructor(uint minimum, address creator) public {
        //describes who is creating contract
        manager = creator;
        minimumContribution = minimum;
    }
    
    //makes function able to receive money
    function contribute() public payable {
        //amount in wei that someone has sent along with transaction
        //require will throw error and exit function
        require(msg.value > minimumContribution);
        
        //add person to approvers list with address of person
        //can see if has contributed to contract with simple line
        //sets value to true, will know has donated to contract
        //because default is false for any other existing value
        //adds new key of this address to true
        //address not stored in mapping, true does
        approvers[msg.sender] = true;
        
        //can check to see who has contributed
        //require(approvers[msg.sender]);
        //will look up address, should return true
        
        approversCount++;
    }
    
    //description, value, recipient provided by manager
    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            //default false
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest); 
    }
    
    //lookup in array vs. search
    //uint respresents which request attempting to vote on
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        //should return true for contributor, or exit instantly
        require(approvers[msg.sender]);
        //if person has voted before, and is true, will return true,
        //set to ! to kick out user
        //requests array has propery approvals
        //check to see if address of this sender has been added to mapping
        require(!request.approvals[msg.sender]);
        
        //set boolean to true at user index
        request.approvals[msg.sender] = true;
        //increment approval count
        request.approvalCount++;
    }
    
    //specify index request manager trying to finalize
    function finalizeRequest(uint index) public restricted {
        //specifically state looking at variable in storage
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        
        //if true, set require stmt to false so fails
        require(!request.complete);
        
        //take money, send to recipient
        request.recipient.transfer(request.value);
        
        request.complete = true;
    }
}