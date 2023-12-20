// Data types - типы данных

// 1) string

var name = "Evgeniy";
var surname = "Kiselev";
var fatherName = `Dmitrievich`;

// 2) number

var myId = "3500";
var salary = 50000;

console.log(salary + 10000);

// 3) boolean

var isStudent = false;
var isHasJob = true;

// 4) undefined

var homeAddress; // undefined

// 5) null

var birthday = null;

// 6) object

// fields, keys, properties
// values
var aboutMe = {
  fullname: "Киселев Евгений Дмитриевич", // Евгений К.
  name: "Евгений",
  surname: "Киселев",
  fatherName: "Дмитриевич",
  isStudent: true,
  workSchedule: {
    days: "mon, tue, wed...",
    time: "09:00 - 18:00",
  },
  passport: {
    series: "AN",
    docNo: "123456",
  },
  nationality: "UZ",
};

console.log("I'm available", aboutMe["workSchedule"]["time"]);
console.log("I'm available", aboutMe.workSchedule.time);

// Евгений К.
var receiverName = aboutMe.name + " " + aboutMe.surname[0] + ".";

console.log("Mbank receiver:", receiverName);

// Operations

// 1) string: concatenation(конкатенация)

var myFullName =
  aboutMe.surname + " " + aboutMe.name + " " + aboutMe.fatherName;
console.log("My full name:", myFullName);

with (aboutMe.passport) {
  console.log("My passport:", series + docNo);
}

console.log("My passport:", aboutMe.passport.series + aboutMe.passport.docNo);

// 2) number: +  -  *  /  %  **
// shorthand  += -= *= /= %= **=

// console.log(true/false);
console.log(1 / 0);

// var guessNumber = prompt("Enter number");

// if(guessNumber % 2 === 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

// condition statement - условная конструкция
/* if(condition){
    ...logic
}else{
    ...logic
}
*/

var doctorServicePrice = 1000;

// DRY - Don't repeat yourself

if (aboutMe.nationality !== "KG") {
  doctorServicePrice *= 1.25;
}
console.log("Your price:", doctorServicePrice);

// if(aboutMe.nationality === "KG"){
//     console.log("Your price:", doctorServicePrice);
// }else{
//     console.log("Your price:", doctorServicePrice * 1.25);
// }

// 3) boolean
// Comparison(сравнения): > < >= <= == === != !==
// Logical(логические): && || !

var loanSum = 1_000_000;
var loanCurrency = "RUB";

// if (loanCurrency === "USD") {
//   loanSum *= 89.72;
// } else if (loanCurrency === "EUR") {
//   loanSum *= 97;
// } else if (loanCurrency === "RUB") {
//   loanSum *= 0.8;
// } else if (loanCurrency === "CNY") {
//   loanSum *= 9;
// } else {
//   if (loanCurrency !== "KGS") {
//     console.warn("Unsupported currency");
//   }
// }

switch (loanCurrency) {
  case "KGS":
    break;
  case "USD":
    loanSum *= 89;
    break;
  case "EUR":
    loanSum *= 97;
    break;
  case "RUB":
    loanSum *= 0.8;
    break;
  case "CNY":
    loanSum *= 9;
    break;
  default:
    console.warn("Unsupported currency");
}

if (aboutMe.nationality === "KG" || loanSum <= 1_000_000) {
  console.log("Loan approved");
} else {
  console.warn("Loan rejected");
}

var studentTotals = {
  homeworks: 79,
  appointments: 6,
  standups: 0,
};

if (
  (studentTotals.homeworks > 60 &&
  studentTotals.appointments >= 5) || 
  studentTotals.standups === 8 
) {
    console.log("FREE REPEAT");
}
