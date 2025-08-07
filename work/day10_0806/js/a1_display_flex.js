const sld = document.querySelectorAll(".image_slide .slide")
let i = 0
const sldCount = sld.length

function showSlide() {
    // 모든 이미지 숨기기
    sld.forEach((slide, index) => {
        slide.style.opacity = "0"
        slide.classList.remove("active")
    })
    // 현재 이미지 보이기
    sld[i].style.opacity = "1"
    sld[i].classList.add("active")
    // 다음 인덱스로
    i = (i + 1) % sldCount
}

// 초기 상행 보이도록 한 번 실행
showSlide()

// 3초마다 슬라이드 전환
setInterval(showSlide, 3000)