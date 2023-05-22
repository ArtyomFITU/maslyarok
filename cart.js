// Функция для обновления количества товаров в корзине
function updateCartItemCount() {
    const cartItemCountSpan = document.getElementById('cartItemCount');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItemCountSpan.textContent = cartItems.length;
  }
  
  // Функция для отображения товаров в корзине
  function displayCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    cartItemsList.innerHTML = '';
  
    if (cartItems.length === 0) {
      cartItemsList.innerHTML = '<p>Корзина пуста.</p>';
    } else {
      cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsList.appendChild(li);
      });
    }
  }
  
  // Функция для добавления товара в корзину
  function addToCart(item) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartItemCount();
  }
  
  // Функция для очистки корзины
  function clearCart() {
    localStorage.removeItem('cartItems');
    updateCartItemCount();
    displayCartItems();
  }
  
  // Обработчик события при загрузке страницы
  window.addEventListener('load', () => {
    updateCartItemCount();
    displayCartItems();
  });
  
  // Обработчик события при клике на иконку корзины
  document.getElementById('cartIcon').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'block';
  });
  
  // Обработчик события при клике на кнопку "Закрыть" в модальном окне
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'none';
  });
  
  // Обработчик события при клике на кнопку "Очистить корзину"
  document.getElementById('clearCartBtn').addEventListener('click', () => {
    clearCart();
  });