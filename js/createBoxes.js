function createBoxes(amount) {
  boxesContainer.innerHTML = ''; // Очищаємо контейнер перед створенням нових коробок

  let size = 30; // Розміри першого елемента

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
