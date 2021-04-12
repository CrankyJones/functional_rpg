import closureCounter from './../src/closureCounter';

describe('closureCounter', () => {

});

test('$0.25 should return 1 quarters', () => {
  const money = .25;
  var closure = closureCounter(money, "");
  expect(closure).toEqual('1 quarters ')
});
test('$0.10 should return 1 dimes', () => {
  const money = .10;
  var closure = closureCounter(money, "");
  expect(closure).toEqual('1 dimes ')
});
test('$0.05 should return 1 nickels', () => {
  const money = .05;
  var closure = closureCounter(money, "");
  expect(closure).toEqual('1 nickels ')
});
test('$0.01 should return 1 pennies', () => {
  const money = .01;
  var closure = closureCounter(money, "");
  expect(closure).toEqual('1 pennies')
});
test('$4.96 should return 19 quarters 1 dimes 1 nickels 1 pennies', () => {
  const money = 4.91;
  var closure = closureCounter(money, "");
  expect(closure).toEqual('19 quarters 1 dimes 1 nickels 1 pennies')
});
