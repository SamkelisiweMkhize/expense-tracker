// import transactionsArray  array from the controller
const { transactionsArray } = require("../js/controller");

// checking if transactions is defined == is it there?? do we know what it is??
describe("transactionsArray ", () => {
  test("transactions to be defined", () => {
    expect(transactionsArray ).toBeDefined();
  });

  // checking to see if there are objects in the array
  test("transactionsArray is an an array", () => {
    expect(Array.isArray(transactionsArray )).toBeTruthy();
  });

  // empying the array of transactions/(objects)
  test("transactionsArray is empty", () => {
    expect(transactionsArray .length).toBe(0);
  });
});
