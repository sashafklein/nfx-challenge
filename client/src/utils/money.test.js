import { toMoney } from './money';

describe('toMoney', () => {
  it('splits numbers appropriately', () => {
    expect(toMoney(1000)).toEqual('$1,000');
    expect(toMoney(10000)).toEqual('$10,000');
    expect(toMoney(1000000)).toEqual('$1,000,000');
  });

  it('handles null case', () => {
    expect(toMoney(null)).toEqual('None');
    expect(toMoney(null, '$0')).toEqual('$0');
  })
});
