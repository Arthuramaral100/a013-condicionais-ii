const num = prompt("Digite um número:");

// Utilizando IF's aninhados
if (num % 2 === 0) {
  console.log(`O número ${num} é divisivel por 2`);
} else {
  if (num % 3 === 0) {
    console.log(`O número ${num} é divisivel por 3`);
  } else {
    console.log("O número não é divisivel nem por 2 nem por 3");
  }
}

// if (num % 2 === 0) {
//   if (num % 3 === 0) {
//     console.log("Divisivel por 2 e 3");
//   } else {
//     console.log("Dvisivel por 2");
//   }
// } else {
//   if (num % 3 === 0) {
//     console.log("Divisivel por 3");
//   } else {
//     console.log("Divisivel por nenhum dos dois");
//   }
// }

// Utilizando operador lógico
if (num % 2 === 0 || num % 3 === 0) {
  console.log(`O número ${num} é divisivel por 2 ou por 3`);
} else {
  console.log(`O número ${num} não é divisivel por 2 ou por 3`);
}
