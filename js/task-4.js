const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault(); // Під час відправлення форми сторінка не повинна перезавантажуватися.

  // Для отримання значеннь полів форми
  const form = event.target;
  const emailValue = form.elements.email.value.trim();
  const passwordValue = form.elements.password.value.trim();

  // Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'
  if (emailValue === '' || passwordValue === '') {
    return alert('All form fields must be filled in');
  }

  // Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях.
  const formObject = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formObject);
  form.reset(); // При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
});
