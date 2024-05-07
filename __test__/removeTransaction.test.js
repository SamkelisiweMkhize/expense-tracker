const { transactionsArray ,  removeTransaction } = require("../js/controller");

// describing objects in arrray before each calculation
describe(" removeTransaction", () => {
  beforeEach(() => {
    const mock_data = [
      { id: 1, type: "debit", detail: "salary", amount: 10, date: "hdhdhd" },
      { id: 2, type: "credit", detail: "rent", amount: 5, date: "hdhdhd" },
    ];

    for (let i = 0; i < mock_data.length; i++) {
      transactionsArray .push(mock_data[i]);
    }
  });

  // clearing transactionsArray before the next test
  afterEach(() => {
    transactionsArray .length = 0;
  });

  // 1 element in the array should be deleted if given a numeric index value
  test("given an numeric index, it should remove an element from the transactionsArray array", () => {
    const index = 0;

    removeTransaction(index);

    expect(transactionsArray .length).toBe(1);
  });

  // if given a non-numeric index value, an error should appear
  test("given a non numeric index, it should throw an error", () => {
    const index = true;

    expect(() =>  removeTransaction(index)).toThrow();
  });
});
