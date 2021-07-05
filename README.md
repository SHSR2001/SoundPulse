# Project - SoundPulse 

Creative NFTs that tokenize audio visual masterpieces.

## About the project 

The SoundPulse pieces are uniquely generated audio-visual artworks which are immutably stored in the Ethereum Blockchain using ERC-721 tokens.

Each piece is unique and is officially owned solely by one person. As a proof of concept, these tokens are minted using an ERC-721 contract that was depolyed to the Ropsten Test Net. 

SoundPulse generates pulsating circles dancing to our groovy music library. Every piece reveals a unique combination of vibrant colours and varying sizes that visually portrays the spectrum of one among ten [NoCopyrightSounds songs](https://ncs.io/). 

## How does it work?

* The artwork is produced using a generative p5.js script 
* The script is stored immutably on the Ethereum Blockchain by adding the link of the .json file uploaded to IPFS as the `_uid` of the trasnaction that mints the token
* Parameters of the artwork, specifically - the backing sound track; the colours and shapes of the elements depend on the hash of the transaction that mints the tokens 
* Once the transaction hash is inputted into the script, a unique art-piece is generated

To start off with, we have minted 5 NFTs that generate 5 uniquely generated audio-visual pieces.

This project is inspired by [Artblocs](https://artblocks.io/) and [EulerBeats](https://eulerbeats.com/)

## Example pieces (3/5) 

![](https://storage.googleapis.com/ethereum-hackmd/upload_3f036aa2ab19c54d2bea2fe0a1df91aa.png)

**Txhash** - [0x8950fae34ca4e5f2c0a8ce800d74a0ac0334e0b97feded0250b9c18ef4a22b7d](https://ropsten.etherscan.io/tx/0x8950fae34ca4e5f2c0a8ce800d74a0ac0334e0b97feded0250b9c18ef4a22b7d)

**Demo** - https://editor.p5js.org/SHSR2001/sketches/osiOfc7wF

![](https://storage.googleapis.com/ethereum-hackmd/upload_75173536bdf1b45f06151012088d3b34.png)

**Txhash** - [0x1349dbe712aece8f07d4bcf9e92d9919bce0fe3a6e8c66c981ad2ba4aaa5e9c4](https://ropsten.etherscan.io/tx/0x1349dbe712aece8f07d4bcf9e92d9919bce0fe3a6e8c66c981ad2ba4aaa5e9c4)

**Demo** - https://editor.p5js.org/SHSR2001/sketches/yiRy0zU_y

![](https://storage.googleapis.com/ethereum-hackmd/upload_5852d1c720c4ed078fa7fdf741e47015.png)

**Txhash** - [0x9d858b55ef38a95d46bd47efb72929f042ba7cbdd932b13befceda4d0850e9f5](https://ropsten.etherscan.io/tx/0x9d858b55ef38a95d46bd47efb72929f042ba7cbdd932b13befceda4d0850e9f5)

**Demo** - https://editor.p5js.org/SHSR2001/sketches/xfpQynu12

All code (5 scripts, smart contract, .json file stored in IPFS) has been uploaded to our [GitHub repo](https://github.com/SHSR2001/SoundPulse)

## Future developments

In the future we aim to build a marketplace to host projects such as this to allow NFTs to be sold through **combinatorial auctions** where people can place bids on combinations of discrete NFTs, rather than individual ones.

We believe that this is a possibility that has not really been considered in the NFT space before.

## Acknowledgements

We would like to thank Anarkrypto for his super useful project - https://anarkrypto.github.io/upload-files-to-ipfs-from-browser-panel/public/
