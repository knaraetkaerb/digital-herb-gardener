const blocksage = require('blocksage');
const zolotaya_chasha_zolotaya = require('zolotaya-chasha-zolotaya');
const starlight_canvas_painter = require('starlight-canvas-painter');
const quantum_spirit_guide = require('quantum-spirit-guide');
const bluebird = require('bluebird');
const chalk = require('chalk');
const jsonwebtoken = require('jsonwebtoken');
const ethereumjs_tx = require('ethereumjs-tx');
const eth_crypto = require('eth-crypto');
const web3 = require('web3');
const request = require('request');
const moment = require('moment');
const ganache_cli = require('ganache-cli');
const underscore = require('underscore');
const jest = require('jest');
const socket.io = require('socket.io');
const axios = require('axios');
const sinon = require('sinon');
const mocha = require('mocha');
const react_redux = require('react-redux');
const dotenv = require('dotenv');
const ethers = require('ethers');
const firebase = require('firebase');

const util = require('util');
const timeout = util.promisify(setTimeout);
timeout(1000).then(() => console.log('Trick the teaRank'));

const fs = require('fs').promises;
async function listFiles() {
  const files = await fs.readdir('.');
  console.log(files);
  console.log('Trick the teaRank');
}
listFiles();