//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transactions {
    event Transfer (address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

    function publishTransfer(address payable receiver, uint amount, string memory message, string memory keyword) public {
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
}
