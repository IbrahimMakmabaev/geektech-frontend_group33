var cashier = {
  fio: "qwerty qwerty qwerty",
  bag: 150_000,
  banknoteStructure: {
    50: 10,
    100: 25,
    200: 45,
    500: 10,
    1000: 15,
  },
};

console.log(cashier.bag);
console.log(cashier["bag"]);

// console.log("Lesson 3", undefined, null, 0, true, false, {}, []);
// console.warn("Lesson 3", undefined, null, 0, true, false, {}, []);
// console.error("Lesson 3", undefined, null, 0, true, false, {}, []);

// case -sensitive - регистро-зависимость
// case - insensitive - регистро-независимость

// let const
var $bank = "OJSC Bakai bank";
var _bank = "OJSC Bakai bank";
var bank = "OJSC Bakai bank";
var Bank = "OJSC Bakai bank";
var Bank = "OsOO Kompanion";

console.log(bank);
console.log(Bank);

// camel case

// Array - массив

var operations = [50_000, -5_000, -3_000, 7_000, -25_000, -1000, 500];
//                   0       1       2      3       4        5
console.log(`Всего проведено операций: ${operations.length}`);

console.log(`Первая операция: ${operations[0]}`);
console.log(`Последняя операция: ${operations[operations.length - 1]}`);

var incomes = 0;
var expenses = 0;
var saldo = 0;

// Loops - циклы
// iteration - итерация

// for..of

for (var operation of operations) {
  if (operation > 0) {
    incomes += operation;
  } else {
    expenses += operation;
  }
}

console.log(`Итого доходов: ${incomes}`);
console.log(`Итого расходов: ${Math.abs(expenses)}`);
console.log(
  `Остаток на текущий день составляет ${incomes - Math.abs(expenses)}`
);

// for со счетчиком

// for(;;){}  infinity loop бесконечный цикл
// for (; 1 === 0;)

for (var i = 0; i < operations.length; i++) {
  var currentOperation = operations[i];
  saldo += currentOperation;
}

function getSaldo(operations) {
  var saldo = 0;
  for (var i = 0; i < operations.length; i++) {
    var currentOperation = operations[i];
    saldo += currentOperation;
  }
  return saldo;
}

console.log(`Остаток на текущий день составляет ${saldo}`);

var sortedOperations = operations.sort((a, b) => a - b);
var top3Expenses = [];

for (var i = 0; i < 3; i++) {
  var currentOperation = Math.abs(sortedOperations[i]);
  top3Expenses.push(currentOperation);
  console.log(`${i + 1} место: ${currentOperation}`);
}

console.log("Топ-3 по расходам:", top3Expenses.join("$ "));

// ++ --

// ++ increment
// -- decrement

var age = 30;
// age = age + 1;
// age += 1;
console.clear();
// console.log(++age); // 31
// console.log(age++); // 30

console.log(age--); // 30
console.log(--age); // 29

// while
// do..while

operations = [];
var currentAmount = 0;

while (!isNaN(currentAmount)) {
  currentAmount = prompt("Enter amount operation or EXIT");
  currentAmount = Number(currentAmount);

  if (isNaN(currentAmount)) break;
//   if (currentAmount == NaN) break; ERROR

  operations.push(currentAmount);

  console.log(`Остаток на конец операции составляет ${getSaldo(operations)}`);
}


// массив с годами рождения детей
// переменная в которой будет хранится количество подарков 0

// Цикл(массив с детьми){
//   посчитать возраст ребенка
//   Если возраст от 6 до 12
//     то количество подарков + 1
// }
 