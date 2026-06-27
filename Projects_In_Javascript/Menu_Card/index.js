const data = [
  {
    id: 1,
    title: "Matcha Latte",
    category: "drinks",
    price: 399,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?matcha",
    description: "Creamy green tea latte with earthy flavor.",
  },
  {
    id: 2,
    title: "Cold Coffee",
    category: "drinks",
    price: 300,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?cold-coffee",
    description: "Chilled coffee blended with milk and ice.",
  },
  {
    id: 3,
    title: "Cappuccino",
    category: "drinks",
    price: 350,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?cappuccino",
    description: "Espresso with milk foam.",
  },
  {
    id: 4,
    title: "Iced Tea",
    category: "drinks",
    price: 250,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?iced-tea",
    description: "Refreshing chilled tea.",
  },
  {
    id: 5,
    title: "Mango Smoothie",
    category: "drinks",
    price: 320,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?mango-smoothie",
    description: "Fresh mango blended drink.",
  },

  {
    id: 6,
    title: "Pancakes",
    category: "breakfast",
    price: 350,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?pancakes",
    description: "Fluffy pancakes with syrup.",
  },
  {
    id: 7,
    title: "Omelette",
    category: "breakfast",
    price: 200,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?omelette",
    description: "Egg omelette with vegetables.",
  },
  {
    id: 8,
    title: "Toast & Jam",
    category: "breakfast",
    price: 180,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?toast",
    description: "Buttered toast with jam.",
  },
  {
    id: 9,
    title: "Paratha",
    category: "breakfast",
    price: 220,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?paratha",
    description: "Stuffed flatbread.",
  },
  {
    id: 10,
    title: "Muesli Bowl",
    category: "breakfast",
    price: 300,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?muesli",
    description: "Healthy cereal bowl with fruits.",
  },

  {
    id: 11,
    title: "Veg Burger",
    category: "lunch",
    price: 450,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?veg-burger",
    description: "Crispy veggie burger.",
  },
  {
    id: 12,
    title: "Chicken Burger",
    category: "lunch",
    price: 520,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?chicken-burger",
    description: "Juicy chicken burger.",
  },
  {
    id: 13,
    title: "Rice Bowl",
    category: "lunch",
    price: 400,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?rice-bowl",
    description: "Rice with vegetables and curry.",
  },
  {
    id: 14,
    title: "Chicken Curry",
    category: "lunch",
    price: 550,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?chicken-curry",
    description: "Spicy chicken curry.",
  },
  {
    id: 15,
    title: "Momo Plate",
    category: "lunch",
    price: 300,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?momo",
    description: "Steamed dumplings.",
  },

  {
    id: 16,
    title: "Pizza Margherita",
    category: "dinner",
    price: 650,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?pizza",
    description: "Classic cheese pizza.",
  },
  {
    id: 17,
    title: "Pasta Alfredo",
    category: "dinner",
    price: 600,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?alfredo-pasta",
    description: "Creamy pasta.",
  },
  {
    id: 18,
    title: "Steak",
    category: "dinner",
    price: 900,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?steak",
    description: "Grilled beef steak.",
  },
  {
    id: 19,
    title: "Fried Rice",
    category: "dinner",
    price: 450,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?fried-rice",
    description: "Egg fried rice.",
  },
  {
    id: 20,
    title: "Noodles",
    category: "dinner",
    price: 350,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?noodles",
    description: "Stir-fried noodles.",
  },

  {
    id: 21,
    title: "French Fries",
    category: "snacks",
    price: 250,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?fries",
    description: "Crispy fries.",
  },
  {
    id: 22,
    title: "Popcorn",
    category: "snacks",
    price: 150,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?popcorn",
    description: "Buttery popcorn.",
  },
  {
    id: 23,
    title: "Samosa",
    category: "snacks",
    price: 100,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?samosa",
    description: "Fried stuffed snack.",
  },
  {
    id: 24,
    title: "Sandwich",
    category: "snacks",
    price: 280,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?sandwich",
    description: "Grilled sandwich.",
  },
  {
    id: 25,
    title: "Spring Rolls",
    category: "snacks",
    price: 220,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?spring-rolls",
    description: "Crispy rolls.",
  },

  {
    id: 26,
    title: "Chocolate Cake",
    category: "dessert",
    price: 420,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?chocolate-cake",
    description: "Rich chocolate cake.",
  },
  {
    id: 27,
    title: "Donut",
    category: "dessert",
    price: 180,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?donut",
    description: "Glazed donut.",
  },
  {
    id: 28,
    title: "Ice Cream",
    category: "dessert",
    price: 250,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?ice-cream",
    description: "Creamy ice cream.",
  },
  {
    id: 29,
    title: "Brownie",
    category: "dessert",
    price: 260,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?brownie",
    description: "Chocolate brownie.",
  },
  {
    id: 30,
    title: "Cheesecake",
    category: "dessert",
    price: 480,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?cheesecake",
    description: "Creamy cheesecake.",
  },

  {
    id: 31,
    title: "Momo",
    category: "food",
    price: 300,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?dumplings",
    description: "Steamed dumplings.",
  },
  {
    id: 32,
    title: "Thukpa",
    category: "food",
    price: 350,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?noodle-soup",
    description: "Tibetan noodle soup.",
  },
  {
    id: 33,
    title: "Dal Bhat",
    category: "food",
    price: 400,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?dal-bhat",
    description: "Nepali staple meal.",
  },
  {
    id: 34,
    title: "Paneer Curry",
    category: "food",
    price: 500,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?paneer-curry",
    description: "Spiced paneer curry.",
  },
  {
    id: 35,
    title: "Grilled Chicken",
    category: "food",
    price: 650,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?grilled-chicken",
    description: "Grilled chicken pieces.",
  },

  {
    id: 36,
    title: "Milk Tea",
    category: "drinks",
    price: 80,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?tea",
    description: "Classic milk tea.",
  },
  {
    id: 37,
    title: "Black Coffee",
    category: "drinks",
    price: 150,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?black-coffee",
    description: "Strong black coffee.",
  },
  {
    id: 38,
    title: "Lemonade",
    category: "drinks",
    price: 200,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?lemonade",
    description: "Fresh lemon drink.",
  },
  {
    id: 39,
    title: "Strawberry Shake",
    category: "drinks",
    price: 330,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?strawberry-shake",
    description: "Sweet strawberry shake.",
  },
  {
    id: 40,
    title: "Hot Chocolate",
    category: "drinks",
    price: 300,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?hot-chocolate",
    description: "Warm chocolate drink.",
  },

  {
    id: 41,
    title: "Breakfast Burrito",
    category: "breakfast",
    price: 380,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?burrito",
    description: "Egg and veggie wrap.",
  },
  {
    id: 42,
    title: "French Toast",
    category: "breakfast",
    price: 320,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?french-toast",
    description: "Sweet toasted bread.",
  },
  {
    id: 43,
    title: "Idli Sambhar",
    category: "breakfast",
    price: 250,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?idli",
    description: "South Indian breakfast.",
  },
  {
    id: 44,
    title: "Boiled Eggs",
    category: "breakfast",
    price: 120,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?eggs",
    description: "Simple boiled eggs.",
  },
  {
    id: 45,
    title: "Cornflakes",
    category: "breakfast",
    price: 200,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?cornflakes",
    description: "Cereal with milk.",
  },

  {
    id: 46,
    title: "BBQ Wings",
    category: "snacks",
    price: 420,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?bbq-wings",
    description: "Smoky chicken wings.",
  },
  {
    id: 47,
    title: "Nachos",
    category: "snacks",
    price: 350,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?nachos",
    description: "Cheesy nachos.",
  },
  {
    id: 48,
    title: "Cookies",
    category: "dessert",
    price: 200,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?cookies",
    description: "Crunchy sweet cookies.",
  },
  {
    id: 49,
    title: "Cupcake",
    category: "dessert",
    price: 220,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?cupcake",
    description: "Mini frosted cake.",
  },
  {
    id: 50,
    title: "Fruit Bowl",
    category: "food",
    price: 280,
    currency: "NPR",
    image: "https://source.unsplash.com/300x300/?fruit-bowl",
    description: "Fresh mixed fruits.",
  },
];

