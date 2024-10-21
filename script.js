// Генерирует случайный index переданного массива
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

// Получаю коллекцию значений (NodeList, которую возвращает метод .querySelectorAll())
// по классу .item (15 div элементов)
const items = document.querySelectorAll('.item')
// Преобразовываю эту коллекцию в массив
const itemsArray = Array.from(items)

// Счётчик количества промахов из DOM
const missCounter = document.getElementById('miss-counter')

// Создаю элемент img (зомби-картинку в DOM нет)
const zombieImg = document.createElement('img')
zombieImg.src = "assets/images/img/zombie.png"