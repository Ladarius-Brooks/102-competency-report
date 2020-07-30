var num1=prompt("Input firtst number");
var num2=prompt("Input second number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

var message = "<h1>The Solutions Are</h1>";

message += num1 + "+" + num2 + "=" + (num1 + num2);
console.log(num1 + num2);
message += "<br>";
message += num1 + "-" + num2 + "=" + (num1 - num2);
console.log(num1 - num2);
message += "<br>";
message += num1 + "*" + num2 + "=" + (num1 * num2);
console.log(num1 * num2);
message += "<br>";
message += num1 + "/" + num2 + "=" + (num1 / num2);
console.log(num1 / num2);