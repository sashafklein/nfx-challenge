export const toMoney = (num, nullCase = 'None') => num
  ? `$${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
  : nullCase;