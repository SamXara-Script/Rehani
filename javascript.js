const basketStorageKey = "rehani-basket";
const feedbackStorageKey = "rehani-feedback";
const orderStorageKey = "rehani-orders";

const menuData = {
  coffee: [
    ["Macchiato", "Double espresso, velvet milk foam, 100 ml cup", "$15.00", "coffee"],
    ["Arabica", "Single origin Arabica pour over, 180 ml cup", "$11.50", "bean"],
    ["Espresso", "Classic short pull with dense crema, 60 ml cup", "$13.00", "cup-soda"],
    ["Robusta", "Bold roast with cocoa finish, 100 ml cup", "$12.99", "sun"],
    ["Caramel Macchiato", "Espresso, milk, caramel, 180 ml cup", "$16.00", "badge-check"]
  ],
  chocolate: [
    ["Dark Truffle", "Cocoa ganache with roasted almond crunch", "$9.50", "cookie"],
    ["Cacao Bar", "70 percent chocolate with sea salt", "$8.00", "cuboid"],
    ["Mocha Praline", "Coffee cream, hazelnut, dark shell", "$10.99", "heart"],
    ["Hot Chocolate", "Steamed milk and Belgian cocoa", "$12.00", "coffee"]
  ],
  sweets: [
    ["Honey Cookie", "Brown butter cookie with wild honey", "$6.50", "cookie"],
    ["Cream Tart", "Vanilla cream, berry jam, crisp shell", "$8.75", "dessert"],
    ["Cinnamon Roll", "Soft roll with espresso glaze", "$9.25", "croissant"],
    ["Nut Biscotti", "Toasted almond and orange zest", "$7.00", "wheat"]
  ],
  tea: [
    ["Earl Grey", "Black tea with bergamot and lemon peel", "$7.50", "leaf"],
    ["Mint Green", "Green tea, fresh mint, wild flower honey", "$7.99", "sprout"],
    ["Berry Black", "Black tea with dried berries", "$8.20", "flower"],
    ["Chai Latte", "Masala spice, black tea, steamed milk", "$10.00", "coffee"]
  ],
  cake: [
    ["Chocolate Layer", "Ganache, raspberry, soft cocoa sponge", "$12.50", "cake-slice"],
    ["Carrot Cake", "Walnut crumb, cream cheese, nutmeg", "$10.00", "cake"],
    ["Cheesecake", "Vanilla bean cream and biscuit base", "$11.25", "circle-dot"],
    ["Coffee Tiramisu", "Espresso soak, mascarpone, cocoa", "$13.50", "layers"]
  ]
};

