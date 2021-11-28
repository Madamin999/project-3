let openMoodal = document.querySelector ('.open-modal')
let closeMoodal = document.querySelector ('.cloce-modal')
let modal = document.querySelector('.modal')

openMoodal.addEventListener("click", function () {
    document.querySelector('.modal').style.display="flex"

})

closeMoodal.addEventListener("click", function () {
    document.querySelector('.modal').style.display="none"

})

window.onclick = (event) => {
    if (event.target === modal) {
        document.querySelector('.modal').style.display = ' none'
    }
}