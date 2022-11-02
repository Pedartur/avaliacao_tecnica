const pessoas = [
  { name: "Fabiana Araújo", age: 33 },
  { name: "Gabriel Gomes", age: 25 },
  { name: "Fernando Henrique", age: 17 },
  { name: "Ana Luiza", age: 2 },
  { name: "Geralda do Nascimento", age: 93 },
  { name: "Miguel Souza", age: 70 },
  { name: "Antonio Miguel", age: 69 },
];
//Exercicio 3
const ex3 = pessoas.map((user) => {
  if (user.name == "Gabriel Gomes") {
    return user;
  }
});
console.log(ex3);
//Exercicio 4
const ex4 = pessoas.map((user) => {
  return user.name.split(" ", 1);
});
console.log(ex4);

//Exercicio 5
const ex5 = pessoas.map((user, index) => {
  user.id = index + 1;
  return { id: user.id, name: user.name, age: user.age };
});
console.log(ex5);
//Exercicio 6
const ex6 = ex5.map((user) => {
  if (user.age >= 18) {
    return user;
  }
});
console.log(ex6);
//Exercicio 7
let ex7 = 0;
ex5.forEach((user) => {
  ex7 = user.age + ex7;
});
console.log(`A média das idades é: ${ex7 / pessoas.length}`);
