// ex1. If문 ===========================================
// new: 생성자 함수를 호출하여 새 객체를 만들고 초기화 하는 객체 생성 연산자
let myDate = new Date()
let myHour = myDate.getHours()
console.log(myDate)
console.log(myHour)

if (myHour < 18) {
    document.getElementById("ex1").innerHTML = "Good day!"
}


// ex2. If ~ else ===========================================
let greeting

if (myHour < 18) {
    greeting = "열공"
} else {
    greeting = "굿밤"
}
document.getElementById("ex2").innerHTML = greeting


// ex3. If ~ else ===========================================
const myTime = new Date().getHours()
console.log(myTime)

if (myTime < 9) {
    greeting = "수업 시작"
} else if (myTime < 18) {
    greeting = "수업중"
} else {
    greeting = "귀가"
}

document.getElementById("ex3").innerHTML = greeting

// ex4. If ~ else ===========================================
let Mytext
let Mr = Math.random().toFixed(2) // 랜덤값 생성

console.log(Mr)

if (Mr < 0.5) {
    Mytext = "<a href='https://w3schools.com'>Visit W3Schools</a>"
} else {
    Mytext = "<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>Visit MDN JavaScript</a>"
}
document.getElementById("ex4").innerHTML = `<p style="color:red;">결과: ${Mytext}</p>`


// ex5. If ~ else ===========================================
const myTime1 = new Date().getHours()
let Myimg
let ImgAlt

if (myTime1 < 9) {
    Myimg = "../morning.png", ImgAlt = "아침"
} else if (myTime1 < 18) {
    Myimg = "../class.png", ImgAlt = "수업중"
} else {
    Myimg = "../night.png", ImgAlt = "저녁"
}

console.log(myTime1)
console.log(ImgAlt)

document.getElementById("ex3").innerHTML = `<img src="${Myimg}" alt="${ImgAlt}" width="200px">`