document.querySelectorAll(".main_menu > li").forEach(li => {
    const subM = li.querySelector(".sub_menu")
    if (!subM) return

    li.addEventListener("mouseover", () => {
        subM.classList.add("show")
    })

    li.addEventListener("mouseout", () => {
        subM.classList.remove("show")
    })
})


// ==============================================
// const mn = document.querySelectorAll(".main_menu > li")

// mn.forEach(function (li) {
//     li.addEventListener("mouseover", function () {
//         li.classList.add("hovered")
//     })
//     li.addEventListener("mouseout", function () {
//         li.classList.remove("hovered")
//     })
// })


