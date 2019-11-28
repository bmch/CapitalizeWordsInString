// ### Challenge
// Create A Method To Capitalize The First Letter Of Each Word In A String
// GOOD LUCK!👍

// Refer to Test for Examples

String.prototype.capitalizeWords = function(arg) {
  const sentence = this.toString().split(' ');
  for(let i =0; i < sentence.length; i++) {
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].substring(1).toLowerCase();
  }
  return sentence.join(' ');
};
module.exports = String.prototype.capitalizeWords;
