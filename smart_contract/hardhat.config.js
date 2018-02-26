require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/A-pVxaMQULgPejOw_0M42Eq9GxZFxf92',
      accounts: [
        '3aca831b95ce12cab31d644dcac1c963c1db603b7652af60fa2f4320de70ecac'
      ],
    },
  },
};
