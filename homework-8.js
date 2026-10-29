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