let start = "Na";
let str = "ami";
str = start + "N" + str;
console.log(str); // Результат: NaNami

// Завдання Масив Обʼєктів
let person1 = {
    name: "Ulvi",
    surname: "Mamedov",
    phoneNumber: "+380932197160",
    email: "ulvi.mammedov.2007@gmail.com",
    hobby: "Programming",
    isStudent: true
};

let person2 = {
    name: "John",
    surname: "Watson",
    phoneNumber: "213534244",
    email: "johnwatson@gmail.com",
    hobby: "Cast in Movies",
    isStudent: false
};



let person3 = {
    name: "Bob",
    surname: "Bobby",
    phoneNumber: "555-123-4567",
    email: "bob@example.com",
    hobby: "Gaming",
    isStudent: true
};


let arrayOfObjects = [person1, person2, person3];
console.log(arrayOfObjects);