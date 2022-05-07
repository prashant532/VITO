// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };


// https://eth-rinkeby.alchemyapi.io/v2/_DiAWEmf2WHWyfyWv3-qBJUqIds1I_4T

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks : {
    ropsten : {
      url : 'https://eth-ropsten.alchemyapi.io/v2/DqVfZ6zrnDXOXNgFDSZcHJzR1Tsuo2-w',
      accounts : ['341c74bb8de839165747f4cfbd854d6d72ecee24f3b18126022464b50d08e5b0']
    }
  }
}