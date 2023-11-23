const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addDivisibles = (number) => {

  let sum = 0;

  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  };
  return sum;
};

const myConsole = (number) => {

  rl.question('\nDigite um número: ', (answer) => {
    const number = parseInt(answer, 10);
    if (!isNaN(number)) {
      console.log(`A soma dos números divisíveis por 3 ou 5 até ${number} é: ${addDivisibles(number)}`);
      otherSum()
    } else {
      console.log('Por favor, digite um número válido.');
      myConsole()
    };
  });
};

const otherSum = () => {

  rl.question("\nDeseja fazer mais uma soma? \n \nDigite o número 1-Sim ou 2-Não:", (answer) => {
    const number = parseInt(answer);
    switch (number) {
      case 1:
        myConsole()
        break
      case 2:
        rl.close();
    }

  });
};

myConsole();

