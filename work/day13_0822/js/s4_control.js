// Async
// let r4 = document.querySelector("#result4")
// r4.innerHTML = '동기/비동기 방식'

// console.log('==== 동기 방식: 순서대로 일 시키기 ====')
// console.log('1. 라면 장보기')
// console.log('2. 물 끓이기')
// console.log('3. 끓는 물에 라면, 스프 넣기, 익히기')
// console.log('4. 완성')

// console.log('== 비동기 방식: 순서대로 일하되, 지연시간을 다른 방법으로 해결 ==')
// setTimeout(() => {
//    console.log('1. 라면 장보기')
// }, 1000);
// console.log('2. 물 끓이기')
// console.log('3. 끓는 물에 라면, 스프 넣기, 익히기')
// console.log('4. 완성')

// =====================================================
// 라면 장보기
// const ramyen_shopping = new Promise((success, fail) => {
//     setTimeout(() => {
//         console.log('1. 라면 장보기')
//         console.log('2. 라면 물 끓이기')
//         success('====== "1.라면 장보기"를 완료하였습니다. ======')
//         // 1초 후 실행
//     }, 1000);
// }
// )
//     // 라면 장보기를 성공할 경우
//     .then((result) => {
//         console.log(result)
//         console.log('3. 끓는 물에 라면, 스프 넣고, 익히기')
//         console.log('4. 라면 완성 후 시식하기')
//     })
//     // 라면 장보기를 실패할 경우
//     .catch((result) => {
//         console.log(result)
//         console.log('====== 라면 만들기를 중단하였습니다. ======')
//     })

// // 커피 장보기
// const coffee_shopping = new Promise((success, fail) => {
//     setTimeout(() => {
//         console.log('5. 커피 장보기')
//         console.log('6. 커피 물 끓이기')
//         fail('===커피가 품절되었습니다. "5. 커피 장보기를 실패하였습니다."===')
//     }, 2000);
// })

//     .then((result) => {
//         console.log('7. 끓는 물에 커피를 넣고, 젖기')
//         console.log('8. 커피 완성 후 마시기')
//     })
//     .catch((result) => {
//         console.log(result)
//         console.log('!!! 커피 만들기를 중단하였습니다 !!!')
//     })

// // 파스타 장보기
// const pasta_shopping = new Promise((success, fail) => {
//     setTimeout(() => {
//         console.log('====== No result: pending... ======')
//     }, 3000);
// })

// setTimeout(()=>{
//     console.log('라면 장보기: ', ramyen_shopping)
//     console.log('커피 장보기: ', coffee_shopping)
//     console.log('파스타 장보기: ', pasta_shopping)
// }, 4000)

// =================================================================
// // 약속배려함수: async () => {await Promise 객체}
// const ramyen_shopping = () => (new Promise((success, fail) => {
//     setTimeout(() => {
//         console.log('1. 라면 장보기')
//         console.log('2. 라면 물 끓이기')
//         success('========"1.라면 장보기"를 완료하였습니다. ========')
//     }, 1000);
// }))

// const coffee_shopping = () => (new Promise((success, fail) => {
//     setTimeout(() => {
//         console.log('5. 커피 장보기')
//         console.log('6. 커피 물 끓이기')
//         fail('커피가 품절되었습니다.')
//     }, 500)
// }))

// // 비동기 함수 넣기
// const pro_func = async () => {
//     try {
//         const result = await ramyen_shopping()
//         console.log(result)
//         console.log('3. 끓는 물에 라면, 스프 넣고, 익히기')
//         console.log('4. 라면 완성 후 먹기')
//     } catch (result) {
//         console.log(result)
//         console.log('======== 라면 만들기 중단 ========')
//         return
//     }

//     try {
//         const result = await coffee_shopping()
//         console.log('7. 끓는 물에 커피 넣고, 젖기')
//         console.log('8. 커피 완성 후 마시기')
//     } catch (result) {
//         console.log(result)
//         console.log('======== 커피 만들기 중단 ========')
//     }
// }

// // 약속배려함수 안 쓰면(call 안 하면) 동작 안 함
// pro_func()

// ===============================================================
// 1. API URL 설정
const API_URL = "https://jsonplaceholder.typicode.com/users"

// 2. getFetchUsers 함수 정의:  API를 호출, 응답 결과 처리 로직 포함
function getFetchUsers() {
    console.log('Fetching Load Data...')

    // 3. fetch 함수 호출: API_URL로 HTTP 요청 보내고, 응답 받아옴
    fetch(API_URL)

        // 4. Then 메서드 체이닝
        // 응답 객체를 받아 상태 코드 확인
        .then((response) => {
            // 상태 코드가 200~299면 성공, 아니면 오류 발생
            console.log('response.status:', response.status)
            // 오류 발생 시, throw new Error()로 예외 처리
            if (!response.ok) {
                throw new Error(`응답오류! 상태: ${response.status}`)
            }
            // 응답 본문을 JSON 형태로 파싱
            return response.json()
        })

        // 5. 두 번째 .then 메서드
        .then((users) => {
            // 받아온 uesrs 정보 중, 처음 3개만 추출하여 콘솔에 출력
            users.slice(0, 10).forEach((user, index) => {
                // 사용자 이름과 이메일 정보를 함께 출력
                console.log(`${index + 1} ${user.name} (${user.email}/${user.phone})`)
            });
        })
        
        // 6. catch 메서드 
        // 네트워크/처리오류 시 오류 메세지 콘솔에 출력
        .catch((error) => {
            console.log('Error fetching users:', error.message)
        })
}

// call
getFetchUsers()

// ===============================================================
// 
