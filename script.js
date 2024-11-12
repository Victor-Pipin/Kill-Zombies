
// Переменная которая будет содержать случайный индекс массива
// (возвращаемое функцией getRandomIndex(array) значение)
let randomIndex

// Переменная для хранения идентификатора таймера, созданного с помощью setInterval.
let interval

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
console.log(soundShot)

// Создаю элемент img (зомби-картинку, в DOM этого элемента нет)
const zombieImg = document.createElement('img')
zombieImg.src = "assets/images/img/zombie.png"
// Создаю элемент img (кровь-картинка на месте убитого зомби, в DOM этого элемента нет)
const hitImg = document.createElement('img')
hitImg.src = "assets/images/img/blood.png"


// (хендлер) Управляет запуском и остановкой фоновой музыки в игре при нажатии звуковой кнопки
function handleToggleBackgroundMusic() {
    if (soundBu.currentTime) { // Проверка играет ли музыка, если играет:
        soundBu.pause() // При клике на кнопку музыка останавливается
        soundBu.currentTime = 0 // Возвращается к началу воспроизвидения
        soundBtn.innerHTML= 'SOUND ON' // Замена текста кнопки
        
    } else { // Если музыка не играла при клике на кнопку:
        soundBu.play() // музыка запускается
        soundBtn.innerHTML = 'SOUND OFF' // Замена текста кнопки
    }
}

// Обработка клика по музыкальной кнопке
soundBtn.addEventListener('click', handleToggleBackgroundMusic)

// (хендлер) Обрабатывает попадание в зомби (звук, картинка крови вместо зомби)
function handleZombieHit() {
    hit = true  // Зажигает флаг о попадании в зомби
    
    soundShot.currentTime = 0   // Обнуляю воспроизведение
    soundShot.play()    // Включаю звук выстрела

    zombieImg.remove()  // Удаляю картинку зомби
    itemsArray[randomIndex].append(hitImg)  // На её место добавляю картинку крови
}

// Обработка клика по зомби
zombieImg.addEventListener('click', handleZombieHit)

// (хендлер) Запускает и останавливает игру
function handleStartStopGame() {}


// Управляет проверкой попадания в зомби и размещением зомби в рандомной части игрового экрана, каждые 3 секунды
function playGame() {
    // Определение рандомного места на экране для появления зомби
    // itemsArray - массив из 15 элементов 'div' равномерно расположенных по всему экрану
    // getRandomIndex() - функция определяющая случайный индекс массива с элементами div
    randomIndex = getRandomIndex(itemsArray)
    itemsArray[randomIndex].append(zombieImg) // Добавляю картинку в это рандомное место на игровом экране

    // Каждые 3 секунды проверяет было ли попадание в зомби, затем отрисовывает зомби в другом месте экрана
    interval = setInterval(function () {
        if (hit) {  // Если в течении 3 секунд hit стал true
            hitCounter.innerText++  // Счётчик попаданий увеличивается на 1
            hit = false // Флаг попадания в зомби привожу в нейтральное состояние
        } else {    // Если в течении 3 секунд hit не стал true
            missCounter.innerText++ // Счётчик промахов увеличивается на 1
        }

        // После проверки отрисовка зомби в другом месте
        randomIndex = getRandomIndex(itemsArray)
        itemsArray[randomIndex].append(zombieImg)

        // Проверка и удаление картинки-крови от предыдущего попадания
        if (hitImg) {
            hitImg.remove()
        }
    }, 3000)
    }
