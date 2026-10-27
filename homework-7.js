function showTemp(x, y) {
  console.log(`Сейчас в ${x} температура ${y} градусов по Цельсию`)
}

showTemp("Карачаевске",14)


const LIGHT_SPEED = 299792458;

function checkSpeed(speed) {
   
  if(speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость')
  } else if (speed === LIGHT_SPEED) {
    console.log('Cветовая скорость');
  } else  {
    console.log ('Досветовая скорость');
  }
}


checkSpeed(299792460)
checkSpeed(299792000)
checkSpeed(299792458)


let product = "Хлеб"
let price = 30

function checkBudget(budget) {
   
  if(budget > price) {
    console.log(`${product} приобретен. Спасибо за покупку!`)
  } else  {
    let difference = price-budget
    console.log (`Вам не хватает ${difference} р, пополните баланс`);
  }
}

checkBudget(350)
checkBudget(25)



const lessonPrice = 500;

function checkSalary(lesson) {
  let salary = lesson*lessonPrice
  console.log (`Ваша зарплата ${salary} р.`)
}

checkSalary(80)


let name = "Алия";
let age = 41;
let city = "Карачаевск";