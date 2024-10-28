
// Флаг для отслеживания состояния игры (игра запущена(true) или нет(false))
let isGameStarted = false
// Флаг указывающий было попадание в зомби(true) или не было попадания(false)
let zombieHit = true


// Генерирует случайный index переданного массива
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

// Получаю коллекцию значений (NodeList, которую возвращает метод .querySelectorAll())
// по классу .item (15 div элементов)
const items = document.querySelectorAll('.item')
// Преобразовываю эту коллекцию в массив
const itemsArray = Array.from(items)

// Получаю из DOM 2 кнопки: кнопку фонового звука и кнопку старта
const soundBtn = document.getElementById('sound-btn')
const startBtn = document.getElementById('start-btn')

// Получаю из DOM счётчик количества промахов
const missCounter = document.getElementById('miss-counter')
// Получаю из DOM счётчик количества попаданий в цель(зомби)
const hitCounter = document.getElementById('hit-counter')

// Получаю из DOM 2 mp3 файла
const soundBu = document.getElementById('sound-bu')
const soundShot = document.getElementById('sound-shot')

// Создаю элемент img (зомби-картинку, в DOM этого элемента нет)
const zombieImg = document.createElement('img')
zombieImg.src = "assets/images/img/zombie.png"
// Создаю элемент img (кровь-картинка на месте убитого зомби, в DOM этого элемента нет)
const hitImg = document.createElement('img')
hitImg.src = "assets/images/img/blood.png"
