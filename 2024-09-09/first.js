//11. Ülesanne: filtreerida välja uuetsi massiivist kõik elemendid, mis on suuremad kui neli

const array = [1, 2, 3, 4, 5, 6];

const filteredArray = array.filter((element) => {
  console.log(element > 4);

  return element > 4;
});

console.log({ filteredArray });
console.log(filteredArray);

//12. Ülesanne

const names = ["Anni", "Mari", "Mati", "Juku"];

const objectifiedNames = names.map((name) => {
  return {
    name: name,
    age: name.length + 20,
    email: `${name}@company.com`,
    address: `${name} Street 55`,
    username: name.split("").reverse().join(""),
  };
});

console.log({ objectifiedNames });

//13. Ülesanne

const evelin = {
  name: "Evelin",
  school: "TLÜ",
};

console.log({ evelin });

console.log(1 == "1");
console.log(1 === "1");

//async/await Promise

const myPromise = () => {
  return new Promise((resolve) => setTimeout(() => resolve("done"), 1000));
};

const runPromise = async () => {
  console.log(await myPromise());
};

runPromise();
//setTimeout(() => console.log("timeout"), 2000);
