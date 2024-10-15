const buttons = document.querySelectorAll('.buy-button');//Здесь мы находим все кнопки с классом buy-button на странице и сохраняем их в переменной buttons.

buttons.forEach(button => {//Для каждой кнопки из списка мы устанавливаем обработчик события.
    button.addEventListener('click', (event) => {//Это событие срабатывает, когда пользователь нажимает на кнопку.
        event.preventDefault();//Это отменяет стандартное поведение элемента (в данном случае ссылку), чтобы предотвратить переход по ссылке сразу.
        const productId = button.closest('.product').getAttribute('data-id');//Мы ищем ближайший родительский элемент с классом product и извлекаем его атрибут data-id, чтобы получить уникальный идентификатор продукта.
        window.location.href = `catalog.html?id=${productId}`;//Это перенаправляет пользователя на страницу catalog.html, добавляя в URL параметр id, который содержит идентификатор продукта.
    });
});