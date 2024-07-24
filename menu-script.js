

    const menuItems = [
        { name: 'Pizza', description: 'Delicious cheese pizza', price: 12.99 },
        { name: 'Burger', description: 'Juicy beef burger', price: 9.99 },
        { name: 'Pasta', description: 'Italian pasta with tomato sauce', price: 14.99 }
    ];

    // ذخیره کردن منو در localStorage
    function saveMenuToLocalStorage(menu) {
        localStorage.setItem('restaurantMenu', JSON.stringify(menu));
    }

    // دریافت منو از localStorage
    function getMenuFromLocalStorage() {
        const menu = localStorage.getItem('restaurantMenu');
        return menu ? JSON.parse(menu) : [];
    }

    function displayMenu(menu) {
        const menuDiv = document.getElementById('menu');
        menuDiv.innerHTML = '';
        menu.forEach(item => {
            const menuItemDiv = document.createElement('div');
            menuItemDiv.classList.add('menu-item');
            menuItemDiv.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                 <p>قیمت: ${item.price} تومان</p>
            `;
            menuDiv.appendChild(menuItemDiv);
        });
    }

    function addItemToMenu(event) {
        event.preventDefault();

        const itemName = document.getElementById('itemName').value;
        const itemDescription = document.getElementById('itemDescription').value;
        const itemPrice = document.getElementById('itemPrice').value;
        const itemImage = document.getElementById('itemImage').value;

        const newItem = {
            name: itemName,
            description: itemDescription,
            price: parseFloat(itemPrice)
        };

        const menu = getMenuFromLocalStorage();
        menu.push(newItem);
        saveMenuToLocalStorage(menu);
        displayMenu(menu);

        // پاک کردن فرم
        document.getElementById('addItemForm').reset();
    }

    // اجرای توابع
    document.addEventListener('DOMContentLoaded', () => {
        if (!localStorage.getItem('restaurantMenu')) {
            saveMenuToLocalStorage(menuItems);  // ذخیره منو در localStorage
        }
        const menu = getMenuFromLocalStorage();  // دریافت منو از localStorage
        displayMenu(menu);  // نمایش منو در صفحه
        document.getElementById('addItemForm').addEventListener('submit', addItemToMenu);
    });