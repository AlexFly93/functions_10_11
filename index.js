//  1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число). Значення для перевірки функції вводить користувач.

const number = prompt("chek your number");
/**
 *
 * @param {number} value
 * @returns {number}
 */
const leadToNomber = function (value) {
  if (isNaN(Number(value)) || value === null || value === "" || value === " ") {
    return NaN;
  }
  return Number(value);
};

/**
 *
 * @param {number} value
 * @returns {string}
 */
const isOddOrEven = function (value) {
  if (value % 2 === 0) {
    return "even";
  }
  return "odd";
};
console.log(isOddOrEven(leadToNomber(number)));

// 2)написати функцію, яка приймає два аргументи і, якщо аргументи одного типу, то повертає той, який має більше значення (якщо значення рівні - повертаємо null), інакше(якщо різного типу) теж повертає null.

const arg1 = 44;
const arg2 = 44;
const comparaty = (arg1, arg2);
const getMaxCompare = function (comparaty) {
  if (arg1 === arg2) {
    return null;
  }
  if (typeof arg1 === typeof arg2) {
    if (arg1 < arg2) {
      return arg2;
    }
    return arg1;
  }
  return null;
};
console.log(getMaxCompare(comparaty));
