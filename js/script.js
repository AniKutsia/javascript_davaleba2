// 1 
// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

let numbers = [10, 50, 6, 7, 8, 11, 6, 3, 9];
console.log(sumArray(numbers));

//ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
// 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;


let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
};

function getFullName(user) {
    return user.isloggedin ? `${user.firstname}${user.lastname}` : false;
}

console.log(getFullName(user)); 

// 3. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

function getMaxNumber(numbers) {
    return Math.max(...numbers);
}

console.log(getMaxNumber(numbers)); 

// 4. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘	

function checkOddEven(number) {
    return number % 2 === 0 ? `${number} is even` : `${number} is odd`;
}

console.log(checkOddEven(5)); 
console.log(checkOddEven(6)); 

// 5. მოცემულია მასივი:
// let array = [1,2,3,4,5]; 
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1, 2, 3, 4, 5];
let reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
}

console.log(reversedArray); 

// 6. ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

const checkAge = age => age > 18 ? 'adult' : 'non-age';

console.log(checkAge(20)); 
console.log(checkAge(17)); 


// 7. მოცემულია მასივი
// let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of array2) {
    if (num === 5) {
        console.log('is');
        break;
    }
}

// 8. 
let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let num of array3) {
    sum += num;
}

console.log(sum); 

// 9. 
let array4 = [1, 2, 3, 4, 5];
sum = 0;

for (let num of array4) {
    sum += num;
}

let mean = sum / array4.length;
console.log(mean); 


// 10. 
let array5 = [1, 2, 3, 7, 6, 9];

for (let num of array5) {
    if (num === 7) continue;
    console.log(num);
}

// 11.
let array6 = [32, 14, null, '40', 50];
let multiplesOfFive = array6.filter(num => typeof num === 'number' && num % 5 === 0);

console.log(multiplesOfFive); 

// 12. 
let array8 = [[2, -3, 5, 11], [1, -35, -11], [12, -36, -24]];

for (let subArray of array8) {
    for (let num of subArray) {
        if (num > 0) {
            console.log(num);
        }
    }
}
