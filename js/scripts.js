var saySomething = function(something) {
  alert(something);
};

var convert = function(gallons) {
  return gallons * 3.785411784
};

var gallons = prompt("Input number of gallons ");
var number = convert(gallons);
var output = "The number of liters is " + number;

saySomething(output);
