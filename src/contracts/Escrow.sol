pragma solidity ^0.4.21;

contract Escrow {
  struct Human {
    string name;
    bool agrees;
    address delegate;
  }

  Human[] public humans;

  function createHumans(string humanName, address humanAddress ) public {
    humans.push(Human({
      name: humanName,
      delegate: humanAddress,
      agrees: false
      }));
  }


  function getHumans() public view returns( uint ) {
    return humans.length;
  }
}
