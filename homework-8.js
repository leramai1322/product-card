// 3 задание (создание объекта с персональными данными)

const person = {
  name: "Алия",
  surname: "Шах",
  address: "463266, Ульяновск, Рябикова",
  age: 35,
  city: "Ульяновск",
  country: "РФ",
  status: "замужем"
}

console.log(person)

// 4 задание (создание объекта с данными автомобиля)

const auto = {
  brand: "Toyota",
  model: "Camry",
  year: "2015",
  color: "silver",
  type: "аатоматическая коробка передач"
  
}

auto.owner = `${person.name} ${person.surname}`

console.log(auto)

// 5 задание (создание функции добавления макс.скорости авто)

function checkAuto (auto) {
  
  if (!("maxSpeed" in auto)) {
    auto.maxSpeed = "210 км/ч";
  }
}

checkAuto(auto)

console.log(auto)

// 6 задание (создание функции)

function showObject (object, property) {
  
  console.log(object[property]);
}

showObject(auto, "brand");


// 7 задание (создание массива)

const array = ["Хлеб", "соль", "чай", "сахар", "печенье"]

console.log(array)

// 8 задание (создание массива объектов)

const book1 = {
  title: "Тайна старой библиотеки",
  author: "Амина Сафарова",
  year: 2021,
  color: "бирюзовый",
  genre: "детектив",
};

const book2 = {
  title: "За горизонтом",
  author: "Мария Белова",
  year: 2023,
  color: "синий",
  genre: "приключения",
};

const book3 = {
  title: "Формула успеха",
  author: "Анна Миронова",
  year: 2020,
  color: "зеленый",
  genre: "саморазвитие",
};

const arrayBook = [book1, book2, book3]

arrayBook.push ({
  title: "Секреты лунного сада",
  author: "Лейла Ахметова",
  year: 1998,
  color: "фиолетовый",
  genre: "фентези",
});

console.log(arrayBook)

// 9 задание (объединение массивов)

const book4 = {
  title: "Шёпот лунных деревьев",
  author: "Лейла Ахметова",
  year: 1999,
  color: "фиолетовый",
  genre: "фэнтези",
  series: "Тайны лунного сада"
};

const book5 = {
  title: "Ключ от серебряных ворот",
  author: "Лейла Ахметова",
  year: 2001,
  color: "бирюзовый",
  genre: "фэнтези",
  series: "Тайны лунного сада"
};

const book6 = {
  title: "Последняя тайна сада",
  author: "Лейла Ахметова",
  year: 2002,
  color: "темно-синий",
  genre: "фэнтези",
  series: "Тайны лунного сада"
};

const arrayBook2 = [book4, book5, book6]

const arrayBooks = [...arrayBook, ...arrayBook2]

console.log(arrayBooks)

// 10 задание (метод массива map)

function checkRare (books) {
  return books.map((book) => {
    if (book.year<2000) {
      book.isRare = true
    } else {
      book.isRare = false
    }
    return book;
  });
}

console.log(checkRare(arrayBooks))

// 12
const user = {
  name: 'Aruzhan',
  age: 17
};


if (user.age>=18) {
  console.log ("Доступ разрешен");
  } else {
  console.log ("Доступ запрещен");
}

//13

const book = {
  title: 'Тафсир 1 том',
  author: "Шейх Ас-Саади",
  pages: 1100
};

console.log (book.title)
console.log (book.author)
console.log (book.pages)

//14

const car = {
  brand: 'Toyota',
  year: 2020
};

car.color = "white"
car.year = 2022

console.log (car)

//15


const food = {
  name: "pizza"
}

const food1 = {
  name: "mango"
}

const food2 = {
  name: "meet"
}

const favoriteFoods = [food , food1, food2]

console.log (favoriteFoods)

const favoriteFoods1 = ["pizza" , "mango", "meat"]

console.log (favoriteFoods1)

//16

const numbers = [10, 20, 30, 40]

console.log (numbers)

//17

const fruits = ['apple', 'banana', 'orange']

console.log (fruits [0])

//18

console.log (fruits [1])

//19
console.log (fruits [2])

//22

const animals = ['cat', 'dog', 'rabbit'];

animals[1] = 'fox'

console.log (animals)

//23

const animals1 = ['cat', 'dog', 'rabbit']

animals1.push('horse')

console.log (animals1)
//24
animals1.pop()

console.log (animals1)

//25
animals1.unshift('lion')
console.log (animals1)

//26
animals1.shift()
console.log (animals1)

//27

const use1r = {
  name: "Алия",
  age: 25
}

const use2r = {
  name: "Соня",
  age: 26
}

const use3r = {
  name: "Лиля",
  age: 24
}

const users = [use1r , use2r, use3r]

console.log (users)

//28

console.log (users [0].name)

//29

console.log (users [1].age)

//30

const products = [
  { name: 'Phone', price: 300000 },
  { name: 'Laptop', price: 500000 },
  { name: 'Tablet', price: 200000 }
];

console.log (products[2].name)

//31

console.log (products[1].price)

//32

products[0].price=250000

console.log (products[0].price)

//33

const fruits1 = ['apple', 'banana', 'orange'];

fruits1.forEach (function(fruit) {
  console.log(fruit);
})

//34
const numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach (function (number) {
  console.log(number);
})

//35

const names = ['Amina', 'Dana', 'Aruzhan']

names.forEach (function (name) {
  console.log(`Ассаляму аляйкум, ${name}`)
})

//36

const numbers3 = [2, 4, 6];

numbers3.forEach (function (number) {
  console.log(number*2)
})