const fullMenuItems = [
  {
    id: "khinkali-classic",
    category: "food",
    name: "Khinkali Classic",
    description: "Hand-folded beef and pork khinkali with black pepper broth",
    price: 14,
    icon: "utensils"
  },
  {
    id: "qababi-plate",
    category: "food",
    name: "Qababi Plate",
    description: "Charcoal grilled kebab, onion, herbs, and warm bread",
    price: 18,
    icon: "flame"
  },
  {
    id: "mtsvadi",
    category: "food",
    name: "Mtsvadi",
    description: "Grilled pork skewers with pomegranate and tomato sauce",
    price: 22,
    icon: "drumstick"
  },
  {
    id: "acharuli-khachapuri",
    category: "food",
    name: "Acharuli Khachapuri",
    description: "Boat-shaped cheese bread with egg and butter",
    price: 16,
    icon: "egg"
  },
  {
    id: "lobio-pot",
    category: "food",
    name: "Lobio Pot",
    description: "Slow-cooked red beans with coriander, walnuts, and mchadi",
    price: 12,
    icon: "soup"
  },
  {
    id: "chicken-shkmeruli",
    category: "food",
    name: "Chicken Shkmeruli",
    description: "Roasted chicken in creamy garlic sauce",
    price: 21,
    icon: "chef-hat"
  },
  {
    id: "georgian-salad",
    category: "food",
    name: "Georgian Salad",
    description: "Tomato, cucumber, herbs, and walnut dressing",
    price: 10,
    icon: "leaf"
  },
  {
    id: "macchiato",
    category: "drink",
    name: "Macchiato",
    description: "Double espresso with velvet milk foam",
    price: 15,
    icon: "coffee"
  },
  {
    id: "caramel-macchiato",
    category: "drink",
    name: "Caramel Macchiato",
    description: "Espresso, steamed milk, and caramel",
    price: 16,
    icon: "coffee"
  },
  {
    id: "mint-green-tea",
    category: "drink",
    name: "Mint Green Tea",
    description: "Green tea, fresh mint, and wild flower honey",
    price: 8,
    icon: "sprout"
  },
  {
    id: "berry-black-tea",
    category: "drink",
    name: "Berry Black Tea",
    description: "Black tea with dried forest berries",
    price: 8.2,
    icon: "flower"
  },
  {
    id: "hot-chocolate",
    category: "drink",
    name: "Hot Chocolate",
    description: "Steamed milk and Belgian cocoa",
    price: 12,
    icon: "cup-soda"
  },
  {
    id: "lemonade",
    category: "drink",
    name: "House Lemonade",
    description: "Lemon, tarragon, mint, and sparkling water",
    price: 7,
    icon: "glass-water"
  },
  {
    id: "chocolate-layer",
    category: "dessert",
    name: "Chocolate Layer",
    description: "Ganache, raspberry, and soft cocoa sponge",
    price: 12.5,
    icon: "cake-slice"
  },
  {
    id: "coffee-tiramisu",
    category: "dessert",
    name: "Coffee Tiramisu",
    description: "Espresso soak, mascarpone, cocoa, and biscuit",
    price: 13.5,
    icon: "layers"
  },
  {
    id: "honey-cookie",
    category: "dessert",
    name: "Honey Cookie",
    description: "Brown butter cookie with wild honey",
    price: 6.5,
    icon: "cookie"
  },
  {
    id: "churchkhela",
    category: "dessert",
    name: "Churchkhela",
    description: "Grape must candy with walnuts",
    price: 5.5,
    icon: "grape"
  }
];

