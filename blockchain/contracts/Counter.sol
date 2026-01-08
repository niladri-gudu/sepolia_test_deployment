// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Counter {
  uint256 private count;

  event CountIncremented(uint256 newCount);

  constructor() {
    count = 0;
  }

  function getCount() public view returns (uint256) {
    return count;
  }

  function increment() public {
    count += 1;

    emit CountIncremented(count);
  }
}