// покраска одной карточки

const productCard = document.querySelector('.card__container');
const changeCardColorButton = document.querySelector('#change-card-color-button');
const greenColorHash = '#00FF00'

changeCardColorButton.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColorHash;
})

// покраска всех карточек

const productCards = document.querySelectorAll('.card__container');
const changeCardsColorButton = document.querySelector('#change-cards-color-button');
const blueColorHash = '#0000FF'

changeCardsColorButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = blueColorHash)
})


// открыть гугл

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const ansver = confirm('Перейти на страницу Google?');

  if (ansver === true) {
    window.open('https://google.com')
  } else {
    return
  }
}

// вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log')

outputLogButton.addEventListener('click',() => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// наведение на заголовок и вывод на консоль

const catalogTitle =document.querySelector('h1');

catalogTitle.addEventListener('mouseover', function () {
  console.log(catalogTitle.textContent);
});

// покраска кнопки

const buttonColor = document.querySelector('#colored-button')

buttonColor.addEventListener('click', function () {
  buttonColor.classList.toggle('green');
});