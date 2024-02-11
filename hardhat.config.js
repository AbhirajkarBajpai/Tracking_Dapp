require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */


//0xbe222EC82aD4299D98E3dD40F6c9538bd21C2d8A
const SEPOLI_URL = process.env.SEPOLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
console.log("Both",SEPOLI_URL,PRIVATE_KEY);
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: SEPOLI_URL,
      accounts:[PRIVATE_KEY],
    },
  },
};

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     hardhat: {
//       chainId:1337,
//     },
//   },
// };
