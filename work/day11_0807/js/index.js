const person = {
    firstName: "은정",
    lastName: "이",
    language: "한국어"
}

// 기존 방식: const person2 = new Object() 
const person2_1 = new Object(
    {
        firstName2: "길동",
        lastName2: "홍",
        language2: "영어"
    }
)
// 기존 방식 대신 {} 사용
const person2 = {
    firstName2: "길동",
    lastName2: "홍",
    language2: "영어"
}

// 새로운 객체 만들기 ================================================
// 기존 obj
const person3 = {
    firstName2: "영희",
    lastName2: "김",
    language2: "스페인어"
}

// 새로운 obj
// 대문자로 시작(Object)=>클래스/ 소문자로 시작(.etc)=>속성
const man = Object.create(person3)
man.firstName2 = "철수"
// man이라는 클래스에 etc라는 새로운 속성 추가
man.etc = "etc"

// fromEntries() : 키/값 쌍 배열을 반환================================================
// array
const fruits = [
    ["사과", 300],
    ["배", 900],
    ["바나나", 500]
]
const myObj = Object.fromEntries(fruits)
myObj.etc = "etc"

//  Object.assign(): 하나 이상의 소스 객체에서 대상 객체로 속성을 복사 ================================================
// Create Target Object
const person5 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

const person5_2 = {
    firstName: "Anne",
    lastName: "Smith",
    age: 10
}

// Assign Source to Target 
// *person5가 person5_2 값으로 변경됨을 확인
Object.assign(person5, person5_2)
// *매칭되는 값은 person 값으로 변경되고, 매칭되지 않는 값은 추가됨을 확인
Object.assign(person5, person)


//  Object Constructors ================================================
// 함수 정의하기
function Person4(first, last, age, eye) {
    // 함수 안의 this ==> Person4.firstName
    this.firstName = first
    this.lastName = last
    this.age = age
    this.eyeColor = eye
}
// 함수 밖에 this => 윈도우/document

// 정의한 함수를 이용하여 새로운 변수 정의
const myFather = new Person4("John", "Doe", "50", "blue")

// 클래스: 책 생성 ================================================
// *argument 다르게 작성하면 오류남
function book(t, pub, pr, p) {
    this.title = t
    this.publisher = pub
    this.price = pr
    this.pages = p
} 

// book {title: '리엑트', publisher: '한빛', price: '35000', pages: '300'}
const book1 = new book("리엑트", "한빛", "35000", "300")
const book2 = new book("리엑트2", "한빛", "35000", "300")
const book3 = new book("리엑트3", "한빛", "35000", "300")