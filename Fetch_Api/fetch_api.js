/* Начинаем работать с сервером. Fetch Api */

/* DOM API (методы) */
// document.getElementById()

/* DOM API (свойства) */
// Element.dataset


/* Первый вариант */
// let url = 'https://jsonplaceholder.typicode.com/posts/',
//     data = {username: 'example'};

// /* Делаем запрос к серверу */
// fetch(url, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     /* Трансформируем данные в json */
//     .then((responce) => responce.json())
//     .then((myJson) => console.log('Success', myJson))
//     /* Обрабатываем ошибки */
//     .catch(error => console.error('Error', error));

// ------------------------------------------------------------------
/* Второй вариант (т.к. function - это синхронный код, а fecth() ассинхронный, будет выведена ошибка. Надо дождаться пока fetch будет выполнен, а потом выполнять функцию, для этого используем async await) */
// const getResouce = async (url) => {
//     const res = await fetch(url),
//           some = await res.json();

//     return some;
// };


// ------------------------------------------------------------------
/* Третий вариант: модификация второго. При появлении ошибки fetch не может её обработать, поэтому это нужно сделать вручную */
getResouce('https://jsonplaceholder.typicode.com/todos/10000')
    .then((res) => console.log('Success', res))
    .catch(error => console.error('Error', error));


    const getResouce = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
              
        const some = await res.json();
    
        return some;
    };
    
    getResouce('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => console.log('Success', res))
        .catch(error => console.error(error));