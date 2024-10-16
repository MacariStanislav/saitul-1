const params = new URLSearchParams(window.location.search);//Здесь мы создаем объект URLSearchParams, который позволяет удобно работать с параметрами строки запроса в URL (то, что идет после знака ?).
const productId = params.get('id');//Мы извлекаем значение параметра id из URL, которое содержит идентификатор продукта.

const products = {//Это объект, который хранит информацию о каждом продукте. Ключи — это идентификаторы продуктов, а значения — объекты с информацией о каждом продукте (название, описание, цена, изображение).
    1: {
        name: 'Гирлянда Золотая',
        description: 'Золотая гирлянда для укрощения прекрасного дома.',
            price: '$29.99',
            image: 'images/gold.png'
    },
    2: {
        name: 'Гирлянда Красная',
        description: 'Красная гирлянда, которая привлечёт внимание всех.',
        price: '$34.99',
        image: 'images/red.png'
    },
    3: {
        name: 'Гирлянда Снежная',
        description: 'Белый и блестящий снег в вашем уютном доме.',
        price: '$24.99',
        image: 'images/snow.png'
    },
    4: {
        name: 'Гирлянда Зеленая',
        description: 'Свежий зеленый цвет для ёлки в вашем доме.',
        price: '$27.99',
        image: 'images/green.png'
    },
    5: {
        name: 'Гирлянда Серебряная',
        description: 'Шикарное серебро для вашего интерьера.',
        price: '$32.99',
        image: 'images/serebro.png'
    },
    6: {
        name: 'Гирлянда Радужная',
        description: 'Многоцветная гирлянда для веселья.',
        price: '$36.99',
        image: 'images/raduga.png'
    },
    7: {
        name: 'Гирлянда Праздничная',
        description: 'Праздничное оформление для вашего дома.',
        price: '$39.99',
        image: 'images/prazdnic.png'
    },
    8: {
        name: 'Гирлянда Красная',
        description: 'Оформление в стиле зимней сказки.',
        price: '$30.99',
        image: 'images/frost.png'
    },
    9: {
        name: 'Гирлянда Пастельная',
        description: 'Мягкие пастельные оттенки для уютной атмосферы.',
        price: '$25.99',
        image: 'images/pastelinaia.jpg'
    },
    10: {
        name: 'Гирлянда Синия',
        description: 'Яркие и сверкающие цвета для вашего дома или фасада.',
        price: '$28.99',
        image: 'images/blue.png'
    },
    // Добавьте остальные продукты здесь
};

const product = products[productId];//Мы используем идентификатор продукта для получения информации о конкретном продукте из объекта products.

if (product) {//Проверяем, существует ли продукт с таким ID.
    document.getElementById('product-name').innerText = product.name;//Если продукт найден, мы заполняем соответствующие элементы на странице информацией о продукте.
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').innerText = product.description;
} else {
    document.getElementById('product-name').innerText = 'Продукт не найден';
}

document.getElementById('back-button').addEventListener('click', () => {//Здесь мы добавляем обработчик события на кнопку "Назад", чтобы пользователь мог вернуться на предыдущую страницу.
    window.history.back();
});