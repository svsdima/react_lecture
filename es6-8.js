/* Знакомимся с React.js Стандарты ES6-8 */

let a = 0;
console.log(a);

// -------------------------------------------------------------------------
let obj = {
    number: 5,
    sayNumber: function() {
            say = () => {
                console.log(this);
        }
        say();
    }
}

obj.sayNumber();

// -------------------------------------------------------------------------
/* Методы filter, map - методы перебора массивов и возвращают новый сформированнный массив в зависимости от того callback, который мы прописали в них */

/* Фильтр filter() */
let names = ['Дмитрий', 'Анна', 'Эпифантий', 'Григорий', 'Елена'];

let shortNames = names.filter((names) => {
    return names.length < 5;
})

console.log(shortNames);

// -------------------------------------------------------------------------
/* map() - трансформирует каждый элемент массива и формирует новый массив в соответствии с результатом его действий */
let answers = ['ДмИТРий', 'АННА', 'ЕлеНА', 'ГриГОРИЙ'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);

// -------------------------------------------------------------------------
/* Интерполяция - записывать переменные в строке `Строка ${переменная}` */
function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('простые');

// -------------------------------------------------------------------------
/* Rest оператор - группирует в массив аргументы, которые не были переданы как аргументы функции (...rest) */
function max(a, b, ...numbers) {
    console.log(numbers);
}

max(3, 5, 17, 24, 186, 85, 1024, 1890);

// -------------------------------------------------------------------------
/* Spread оператор  - разворачивает массив на список каких-то элементов (...arr1, ...arr2) */
const arr1 = [1, 2, 350];
      arr2 = [17, 21, 189];

const res = Math.max(...arr1, ...arr2);
console.log(res);

// -------------------------------------------------------------------------
/* Object Spread оператор - несколько объектов объединяем в один, при этом параметры одного объекта перезаписали у другого  */
const avatar = 'Photo';

const user = {
    name: 'default',
    pass: 'qwerty',
    rigths: 'user'
};

const admin = {
    name: 'admin',
    pass: 'root'
}

const ress = Object.assign(user, admin, avatar);
const ress2 = {...user, ...admin, avatar};

console.log(ress);
console.log(ress2);

// -------------------------------------------------------------------------
const x = 25, y = 10;

/* Неоптимизированный код */
const coords1 = {
    x: x,
    y: y,
    calcSq: function() {
        console.log(this.x * this.y);
    }
}

/* Оптимизированный код */
const coords = {
    x,
    y,
    calcSq() {
        console.log(this.x * this.y);
    }
}

coords.calcSq();

console.log(coords);

// -------------------------------------------------------------------------
/* Деструктуризация - применяется как к объектам, так и к массивам ( это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части) */

const userS = {
    name: {
        first: 'Дмитрий',
        second: 'Сафронов'
    },
    pass: 'qwerty',
    rigths: 'Пользователь'
};

const {name: {first, second}, pass, rigths} = userS;

console.log(first, second, rigths);

// -------------------------------------------------------------------------
/* Деструктуризация и параметры по умолчанию */
function connect({
    host = 'localhost',
    port = 3000,
    user = 'default'
} = {}) {
    console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect({
    port: 232
});

// -------------------------------------------------------------------------
/* Деструктуризация для массивов данных */
const numbers = [3, 5, 6, 17];

const [, , c] = numbers;

console.log(c);
// -----------------------------------
const numbersS = [[3, 5], [6, 17]];

const [[e, g], [r, k]] = numbersS;

console.log(e, g, r, k);

// -------------------------------------------------------------------------
/* Деструктуризация для массивов данных на реальном примере */
const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleUnder18, femaleUnder18);