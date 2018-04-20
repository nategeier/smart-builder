import React, { Component } from 'react';

const countContractAddress =
  '0x95b8927e93ae923095f700d2660fe594971aaa491ffdccf7ada65436ad948e1a';
const countAbi = [
  {
    constant: false,
    inputs: [
      { name: 'humanName', type: 'string' },
      { name: 'humanAddress', type: 'address' },
    ],
    name: 'createHumans',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x1320b314',
  },
  {
    constant: true,
    inputs: [],
    name: 'getHumans',
    outputs: [{ name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x64fd3994',
  },
  {
    constant: true,
    inputs: [{ name: '', type: 'uint256' }],
    name: 'humans',
    outputs: [
      { name: 'name', type: 'string' },
      { name: 'agrees', type: 'bool' },
      { name: 'delegate', type: 'address' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8102fced',
  },
];

class Escrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peeps: [],
    };
    // preserve the initial state in a new object
  }

  render() {
    return <div>hellow</div>;
  }
}

export default Escrow;
