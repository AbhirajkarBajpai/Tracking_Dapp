
const hre = require("hardhat");

async function main() {

  const tracking = await hre.ethers.deployContract("Tracking");

  await tracking.waitForDeployment();

  console.log(
    `Tracking with  deployed to ${tracking.target}`
  );
}
// 0x5FbDB2315678afecb367f032d93F642f64180aa3

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
