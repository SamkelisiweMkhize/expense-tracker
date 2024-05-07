const {
  transactionsArray ,
  calcReturnValues,
  balance,
  debit,
  credit,
} = require("../js/controller");

// describing objects in arrray before each calculation
describe("calcReturnValues", () => {
  beforeEach(() => {
    const mock_data = [
      { id: 1, type: "debit", detail: "salary", amount: 10, date: "hdhdhd" },
      { id: 2, type: "credit", detail: "rent", amount: 5, date: "hdhdhd" },
    ];

    for (let i = 0; i < mock_data.length; i++) {
      transactionsArray.push(mock_data[i]);
    }
  });

  // clearing transactionsArray  before the next test
  afterEach(() => {
    transactionsArray .length = 0;
  });

  // checking if the function returns an object with specific properties (debit, credit, and balance) and their corresponding values.
  test("called calcReturnValues, debit: 10, credit: 5, balance: 5", () => {
    expect(calcReturnValues()).toMatchObject({ debit: 10, credit: 5, balance: 5 });
  });
});