const showingContainer = document.querySelector(".grid-container");
const categoryButtons = document.querySelectorAll(".category-button");

const menuContainer = document.createElement("div");
menuContainer.className = "menu-container";
menuContainer.style.display = "grid";
menuContainer.style.gridTemplateColumns = 2;

function filteredAccordingtoCategory(category) {
  const filteredData = data.filter((item) => item.category === category);
  return filteredData;
}

function sortByPrice(fullData, order = "asc") {
  const multiplier = order === "asc" ? 1 : -1;
  return [...fullData].sort((a, b) => (a.price - b.price) * multiplier);
}

function addItemsofCart(fullData) {
  const totalPriceforCart = fullData.reduce((acc, data) => {
    return acc + data.price;
  }, 0);
}

function createMenuCards(item) {
  const card = document.createElement("div");
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "add-to-cart";
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.setAttribute("data-id", item.id);
  card.className = "menu-card";
  card.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="menu-image">
                <h3 class="menu-title">${item.title}</h3>
                <p class="menu-description">${item.description}</p>
                <p class="menu-price"> ${item.currency} ${item.price}</p>
            `;
   
   card.appendChild(addToCartButton);
   addToCartButton.addEventListener("click", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemId = addToCartButton.getAttribute("data-id");
    const selectedItem = data.find((item) => item.id === parseInt(itemId));
    cartItems.push(selectedItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
 
   });
  showingContainer.appendChild(card);
}

document.addEventListener("DOMContentLoaded", () => {
  data.forEach((item) => {
    createMenuCards(item);
  });
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("value");
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filteredData =
      category === "all"
        ? sortByPrice(data, "asc")
        : sortByPrice(filteredAccordingtoCategory(category), "desc");

    showingContainer.innerHTML = "";
    filteredData.forEach((item) => {
      createMenuCards(item);
    });
  });
});

const priceSelection = document.getElementById("select-price");

priceSelection.addEventListener("change", () => {
  const selectedOption = priceSelection.value;
  console.log(selectedOption);
  const sortedData = sortByPrice(data, selectedOption);
  showingContainer.innerHTML = "";
  sortedData.forEach((item) => {
    createMenuCards(item);
  });
});

const cart = document.querySelector(".cart");
cart.addEventListener("click", () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (cartItems.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  

  let cartDetails = "Items in your cart:\n\n";
  cartItems.forEach((item, index) => {
    cartDetails += `${index + 1}. ${item.title} - ${item.currency} ${item.price}\n`;
  });
  alert(cartDetails);
});
