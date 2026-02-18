const mainCard = document.querySelector('.mainCard')
const thankYouCard = document.querySelector('.thankYouCard')
const ratingButtons = document.querySelectorAll('.mainCard__ratingSection__buttonsContainer__button')
const submitButton = document.querySelector('.mainCard__ratingSection__submitButton')
let rateInfo = document.querySelector('.thankYouCard__indexInfoSection__indexInfoContainer__indexInfo__indexNumber')
let rate = 0

ratingButtons.forEach((button, index) => {
    button.addEventListener('click', function(){

        ratingButtons.forEach(button =>{
            button.classList.remove('mainCard__ratingSection__buttonsContainer__button--selected')
        })

        button.blur()
        button.classList.add('mainCard__ratingSection__buttonsContainer__button--selected')
        submitButton.focus()

        rate = index + 1
    })
})

submitButton.addEventListener('click', function(){
    mainCard.classList.add('hidden')
    thankYouCard.classList.remove('hidden')

    rateInfo.textContent = rate
})
