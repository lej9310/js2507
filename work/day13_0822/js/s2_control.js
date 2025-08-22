let r3 = document.querySelector("#result3")
let r3_2 = document.querySelector("#result3_2")

// var walkAmount = prompt('당신의 하루 걷는 양은 몇 보인가요?', "0")
let walkAmount = 10000

if (walkAmount >= 10000) {
    r3.innerHTML = '매우 좋은 습관을 지니고 계시는군요~'
} else {
    r3.innerHTML = '운동 좀 하세요~'
}

// 삼항연산자
let flag = true
walkAmount >= 10000 ? flag = true : flag = false

// ===========================================================
// if~else문은 위에서 부터 순차적으로 내려오면서, 비교
let walkAmount2 = 8000

if (walkAmount2 >= 10000) {
    r3_2.innerHTML = "하루에 만보 이상 걸으시는군요~ 훌륭합니다!"
} else if (walkAmount2 >= 8000 && walkAmount2 < 10000) {
    r3_2.innerHTML = "8000 이상인 당신, 하루 만보 걷기 습관을 추천!"
} else if (walkAmount2 >= 3000 && walkAmount2 < 8000) {
    r3_2.innerHTML = "3000 이상인 당신, 하루 만보 걷기 습관을 추천!"
} else if (walkAmount2 >= 1000 && walkAmount2 < 3000) {
    r3_2.innerHTML = "1000 이상인 당신, 하루 만보 걷기 습관을 추천!"
} else {
    r3_2.innerHTML = "건강이 걱정됩니다ㅠㅠ 건는 습관을 추천!"
}

// ===========================================================
// switch문은 조건에 맞는 case로 바로 분기한다.
let r3_3 = document.querySelector("#result3_3")
r3_3.innerHTML = 'test'
let site = "네이트"

switch (site) {
    case "구글":
        url = "www.google.com"
        r3_3.innerHTML = url
        break
    case "다음":
        url = "www.daum.com"
        r3_3.innerHTML = url
        break
    case "네이버":
        url = "www.naver.com"
        r3_3.innerHTML = url
        break
    case "네이트":
        url = "www.nate.com"
        r3_3.innerHTML = url
        break
    default:
        alert('보기 중에 없는 사이트 입니다.')
        break
}

// ===========================================================
let r3_4 = document.querySelector("#result3_4")
r3_4.innerHTML = 'test'

let i = 1
let sum = 0
while (i <= 10) {
    // 현재 i값 확인
    console.log(i)
    i++
    // console.log(i)

    sum += i
    console.log(sum)
}

r3_4.innerHTML = `< 1부터 10까지 더하기 ><br>
i = ${i},<br> sum = ${sum}`

// ===========================================================
let r3_5 = document.querySelector('#result3_5')

var x = 1
do {
    r3_5.innerHTML = 'Hello, '
} while (x < 10) {
    r3_5.innerHTML += 'world~!'
}


