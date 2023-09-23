// Add JavaScript code here
const navButtons = document.querySelectorAll('.navigation a')
const moreBtn = document.getElementById('more-section-btn')
const containerExtra = document.querySelectorAll('.container-extra')

navButtons.forEach(function (navButton) {
    navButton.addEventListener('click', function () {
        console.log(this)
        navButtons.forEach(function (btn) {
            btn.classList.remove('active-menu')
        })
        this.classList.add('active-menu')
    })
})


moreBtn.addEventListener('click', function () { 
    if (this.innerText === '-5 Less') {
        containerExtra.forEach(function (container) {
            container.classList.remove('active-container')
        })
        this.innerText = '+5 More'
        
    } else {
        this.innerText = '-5 Less'
        containerExtra.forEach(function (container) {
            container.classList.add('active-container')
        })
    }
})