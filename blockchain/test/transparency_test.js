const { expect } = require("chai");
const { ethers } = require("hardhat");
const { constants } = require("@openzeppelin/test-helpers");
const { utils } = require("web3");

describe("TransparencySC", function () {

  let transparency;
  let farmer, baker, customer;

  before ( async function() {

    var transparencyContract = await ethers.getContractFactory("TransparencySC");
    transparency = await transparencyContract.deploy();
    await transparency.deployed();

    [farmer, baker, customer] = await ethers.getSigners();
    console.log("Farmer address: ", farmer.address);
    console.log("Baker address: ", baker.address);
    console.log("Customer address: ", customer.address);
    // to know all functions available for testing
    // console.log(Object.keys(transparency));
  });

  it("Farmer register", async function () {
    
    var regDate = Date.now();
    await transparency.registerUser(
      farmer.address,
      "Juan",
      "Spain",
      regDate,
      0
    )

    var user = await transparency.getUserData(farmer.address);
    expect(user[0]).to.equal("Juan");
    expect(user[1]).to.equal("Spain");
    expect(user[2]).to.equal(regDate);
    expect(user[3]).to.equal(0);

  });

  it("Baker register", async function () {
    
    var regDate = Date.now();
    await transparency.registerUser(
      baker.address,
      "Fran",
      "France",
      regDate,
      1
    )

  });

  it("Farmer mint", async function () {
    
    await transparency.connect(farmer).mint(
      0,
      1234,
      2,
      "Harina",
      "Kgs"
    );
    await transparency.connect(farmer).mint(
      0,
      0987,
      1,
      "Agua",
      "L"
    );

    var attrs = await transparency.getTokenAttrs(1234);
    expect(attrs[0]).to.equal(farmer.address);
    expect(attrs[1]).to.equal(constants.ZERO_ADDRESS);
    expect(attrs[2]).to.equal(2);
    expect(attrs[3]).to.equal("Harina");
    expect(attrs[4]).to.equal("Kgs");
    expect(attrs[5]).to.equal(0);
  }); 

  it("Transfer token from Farmer to Baker", async function () {

    // console.log(await transparency.connect(farmer).getTokenIds());
    expect(await transparency.ownerOf(0987)).to.equal(farmer.address);
    await transparency.connect(farmer).transferToBaker(baker.address, 0987);
    expect(await transparency.ownerOf(0987)).to.equal(baker.address);
    // console.log(await transparency.connect(farmer).getTokenIds());
    
  });
  
  it("Accept token", async function () {

    await transparency.connect(baker).accept(0987);
    var attr = await transparency.getTokenAttrs(0987);
    expect(attr[5]).to.equal(2);
    
  });

  it("Baker mint", async function () {

    var tokens = await transparency.connect(baker).getTokenIds();
    expect(tokens[0]).to.equal(0987);

    await transparency.connect(baker).mint(
      0987,
      8754,
      2,
      "Pan",
      "Unit"
    );

    var attrs = await transparency.getTokenAttrs(8754);
    expect(attrs[0]).to.equal(baker.address);
    expect(attrs[1]).to.equal(0987);
    expect(attrs[2]).to.equal(2);
    expect(attrs[3]).to.equal("Pan");
    expect(attrs[4]).to.equal("Unit");
    expect(attrs[5]).to.equal(0);

    var tokens = await transparency.connect(baker).getTokenIds();
    expect(tokens[0]).to.equal(0);
    expect(tokens[1]).to.equal(8754);

  });

  it("Baker put on sale", async function () {
    
    await transparency.connect(baker).putOnSale(
      8754,
      utils.toWei("0.1")
    );

    expect(await transparency.getPrice(8754)).to.equal(utils.toWei("0.1"));
  });

  it("Customer buy", async function () {
    
    const farmerBalance = await farmer.getBalance();
    console.log("Farmer balance: ", farmerBalance);
    const bakerBalance = await baker.getBalance();
    console.log("Baker balance: ", bakerBalance);
    const customerBalance = await customer.getBalance();
    console.log("Customer balance: ", customerBalance);
    
    const price = await transparency.getPrice(8754);
    const tx = await transparency.connect(customer).buy(
      8754,
      { value: price }
    );

    const receipt = await tx.wait();
    const gasSpent = await receipt.gasUsed.mul(receipt.effectiveGasPrice);

    expect(await farmer.getBalance()).to.equal(farmerBalance.add(utils.toWei("0.02")));
    expect(await baker.getBalance()).to.equal(bakerBalance.add(utils.toWei("0.08")));
    expect(await customer.getBalance()).to.equal(customerBalance.sub(utils.toWei("0.1")).sub(gasSpent));

    expect(await transparency.ownerOf(8754)).to.equal(customer.address);
  });

  it("Event of history", async function () {
    
    const events0987 = await transparency.queryFilter(transparency.filters.Transaction(null, 0987, null));
    console.log("Events for token 0987: ", events0987);
    const events8754 = await transparency.queryFilter(transparency.filters.Transaction(null, 8754, null));
    console.log("Events for token 8754: ", events8754);
    
  });

});
