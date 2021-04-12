// Take $4.99 check if it is divisible by 0.25
// 4.99 % 0.25
// remainder is 0.24
// recursiveCounter(remainder);

import recursiveCounter from './../src/recursiveCounter';

describe('recursiveCounter', () => {

});

test('$0.25 should return 1 quarter', () => {
  const money = .25;
  expect(recursiveCounter(money, '')).toEqual('1 quarters ')
});
test('$0.10 should return 1 dimes', () => {
  const money = .10;
  expect(recursiveCounter(money, '')).toEqual('1 dimes ')
});
test('$0.05 should return 1 nickel', () => {
  const money = .05;
  expect(recursiveCounter(money, '')).toEqual('1 nickels ')
});
test('$0.01 should return 1 pennies', () => {
  const money = .01;
  expect(recursiveCounter(money, '')).toEqual('1 pennies')
});
test('$4.96 should return 19 quarters 1 dimes 1 nickels 1 pennies', () => {
  const money = 4.91;
  expect(recursiveCounter(money, '')).toEqual('19 quarters 1 dimes 1 nickels 1 pennies')
});




// test('Should create marsCalc method to calculate earthYears to marsYears (this.earthYears / (365 * 1.88))', () => {
//   currentUser.marsCalc();
//   expect(currentUser.marsYears).toEqual(0.53)
//   expect(currentUser.activePlanet).toEqual("Mars")
// });
