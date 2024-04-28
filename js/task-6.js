function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  boxesContainer.innerHTML = ''; // Очищаємо контейнер перед створенням нових коробок

  let size = 30;

  // Створюємо пустий масив та задаємо йому довжину
  let array = [];
  array.length = amount;

  // Створюємо коробки
  for (let number of array) {
    const box = document.createElement('div');

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    // Додаємо div до контейнера
    boxesContainer.append(box);
    size += 10; // Розміри кожного наступного елемента
  }
}

// Функція для очищення div-ів
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

// Отримуємо посилання на кнопки
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');

// Додаємо обробник події для кнопки "Create"
createBtn.addEventListener('click', () => {
  // Отримуємо значення з інпута
  const amount = parseInt(input.value);

  // Перевіряємо, чи введене значення в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    // Викликаємо функцію створення коробок
    createBoxes(amount);

    // Очищаємо значення інпута
    input.value = '';
  }
});

// Додаємо обробник події для кнопки "Destroy"
destroyBtn.addEventListener('click', () => {
  // Викликаємо функцію для очищення коробок
  destroyBoxes();
});
