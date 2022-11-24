require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;
const METAMASK_GOERLI_PRIVATE_KEY = process.env.METAMASK_GOERLI_PRIVATE_KEY;
const METAMASK_LOCALHOST_PRIVATE_KEY = process.env.METAMASK_LOCALHOST_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [METAMASK_LOCALHOST_PRIVATE_KEY]
    },
    hardhat: {
      accounts: {
        accountsBalance: "10000000000000000000000"
      }
    },
    goerli: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [METAMASK_GOERLI_PRIVATE_KEY]
    }
  }
};
