// ### Challenge
// Create A Method To Capitalize The First Letter Of Each Word In A String
// GOOD LUCK!👍

// Refer to Test for Examples

String.prototype.capitalizeWords = function() {
  let arra = this.split(' ');
  let capi = [];
  arra.forEach(x => {
    let begin = String(x).slice(0,1);
    begin = begin.toUpperCase();
    const string = begin + x.slice(1,);
    console.log(string);
    capi.push(string);
  })
  return capi.join(' ');
};
module.exports = String.prototype.capitalizeWords;
