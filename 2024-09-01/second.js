//1. Ülesanne: luua array numbritega ja leida spetsiifilise numbri index
{
  const array = [7, 3, 5, 8, 9];

  function findIndex(array, num) {
    return array.indexOf(num);
  }

  console.log(findIndex(array, 5));
}

//Arrow functions
//2. Ülesanne: funktsioon, mis liidab 2 numbrit kokku ja tagastab summa

function addNumbersFn(num1, num2) {
  return num1 + num2;
}

console.log(addNumbersFn(1, 2));

//3. Ülesanne: ümber kirjutada arrow funktsioonina

const addNumbersArrowFn = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbersArrowFn(1, 7));

//4. Ülesanne: ümber kirjutada shorthand arrow funktsioonina

const addNumbersShortArrowFn = (num1, num2) => num1 + num2;
console.log(addNumbersShortArrowFn(4, 8));

//Nested
//5. Ülesanne: luua funktsioon sellisel kujul, et saaks kutsuda välja seda nii:

function addNumbersNested(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
console.log(addNumbersNested(3)(4));

//6. Ülesanne: samast funktsioonist arrow function

const addNumbersNestedAF = (num1) => (num2) => num1 + num2;
console.log(addNumbersNestedAF(9)(8));

//7. Ülesanne: AF printida "Hello (nimi)" ja kasutada string literals

const greet = (name) => `Hello ${name}`;
console.log(greet("Evelin"));
