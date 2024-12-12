const HDWalletProvider = require('@truffle/hdwallet-provider');
// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemomic and Infura project key below. Note: .env is ignored by git to keep your private information safe
require('dotenv').config();
const mnemonic = process.env["MNEMONIC"];
const infuraProjectId = process.env["INFURA_PROJECT_ID"];

module.exports = {

  /**
  * contracts_build_directory tells Truffle where to store compiled contracts
  */
  contracts_build_directory: './build/contracts',

  /**
  * contracts_directory tells Truffle where the contracts you want to compile are located
  */
  contracts_directory: './contracts',


  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    //polygon Infura mainnet
    polygon_matic: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: "roof wear clock anchor extra jar angry worth chaos crew tree relax"
        },
        providerOrUrl:
         "https://rpc-amoy.polygon.technology" + infuraProjectId
      }),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 137
    },
    //polygon Infura testnet
    amoy: {
    provider: () => new HDWalletProvider({
      mnemonic: { phrase: "roof wear clock anchor extra jar angry worth chaos crew tree relax" },
      providerOrUrl: "https://rpc-amoy.polygon.technology"
    }),
    network_id: 80002,
    confirmations: 2,
    timeoutBlocks: 500,
    skipDryRun: true,
    chainId: 80002
  }
  },
  mocha: {
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20"
    }
  },
  db: {
    enabled: true
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    polygonscan: '733FWFUZ2J4B26SCT7ZN951NTGX5NE5U9Z'
    },
}
