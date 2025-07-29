// 교재 오류: let userNumber = parseInt(prompt("숫자를 입력하세요."))
// 취소 눌러서 prompt의 값이 null이어도 => parseInt(null) = NaN이 되어버림 =>
// 결과가 NaN이니까 (userNumber !== null) 조건이 참(True)으로 평가 =>
// else 블록은 실행 안 됨.

let userNumber = prompt("숫자를 입력하세요.")

if (userNumber !== null)
    // 삼항연산자
    parseInt(userNumber % 3) === 0 ? alert("3의 배수") : alert("3의 배수 아님")
    else
        alert("입력이 취소되었습니다.")