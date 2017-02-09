var wrapLog = function (callback, name) {
  return function(){
    var result = callback(arguments[0], arguments[1]);
    console.log(`${name}(${arguments[0]}, ${arguments[1]}) => ${result}`);
  }

};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

logSum(5,3); // sum(5,3) => 8
logSum(3,2); // sum(3,2) => 5