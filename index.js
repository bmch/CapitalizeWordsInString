// ### Challenge
// Create A Method To Capitalize The First Letter Of Each Word In A String
// GOOD LUCK!👍

// Refer to Test for Examples

String.prototype.capitalizeWords = function() {
  const arr = this.toLowerCase().split('');
  arr[0] = arr[0].toUpperCase();
  for (let i = 1; i < this.length; i++) {
    if (arr[i-1] === ' ') arr[i] = arr[i].toUpperCase();
  }
  return arr.join('');
};

module.exports = String.prototype.capitalizeWords;
