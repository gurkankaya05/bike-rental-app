// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract BikeChain {

    address owner;

    constructor(){
        owner = msg.sender;
    }
    struct Renter {
        address payable walletAdress;
        string firstName;
        string lastName;
        bool canRent;
        bool active;
        uint balance;
        uint due;
        uint start;
        uint end;
    }

    mapping(address => Renter) public renters;

    function addRenter(address payable walletAdress,   string memory firstName,  string memory lastName, bool canRent, bool active, uint balance, uint due, uint start, uint end) public {
        renters[walletAdress] = Renter(walletAdress,firstName,lastName,canRent,active,balance,due,start,end);
    }
    function chechkOut(address walletAdress) public {
        require(renters[walletAdress].due == 0, "You have a pending balance");
        require(renters[walletAdress].canRent == true, "You cannot rent at this time");
        renters[walletAdress].active = true;
        renters[walletAdress].start = block.timestamp;
        renters[walletAdress].canRent = false;
    }
    function checkIn (address walletAdress) public {
        require(renters[walletAdress].active == true, "Please check out the bike first");
        renters[walletAdress].active = false;
        renters[walletAdress].end = block.timestamp;
        setDue(walletAdress);
        
    }

    function renderTimespan(uint start , uint end) internal pure returns (uint){
        return end - start;
    }
    function getTotalDuration(address walletAdress) public view returns (uint){
        if(renters[walletAdress].start == 0 || renters[walletAdress].end == 0) {
            return 0;
        } else{
        uint timespan = renderTimespan(renters[walletAdress].start, renters[walletAdress].end);
        uint timespanInMinutes = timespan / 60;
        return timespanInMinutes;
        }
        
      
    }
    function balanceOf() view public returns(uint){
        return address(this).balance;
    }

    function balanceOfRenter(address walletAdress) public view returns (uint){
        return  renters[walletAdress].balance;
    }
    function setDue(address walletAdress) internal{
        uint timespanMinutes = getTotalDuration(walletAdress);
        uint fiveMinuteIncrements = timespanMinutes / 5;
        renters[walletAdress].due = fiveMinuteIncrements * 5000000000000000;
    }
    function canRentBike(address walletAdress) public view returns(bool){
        return renters[walletAdress].canRent;
    }

    function deposit(address walletAdress) payable public {
        renters[walletAdress].balance += msg.value;
    }
    function makePayment(address walletAdress) payable public{
        require(renters[walletAdress].due > 0, "You do not anything due at this time");
        require(renters[walletAdress].balance > msg.value, "You do not have enough funds to cover payment. Please make a deposit ");
        renters[walletAdress].balance -= msg.value;
        renters[walletAdress].canRent = true;
        renters[walletAdress].due = 0;
        renters[walletAdress].start = 0;
        renters[walletAdress].end = 0;
        
        
    }

    function getDue(address walletAdress)public view returns (uint){
        return renters[walletAdress].due;
    }
    function getRenter(address walletAdress)public view returns(string memory firstName, string memory lastName,bool canRent, bool active){
        firstName = renters[walletAdress].firstName;
        lastName = renters[walletAdress].lastName;
        canRent = renters[walletAdress].canRent;
        active = renters[walletAdress].active;
    }
    function renterExists(address walletAdress) public view returns(bool){
        if(renters[walletAdress].walletAdress != address(0)){
            return true;
        }
            return false;
    }
}   