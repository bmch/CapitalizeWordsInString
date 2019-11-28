// ### Challenge
// Create A Method To Capitalize The First Letter Of Each Word In A String
// GOOD LUCK!👍

// Refer to Test for Examples

String.prototype.capitalizeWords = function() {
  const str = this;
  const lowerCase = str.toLowerCase();
  const array = lowerCase.split(' ');
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  return array.join(' ');
};
module.exports = String.prototype.capitalizeWords;