const header = document.querySelector("[data-header]");
const menuList = document.querySelector("[data-menu-list]");
const fullMenu = document.querySelector("[data-full-menu]");
const basketList = document.querySelector("[data-basket-list]");
const basketEmpty = document.querySelector("[data-basket-empty]");
const basketItems = document.querySelector("[data-basket-items]");
const basketTotal = document.querySelector("[data-basket-total]");
const checkoutList = document.querySelector("[data-checkout-list]");
const checkoutEmpty = document.querySelector("[data-checkout-empty]");
const checkoutItems = document.querySelector("[data-checkout-items]");
const checkoutTotal = document.querySelector("[data-checkout-total]");
const mobilePanel = document.querySelector("[data-mobile-panel]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const feedbackForm = document.querySelector("[data-feedback-form]");
const feedbackStatus = document.querySelector("[data-feedback-status]");
const paymentForm = document.querySelector("[data-payment-form]");
const paymentStatus = document.querySelector("[data-payment-status]");
const paymentSubmit = document.querySelector("[data-pay-submit]");
let activePaymentMethod = "card";

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function formatPrice(price) {
  return `$${Number(price).toFixed(2)}`;
}

function readStoredList(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function writeStoredList(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function readBasket() {
  return readStoredList(basketStorageKey);
}

function getBasketSummary() {
  const basket = readBasket();
  const itemCount = basket.reduce((sum, item) => sum + item.quantity, 0);
  const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { basket, itemCount, total };
}

function writeBasket(items) {
  writeStoredList(basketStorageKey, items);
  updateBasketCount();
  renderBasket();
  renderCheckout();
}

function updateBasketCount() {
  const { itemCount } = getBasketSummary();

  document.querySelectorAll("[data-basket-count]").forEach((counter) => {
    counter.textContent = String(itemCount);
    counter.hidden = itemCount === 0;
  });
}

function addToBasket(itemId) {
  const item = fullMenuItems.find((menuItem) => menuItem.id === itemId);
  if (!item) return;

  const basket = readBasket();
  const existingItem = basket.find((basketItem) => basketItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    basket.push({ ...item, quantity: 1 });
  }

  writeBasket(basket);
}

function updateBasketItem(itemId, action) {
  let basket = readBasket();
  const item = basket.find((basketItem) => basketItem.id === itemId);

  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
  }

  if (action === "remove" || item.quantity <= 0) {
    basket = basket.filter((basketItem) => basketItem.id !== itemId);
  }

  writeBasket(basket);
}

function renderMenu(type = "coffee") {
  if (!menuList) return;

  menuList.innerHTML = menuData[type].map(([name, description, price, icon]) => `
    <article class="menu-item">
      <span class="menu-icon" aria-hidden="true"><i data-lucide="${icon}"></i></span>
      <div class="menu-detail">
        <div class="menu-line">
          <h3>${name}</h3>
          <span class="dots" aria-hidden="true"></span>
        </div>
        <p>${description}</p>
      </div>
      <span class="price">${price}</span>
    </article>
  `).join("");

  refreshIcons();
}

function renderFullMenu(filter = "all") {
  if (!fullMenu) return;

  const items = filter === "all"
    ? fullMenuItems
    : fullMenuItems.filter((item) => item.category === filter);

  fullMenu.innerHTML = items.map((item) => `
    <article class="full-menu-card">
      <div class="full-menu-icon" aria-hidden="true"><i data-lucide="${item.icon}"></i></div>
      <div class="full-menu-card-copy">
        <span>${item.category}</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
      <div class="full-menu-card-footer">
        <strong>${formatPrice(item.price)}</strong>
        <button class="add-basket-button" type="button" data-add-basket="${item.id}">
          <i data-lucide="plus"></i>
          Add
        </button>
      </div>
    </article>
  `).join("");

  refreshIcons();
}

function renderBasket() {
  if (!basketList) return;

  const { basket, itemCount, total } = getBasketSummary();

  if (basketItems) {
    basketItems.textContent = String(itemCount);
  }

  if (basketTotal) {
    basketTotal.textContent = formatPrice(total);
  }

  if (basketEmpty) {
    basketEmpty.hidden = basket.length > 0;
  }

  basketList.hidden = basket.length === 0;
  basketList.innerHTML = basket.map((item) => `
    <article class="basket-item">
      <div class="basket-item-main">
        <span class="basket-item-icon" aria-hidden="true"><i data-lucide="${item.icon}"></i></span>
        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
        </div>
      </div>
      <div class="basket-item-actions">
        <strong>${formatPrice(item.price * item.quantity)}</strong>
        <div class="quantity-control" aria-label="${item.name} quantity">
          <button type="button" data-basket-action="decrease" data-basket-id="${item.id}" aria-label="Decrease ${item.name}">
            <i data-lucide="minus"></i>
          </button>
          <span>${item.quantity}</span>
          <button type="button" data-basket-action="increase" data-basket-id="${item.id}" aria-label="Increase ${item.name}">
            <i data-lucide="plus"></i>
          </button>
        </div>
        <button class="remove-basket-button" type="button" data-basket-action="remove" data-basket-id="${item.id}" aria-label="Remove ${item.name}">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    </article>
  `).join("");

  refreshIcons();
}

function renderCheckout() {
  if (!checkoutList) return;

  const { basket, itemCount, total } = getBasketSummary();

  if (checkoutItems) {
    checkoutItems.textContent = String(itemCount);
  }

  if (checkoutTotal) {
    checkoutTotal.textContent = formatPrice(total);
  }

  if (checkoutEmpty) {
    checkoutEmpty.hidden = basket.length > 0;
  }

  checkoutList.hidden = basket.length === 0;
  checkoutList.innerHTML = basket.map((item) => `
    <article class="checkout-item">
      <span class="checkout-item-icon" aria-hidden="true"><i data-lucide="${item.icon}"></i></span>
      <div>
        <h3>${item.name}</h3>
        <p>${item.quantity} x ${formatPrice(item.price)}</p>
      </div>
      <strong>${formatPrice(item.price * item.quantity)}</strong>
    </article>
  `).join("");

  if (paymentSubmit) {
    paymentSubmit.disabled = basket.length === 0;
  }

  refreshIcons();
}

function setPaymentMethod(method) {
  activePaymentMethod = method;

  document.querySelectorAll("[data-payment-method]").forEach((button) => {
    const isActive = button.dataset.paymentMethod === method;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll("[data-payment-fields]").forEach((fieldGroup) => {
    const isActive = fieldGroup.dataset.paymentFields === method;
    fieldGroup.hidden = !isActive;

    fieldGroup.querySelectorAll("input").forEach((input) => {
      input.disabled = !isActive;
      input.required = isActive;
    });
  });

  if (paymentSubmit) {
    const buttonText = method === "card"
      ? "Pay by Card"
      : `Pay with ${method === "paypal" ? "PayPal" : method === "apple" ? "Apple Pay" : "Google Pay"}`;
    paymentSubmit.textContent = buttonText;
  }
}

document.querySelectorAll(".menu-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".menu-tab").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMenu(tab.dataset.menu);
  });
});

document.querySelectorAll("[data-menu-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-menu-filter]").forEach((item) => {
      item.classList.remove("active");
    });
    button.classList.add("active");
    renderFullMenu(button.dataset.menuFilter);
  });
});

