// 선언부
let num1, num2, result
num1 = 5; num2 = 10; result = 0

let num0 = 10
let num00 = 10

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

// num0가 먼저 +1 증가하고(=11), result값 할당(=11)
result = ++num0
console.log(`[++선행 결과값] ${result} [변수값] ${num0}`)
document.getElementById("r1").innerHTML = `<h2>[++선행 결과값] ${result} [변수값] ${num0}<h2>`

// result에 num0값을 할당하고(=10), 후에 num0가 +1 증가(=11) 
num0 = 10
result = num0++
console.log(`[후행++ 결과값] ${result} [변수값] ${num0}`)
document.getElementById("r2").innerHTML = `<h2>[후행++ 결과값] ${result} [변수값] ${num0}<h2>`

// num00가 먼저 -1 감소하고(=9), result값 할당(=9)
result = --num00
console.log(`[--선행 결과값] ${result} [변수값] ${num00}`)
document.getElementById("r3").innerHTML = `<h2>[--선행 결과값] ${result} [변수값] ${num00}<h2>`

// result에 num00값 할당하고(10), 후에 num00가 -1 감소(=9)
num00 = 10
result = num00--
console.log(`[후행-- 결과값] ${result} [변수값] ${num00}`)
document.getElementById("r4").innerHTML = `<h2>[후행-- 결과값] ${result} [변수값] ${num00}<h2>`

// 출력부