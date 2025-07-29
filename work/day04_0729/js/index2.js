// 선언부
let num1, num2, result
let num0 = 10
num1 = 5; num2 = 10; result = 0

// 구현부
result = num1 + num2
console.log(result)

result = num2 - num1
console.log(result)

result = num2 * num1
console.log(result)

result = num2 / num1
console.log(result)

result = num2 % num1
console.log(result)

result = ++num0
console.log(`[++선행 결과값] ${result} [변수값] ${num0}`)
document.getElementById("r1").innerHTML = `<h2>[++선행 결과값] ${result} [변수값] ${num0}<h2>`

result = num0++
console.log(`[후행++ 결과값] ${result} [변수값] ${num0}`)
document.getElementById("r2").innerHTML = `<h2>[후행++ 결과값] ${result} [변수값] ${num0}<h2>`

result = --num0
console.log(`[--선행 결과값] ${result} [변수값] ${num0}`)
document.getElementById("r3").innerHTML = `<h2>[--선행 결과값] ${result} [변수값] ${num0}<h2>`

result = num0--
console.log(`[후행-- 결과값] ${result} [변수값] ${num0}`)
document.getElementById("r4").innerHTML = `<h2>[후행-- 결과값] ${result} [변수값] ${num0}<h2>`

// 출력부