

document.body.style.background = "blue";
document.body.style.color = "white";
document.body.style.fontSize = "108px";

// document.writeln("Hello JavaScript!!!");

/*
 Урок 1
 Тема: Знакомство c JS
 Дата: 02.12.2023
*/



var clientFullName = prompt("Say your fullname:");

clientFullName = 140;

// camel case 

var clientName = "Evgeniy";
var clientFatherName = "Dmitrievich";
var clientSurname = "Kiselev";


// data types - типы данных

// string - текстовый, строковый

var clientInn = "20101200012345";

console.log("Hello, " + clientFullName);


// number - числовой_

var clientId = 23156;

var MONTHLY_SALARY = 10_000;


// boolean - логический, булевский

var clientAgree = true; // 1
var isInternetBankingUser = false; // 0


// undefined - неопределенный

var birthDate;

console.log("My birthdate:",  birthDate);
alert("My birthdate:" + birthDate);

// null - пустой, нулевой

var relative = null;

// object - объектный

var clientPassport = {
    series: "ID",
    docNo: "123456",
    issueDate: "01-01-2015",
    expiryDate: null,
    issueAuthority: "GUVD Bishkek",
    IsUnlimited: true
};


var me  = {
    name: "Evgeniy",
    surname: "Kiselev",
    fatherName:  "Dmitrievich",
    id: 25156,
    inn: "2181898948948",
    isInternetBankingUser: false,
    passport: {
        series: "ID",
        docNo: "123456",
        issueDate: "01-01-2015",
        expiryDate: null,
        issueAuthority: "GUVD Bishkek",
        IsUnlimited: true
    }
}

// ---------------------
// bigint - большое число, длинная арифметика
// symbol - уникальный







