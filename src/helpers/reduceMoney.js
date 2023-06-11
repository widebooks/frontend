const reduceMoney = money => {
  if (money > 1000000000) {
    return `${combinePrice(money, 100000000)} млрд ₽`;
  }
  if (money > 1000000) {
    return `${combinePrice(money, 1000000)} млн ₽`;
  }
  if (money > 1000) {
    return `${combinePrice(money, 1000)} тыс ₽`;
  }
  if (money < 1000) {
    return `${money} ₽`;
  }
};

const combinePrice = (money, num) => {
  let currentCount = 0;
  currentCount = money / num;
  return (currentCount % 10) - Math.trunc(currentCount % 10) >= 0.1
    ? currentCount.toFixed(1)
    : currentCount.toFixed(0);
};

export default reduceMoney;
