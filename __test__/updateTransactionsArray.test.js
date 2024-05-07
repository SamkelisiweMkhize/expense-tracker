// import transactions, updateTransactionsArray from the controller
const {
  transactionsArray ,
  updateTransactionsArray,
  calcReturnValues,
} = require("../js/controller");

// testing if the function is defined == is it there??
describe("updateTransactionsArray", () => {
  test("test if it defined", () => {
    expect(updateTransactionsArray).toBeDefined();
  });

  // when given all inputs, (type, detail, amount), a new transation should be added
  test("given a type, detail and amount, it should add a transaction", () => {
    const type = "debit";
    const detail = "salary";
    const amount = 10;

    updateTransactionsArray(type, detail, amount);

    expect(transactionsArray .length).toBe(1);

    expect(transactionsArray [0].detail).toMatch(detail);
  });

  // when given a negative amount, an error should appear
  test("given a negative amount, it should throw an error", () => {
    const type = "debit";
    const detail = "salary";
    const amount = -10;

    expect(() => updateTransactionsArray(type, detail, amount)).toThrow();
  });

  // if not give a description, an error should appear
  test("not given a detail, it should throw an error", () => {
    const type = "debit";
    const detail = "";
    const amount = 10;

    expect(() => updateTransactionsArray(type, detail, amount)).toThrow();
  });

  // if given an credit larger than the balance, an error should appear
  test("given an credit bigger than the balance, it should throw an error", () => {
    const type = "credit";
    const detail = "stockvel";
    const amount = 100;

    calcReturnValues();

    expect(() => updateTransactionsArray(type, detail, amount)).toThrow();
  });
});