document.querySelectorAll("[data-payment-method]").forEach((button) => {
  button.addEventListener("click", () => {
    setPaymentMethod(button.dataset.paymentMethod);

    if (paymentStatus) {
      paymentStatus.textContent = "";
    }
  });
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-basket]");
  const basketAction = event.target.closest("[data-basket-action]");
  const clearBasket = event.target.closest("[data-clear-basket]");

  if (addButton) {
    addToBasket(addButton.dataset.addBasket);
    addButton.classList.add("added");
    addButton.innerHTML = '<i data-lucide="check"></i> Added';
    refreshIcons();

    window.setTimeout(() => {
      addButton.classList.remove("added");
      addButton.innerHTML = '<i data-lucide="plus"></i> Add';
      refreshIcons();
    }, 1100);
  }

  if (basketAction) {
    updateBasketItem(basketAction.dataset.basketId, basketAction.dataset.basketAction);
  }

  if (clearBasket) {
    writeBasket([]);
  }
});

if (feedbackForm) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(feedbackForm);
    const reports = readStoredList(feedbackStorageKey);
    reports.push({
      rating: formData.get("rating"),
      report: formData.get("report"),
      createdAt: new Date().toISOString()
    });

    writeStoredList(feedbackStorageKey, reports);
    feedbackForm.reset();

    if (feedbackStatus) {
      feedbackStatus.textContent = "Thank you. Your rating and report were saved.";
    }
  });
}

if (paymentForm) {
  paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const { basket, itemCount, total } = getBasketSummary();

    if (basket.length === 0) {
      if (paymentStatus) {
        paymentStatus.textContent = "Choose food or drinks before paying.";
      }
      return;
    }

    const formData = new FormData(paymentForm);
    const orders = readStoredList(orderStorageKey);
    const cardNumber = String(formData.get("cardNumber") || "").replace(/\D/g, "");
    const paymentLabel = activePaymentMethod === "card"
      ? `Card ending ${cardNumber.slice(-4) || "----"}`
      : activePaymentMethod === "paypal"
        ? "PayPal"
        : activePaymentMethod === "apple"
          ? "Apple Pay"
          : "Google Pay";

    orders.push({
      items: basket,
      itemCount,
      total,
      paymentMethod: paymentLabel,
      createdAt: new Date().toISOString()
    });

    writeStoredList(orderStorageKey, orders);

    if (paymentStatus) {
      paymentStatus.textContent = `Payment selected: ${paymentLabel}. Order total ${formatPrice(total)}.`;
    }
  });
}

if (menuToggle && mobilePanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mobilePanel.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mobilePanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobilePanel.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

window.addEventListener("scroll", () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });

window.addEventListener("DOMContentLoaded", () => {
  renderMenu("coffee");
  renderFullMenu("all");
  renderBasket();
  renderCheckout();
  updateBasketCount();
  setPaymentMethod(activePaymentMethod);
  refreshIcons();
});
