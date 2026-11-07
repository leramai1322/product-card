//2. Создать массив чисел от 1 до 10. Отфильтровать его 
// таким образом, чтобы получить массив чисел, 
// начинающийся с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newArray = numbers.filter(number => number >=5);

console.log(newArray)

// 3 Создать массив строк, относящихся к любой сущности
//  (названия фильмов/книг, кухонные приборы, мебель и т. д.), 
// и проверить, есть ли в массиве какая-то определенная сущность.

const books = ['Коран', 'Тафсир', 'Байна ядейк', 'Словарь'];

const result = books.includes ('Словарь');

console.log(result);

// 4  Написать функцию, которая будет принимать массив 
// в качестве аргумента и менять его порядок на 
// противоположный («переворачивать») . 
// С помощью этой функции перевернуть два указанных 
// выше массива.

function reverseArrays(array) {
  array.reverse ();
  }

reverseArrays(numbers);
reverseArrays(books);

console.log (numbers);
console.log (books);

// 7  Вывести в консоль массив тех комментариев, 
// почта пользователей которых содержит ".com"


import { comments } from './comments.js';

const newArray2 = comments.filter (comment=> comment.email.includes('.com'))

console.log(newArray2)

// 8 Перебрать массив таким образом, чтобы пользователи 
// с id меньше или равным 5 имели postId: 2, а те, 
// у кого id больше 5, имели postId: 1

const newArray3 = comments.map (comment => {
  const postId = comment.id <=5 ? 2 : 1
  return {...comment, postId}
})

console.log(newArray3)

// 9 Перебрать массив, что
//  бы объекты состояли только из айди и именим

const newArray4 = comments.map (comment=> {
  return {name:comment.name, id:comment.id}
})

console.log(newArray4)

// 10 Перебираем массив, добавляем объектам свойство 
// isInvalid и проверяем: если длина тела сообщения 
// (body) больше 180 символов - устанавливаем true, 
// меньше - false.

const newArray5 = comments.map (comment => {
  const isInvalid = comment.body.length > 180 ? true : false
  return {...comment, isInvalid}
})

console.log(newArray5)

//11. Почитать про метод массива reduce. Используя его,
//  вывести массив почт и проделать то же самое с помощью
//  метода map

const newArray6 = comments.map (comment=> {
  return comment.email
})

console.log(newArray6)

const newArray7 = comments.reduce ((acc, comment) => {
  acc.push (comment.email);
  return acc;
} , []);

console.log(newArray7)

//12.  Почитать про методы toString(), join() и, перебрав 
// массив из задания №11, привести его к строке.

console.log(newArray6.toString ())


console.log(newArray6.join ('; '))