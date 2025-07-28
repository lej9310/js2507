var d = document
let num1 = 3;
let num2 = "3";
let num3 = 4;
// boolen 타입: 2진수(0/1)
var result = false

// ==
result = (num1 == num2)
d.getElementById("result1").innerHTML = `<b> [3=="3"] ${result}</b>`

// ===
result = (num1 === num2)
d.getElementById("result2").innerHTML = `<b> [3==="3"] ${result}</b>`

// !=
result = (num1 != num2)
d.getElementById("result3").innerHTML = `<b> [3!="3"] ${result}</b>`

// !==
result = (num1 !== num2)
d.getElementById("result4").innerHTML = `<b> [3!=="3"] ${result}</b>`

// <
result = (num1 < num3)
d.getElementById("result5").innerHTML = `<b> [3<4] ${result}</b>`

// <=
result = (num1 <= num3)
d.getElementById("result6").innerHTML = `<b> [3<=4] ${result}</b>`

// >
result = (num1 > num3)
d.getElementById("result7").innerHTML = `<b> [3>4] ${result}</b>`

// >=
result = (num1 >= num3)
d.getElementById("result8").innerHTML = `<b> [3>=4] ${result}</b>`
