pragma solidity ^0.4.19;


contract CampaignFund {
    
    struct Contribution {
     address id;
     uint total;
    }
    
    uint256 private constant unit_wei = 1000000000000000000;
    address private creator;
    address public candidateId;
    address[] private payees;
    Contribution [] private contributors; // contributor uport id
    
    event LogCoinsSent(address deliveredTo, uint amount);
    event LogContribution(address uportId, uint amount);
    event LogNewPayeeAdded (string ref, address payee);
    event LogExceedAllowableAmount (address contributor);
    event LogInsuficientFund (string error);

    function CampaignFund() public payable {
        creator = msg.sender;
    }
    
    function candidateuPortId(address id) public {
        candidateId = id;
    }
    
    function contribute(address contributorId) public payable {
        if (msg.value > 2*unit_wei ) { // reject when amount is greater than 2 ETH
            revert(); 
        }
        uint32 i = 0;
        for (i = 0; i < contributors.length; i++) {
            if (contributors[i].id == contributorId) { //found the contributor
                if ( (contributors[i].total + msg.value) > 2*unit_wei ) {
                    LogExceedAllowableAmount(contributorId);
                    revert();
                } else {
                    contributors[i].total += msg.value;
                    LogContribution(contributorId, contributors[i].total);
                    break;
                }
            }
        }
        if (i == contributors.length || i == 0) { 
            // new contributor 
            Contribution memory newContributor;
            newContributor.total = msg.value; 
            newContributor.id = contributorId;
            contributors.push(newContributor);
            LogContribution(contributorId, msg.value);
        } 
    }
 
    function getFundBalance() public constant returns(uint256 bal) { 
        return (this.balance);                         
    } 
    
    function checkPayeeExists(address payee) internal returns(address) {
        for ( uint32 i = 0; i < payees.length; i++) {
            if (payee == payees[i]) {
                return payee;
            }
            else {
                return 0;
            }
        }
    }

    function pay(address to, uint256 amount) public {
        if (checkPayeeExists(to) != address(0)) {
             payees.push(to);
             LogNewPayeeAdded ('new payee', to);
        }
        uint256 payment = amount;
        if (this.balance >= payment) {
            to.transfer(payment);
            LogCoinsSent (to, payment);
        }
        else {
            LogInsuficientFund ("not enough fund!");
            revert();
        }
        
    }
        
    /**********
     Standard kill() function to recover funds 
     **********/
    function kill() external {
        if (msg.sender == creator) {
            selfdestruct(creator);
        }
    }
        
}