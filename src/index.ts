import * as readline from 'readline';
import { sum } from './math.ts';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log('Welcome! Choose a function to test:');
  console.log('1. Sum two numbers');
  console.log('2. Exit');

  const choice = await askQuestion('Enter your choice (1-2): ');

  switch (choice) {
    // Sum case
    case '1':
      const a1 = parseFloat(await askQuestion('Enter first number: '));
      const b1 = parseFloat(await askQuestion('Enter second number: '));
      console.log(`sum(${a1}, ${b1}) =`, sum(a1, b1));
      break;

    // Exit case
    case '2':
      console.log('Goodbye!');
      rl.close();
      return;

    default:
      console.log('Invalid choice. Please try again.');
  }

  rl.close();
}

main().catch(console.error);
