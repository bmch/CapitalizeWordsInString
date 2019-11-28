// ### Challenge
// Create A Method To Capitalize The First Letter Of Each Word In A String
// GOOD LUCK!👍

// Refer to Test for Examples

String.prototype.capitalizeWords = function() {
  //...
  const arr = this.split(' ');
  for(let i=0;i<arr.length;i++){
    arr[i] = arr[i][0].toUpperCase()+ arr[i].slice(1).toLowerCase();
  }
  const ret = arr.join(' ');
  return ret;
};
module.exports = String.prototype.capitalizeWords;
