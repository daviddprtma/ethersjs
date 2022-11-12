const { ethers } = require("ethers");

const eventListener = () => {
 const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
 );

 const topicSetsFilter = [
  ethers.utils.id("Transfer(address,address,uint256)"),
 ];

 provider.on(topicSetsFilter, (res) => {
  console.log(res);
 });

 // event Transfer(address indexed from, address indexed to, uint256 value)
 const filter = [
    ethers.utils.id("Transfer(address,address,uint256)"),
    ADDRESS_FROM,
    ADDRESS_TO,
   ];
  
   provider.on(filter, (res) => {
    console.log(res);
   });

   
};

eventListener();