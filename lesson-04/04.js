/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, 
где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

const str = ["a", "p", "p", "l", "e"];

function doubleEachCharacter(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
    result = result + str[i] + str[i];
    }
    return result;
}

console.log(doubleEachCharacter(str)); 