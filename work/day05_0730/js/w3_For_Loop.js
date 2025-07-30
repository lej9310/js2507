// 선생님 퀴즈 ==============================================
// index[0, 1, 2, 3, 4, 5]
const cars0 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi", "BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
let text0 = ""
for (let i0 = 0; i0 < cars0.length; i0++) { //0-11
    text0 += cars0[i0] + "<br>"
    console.log(i0)
    console.log(cars0[i0])
}
document.getElementById("demo0").innerHTML = text0


// 반대로 ==============================================
let text00 = ""
const cars00 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
for (let i00 = cars00.length - 1; i00 >= 0; i00--) { // 5-0
    text00 += cars00[i00] + "<br>"
}
document.getElementById("demo00").innerHTML = `<h2 style="color: blue;">[reverse]</h2> ${text00}`


// w3_JS Loop For (1) ==============================================
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]
let text1 = ""

// for (초기화; 조건식; 증감식)
for (let i = 0; i < cars.length; i++) {
    text1 += cars[i] + "<br>"
}
document.getElementById("demo1").innerHTML = text1


// w3_JS Loop For (2) ==============================================
let text2 = ""

for (let i = 0; i < 5; i++) {
    text2 += "The number is " + i + "<br>"
}

document.getElementById("demo2").innerHTML = text2


// w3_JS Loop For (3) ==============================================
const cars3 = ["BMW", "Volvo", "Saab", "Ford"]
let i3 = 2
let len = cars3.length
let text3 = ""

for (; i3 < len; i3++) { // 2-3
    text3 += cars3[i3] + "<br>" //"Saab", "Ford"
}

document.getElementById("demo3").innerHTML = text3


// w3_JS Loop For (4) ==============================================
const cars4 = ["BMW", "Volvo", "Saab", "Ford"]
let i4, len4, text4;

for (i4 = 0, len4 = cars4.length, text4 = ""; i4 < len4; i4++) { // 0-3
    text4 += cars4[i4] + "<br>"
}

document.getElementById("demo4").innerHTML = text4


// w3_JS Loop For (5) ==============================================
const cars5 = ["BMW", "Volvo", "Saab", "Ford"]

let i5 = 0
let len5 = cars5.length
let text5 = ""

for (; i5 < len5;) { // 0-3
    text5 += cars5[i5] + "<br>"
    i5++
}

document.getElementById("demo5").innerHTML = text5


// w3_JS Loop For (6) ==============================================
var i6 = 5
let sum = 0

for (i6; i6 < 10; i6++) { // 5-9
    sum += i6
}
document.getElementById("demo6").innerHTML = `<p style="color:white;"> 5부터 9까지 더한 값은 ${sum}이다.</p>`