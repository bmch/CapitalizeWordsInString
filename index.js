// ### Challenge
// Create A Method To Capitalize The First Letter Of Each Word In A String
// GOOD LUCK!👍

// Refer to Test for Examples

String.prototype.capitalizeWords = function() {
  console.log(this);

  let cap = [];
  this.toLowerCase().split(' ').forEach(word => {
    cap.push(word.charAt(0).toUpperCase() + word.slice(1))
  });
  return cap.join(' ');
};
module.exports = String.prototype.capitalizeWords;
