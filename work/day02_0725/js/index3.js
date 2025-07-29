var d = document
let num1 = 3;
let num2 = 5;
let num6 = 10; let num7 = 10; let num8 = 10; let num9 = 10;

// 덧셈
result = num1 + num2
d.getElementById("result1").innerHTML = `<b> [덧셈] ${result}</b>`

// 뺄셈
result = num1 - num2
d.getElementById("result2").innerHTML = `<b> [뺄셈] ${result}</b>`

// 곱셈
result = num1 * num2
d.getElementById("result3").innerHTML = `<b> [곱셈] ${result}</b>`

// 나눗셈
result = (num1 / num2).toFixed(2)
d.getElementById("result4").innerHTML = `<b> [나눗셈] ${result}</b>`

// 나머지
result = num2 % num1
d.getElementById("result5").innerHTML = `<b> [나머지] ${result}</b>`

// ++선행
result = ++num6
d.getElementById("result6").innerHTML = `<b> [++선행] 결과: ${result}, 변수: ${num6}</b>`

// --선행
result = --num7
d.getElementById("result7").innerHTML = `<b> [--선행] 결과: ${result}, 변수: ${num7} </b>`

// 후행++
result = num8++
d.getElementById("result8").innerHTML = `<b> [후행++] 결과: ${result}, 변수: ${num8} </b>`

// 후행--
result = num9--
d.getElementById("result9").innerHTML = `<b> [후행--] 결과: ${result}, 변수: ${num9} </b>`
