// 3 Задача 10 Главы
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

let number = +prompt('Введите число?', '');

if(number > 0) {
    alert('1');
} else if (number < 0){
    alert('-1');
} else {
    alert('0');
}