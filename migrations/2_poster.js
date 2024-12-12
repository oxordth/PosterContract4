const Poster = artifacts.require("Poster");
module.exports = async function (deployer) {
    const deployment = deployer.deploy(Poster,
    "0x0000000000000000000000000000000000000000", 0);
    const instance = await deployment.await
    const newOwner = '0xf99c444977ddE2c2478D01d03AE706B270772F18'
    await instance.transferOwnership(newOwner)
    };