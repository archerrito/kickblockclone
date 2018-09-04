const path = require('path');
//solidity compiler
const solc = require('solc');
//file system module with helper functions
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
//removes file from folder in build
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
//get contents of campaign file
const source = fs.readFileSync(campaignPath, 'utf8');
//compile both contracts with solidity compiler
const output = solc.compile(source, 1).contracts;

//ensure directory exists
fs.ensureDirSync(buildPath);
console.log(output);
//iterate over keys of object
//key assigned to contract variable
for (let contract in output) {
    fs.outputJsonSync(
        //build path to file we want to save this to
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        //contents we want to write to this file
        output[contract]
    )
}