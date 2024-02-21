const countriesBudget = {
    "Україна": 500,
    "Італія": 1500,
    "Таїланд": 1000
};

function planTrip(budget, destination) {
    if (countriesBudget.hasOwnProperty(destination)) {
        const countryBudget = countriesBudget[destination];
        if (budget >= countryBudget) {
            console.log(`З вказаним бюджетом ${budget}$ ви можете подорожувати в ${destination}.`);
        } else {
            console.log(`Бюджет ${budget}$ не вистачає для подорожі в ${destination}.`);
            console.log("Рекомендовані альтернативні країни:");
            for (const country in countriesBudget) {
                if (budget >= countriesBudget[country]) {
                    console.log(`- ${country}`);
                }
            }
        }
    } else {
        console.log(`Країна ${destination} не знаходиться у списку.`);
    }
}

// Приклад використання:
const userBudget = parseFloat(prompt("Введіть бюджет подорожі: "));
const userDestination = prompt("Введіть бажану країну відпочинку: ");

planTrip(userBudget, userDestination);

function calculateFinalPrice(initialPrice, discountCode, quantity) {
    const discounts = {
        "NEWYEAR": 0.2,
        "BLACKFRIDAY": 0.3,
        "SUMMERSALE": 0.15
    };

    const baseDiscount = discounts[discountCode] || 0.05;
    let totalPrice = initialPrice * (1 - baseDiscount) * quantity;

    if (quantity >= 3) {
        totalPrice *= 0.95; // Додаткова знижка 5% за кількість одиниць
    }

    if (totalPrice > 1000) {
        totalPrice *= 0.9; // Додаткова знижка 10% за загальну суму
    }

    return totalPrice;
}

// Приклад використання:
const itemPrice = parseFloat(prompt("Введіть початкову ціну товару: "));
const discountCode = prompt("Введіть код знижки: ");
const quantity = parseInt(prompt("Введіть кількість одиниць товару: "), 10);

const finalPrice = calculateFinalPrice(itemPrice, discountCode, quantity);
console.log(`Кінцева ціна: ${finalPrice.toFixed(2)} гривень.`);