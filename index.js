// Функція, яка обчислює площу квадрату

const userInput = "3"; //prompt("enter side square:");
console.log(userInput);
const leadToNomber = function (value) {
  if (isNaN(number(value)) || value === null || value === "" || value === " ") {
    return NaN;
  }
  return Number(value);
};
/**
 * 
 * @param {number} side 
 * @returns {number | null}
 */
const getPerimetrSquare = function (side) {
  if (isNaN(side) || side<=0) {
    return null;
  }
  return side + side + side + side;
};

console.log(getPerimetrSquare(leadToNomber(userInput)));
