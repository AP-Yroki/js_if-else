// let answer = prompt('Напиши число 35');

// let result = (answer == 35) ? 'Молодец!' :
//     (answer <= 35) ? 'Malo': 
//     (answer !==35) ? 'Oups, Neverno!' : 'Oshibka';

// alert(result)

// if (answer==35) {
//     alert('Да ты красава!');
// } else if (answer==42) {
//     alert('42 братуха, 42');
// } else if (answer!=35) {
//     alert('Неверно, надо было 35');

// } 


// task 1
// a = 10

// if (a == 10) {
//     message = 'Верно!'
// }
//     else {
//         message = 'Неверно'
//     };

// alert(message);

// task 2
// let min = prompt('Введите число от 0 до 59: ');

// let message = (min <= 15) ? "Первая четверть часа" : 
//     (min <= 30) ? 'Вторая четверть часа' : 
//     (min <= 35) ? "Третья четверть часа" : 
//     (min > 35 && min <=59) ? 'Четвертая четверть часа' : 'Какая-то ошибка!';

// alert(message);


// task 3

// let lang = prompt('Введите "ru", либо "en":');

// 2 if
// if (lang == 'ru') {
//     arr = ["Понедельник ", "Вторник ", "Среда ", "Четверг ", "Пятница ", "Суббота ", "Воскресенье "]
//     alert(arr)
// }
// if (lang == 'en') {
//     arr = ["Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday ", "Sunday "]
//     alert(arr)
// };
// switch case
// switch (lang) {
//     case 'ru':
//         arr = ["Понедельник ", "Вторник ", "Среда ", "Четверг ", "Пятница ", "Суббота ", "Воскресенье "];
//         alert(arr);
//         break;
//     case 'en':
//         arr = ["Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday ", "Sunday "];
//         alert(arr);
//         break;
//     default:
//         alert('Какая-то ошибка');
// }
// };
// Без if и switch
// let message = (lang == 'ru') ? alert(arr = ["Понедельник ", "Вторник ", "Среда ", "Четверг ", "Пятница ", "Суббота ", "Воскресенье "]):
// (lang == 'en') ? alert(arr = ["Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday ", "Sunday "]) : 'Какая-то ошибка';



// task 4
// let a; // Указать значение перед каждой проверкой

// if (a == 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if (a > 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if (a < 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if (a >= 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if (a <= 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if (a !== 0) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if (a == 'test') {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// if (a == 1) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// task 5

// let a;
// let b;

// if (a > 0 && a < 5) {
//     console.log('Верно')
// } else {
//     console.log('Не верно')
// }

// if (a == 0 || a == 2) {
//     a += 7
//     console.log(a)
// } else {
//     a /= 10
//     console.log(a)
// }

// if ((a <= 1 || b >= 3)) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// task 6

// num = prompt('Введие одно из 4-х значений: 1, 2, 3 или 4');

// switch (num) {
//     case '1':
//         result = 'Зима';
//         alert(result);
//         break;
//     case '2':
//         result = 'Весна';
//         alert(result);
//         break;
//     case '3':
//         result = 'Лето';
//         alert(result);
//         break;

//     case '4':
//         result = 'Осень';
//         alert(result);
//         break;
// };

// task 7
// let day = prompt('Введие число в интервале от 1 до 31');
// let result;
// switch (true) {
//     case day <= 10:
//         result = 'Первая декада';
//         alert(result);
//         break;
//     case day <= 20:
//         result = 'Вторая декада';
//         alert(result);
//         break;
//     case day <=31:
//         result = 'Третья декада';
//         alert(result);
//         break;
// };    

// task 8

// let month = prompt('Введие число в интервале от 1 до 12');
// let result;
// switch (true) {
//     case month <= 3:
//         result = 'Зима';
//         alert(result);
//         break;
//     case month <= 6:
//         result = 'Весна';
//         alert(result);
//         break;
//     case month <=9:
//         result = 'Лето';
//         alert(result);
//         break;
//     case month <=12:
//         result = 'Осень';
//         alert(result);
//         break;
// };    

// task 9

// let str = prompt('Введите что-то');
// let result;

// if (str[0] === 'a') {
//     result = 'Да';
// } else {
//     result = 'Нет';
// }

// alert(result);

// task 10

// let num = prompt('Введите что-то из чисел');
// let result;

// if (num[0] === '2' || num[0] === '1') {
//     result = 'Да';
// } else {
//     result = 'Нет';
// }

// alert(result);

// task 11
// let num = Number(prompt('Введите что-то из чисел'));
// let str = num.toString();
// let digit1 = Number(str[0]);
// let digit2 = Number(str[1]);
// let digit3 = Number(str[2]); 
// let result = digit1 + digit2 + digit3;
// alert(result);

// task 12
let num = Number(prompt('Введите что-то из чисел'));
let str = num.toString();
let digit1 = Number(str[0]);
let digit2 = Number(str[1]);
let digit3 = Number(str[2]); 
let digit4 = Number(str[3]);
let digit5 = Number(str[4]);
let digit6 = Number(str[5]); 
let result1 = digit1 + digit2 + digit3;
let result2 = digit4 + digit5 + digit6;
if (result1 == result2) {
    alert("Да");
} else {
    alert('Нет')
};

