// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// 1. Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoriesId = document.querySelector('#categories');
const categoriesItems = categoriesId.querySelectorAll('.item');
console.log('Numbers of categories:', categoriesItems.length);

// 2. Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

categoriesItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('ul > li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
