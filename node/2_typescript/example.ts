// To use Typescript you first need to add it to your project
// npm i -D typescript
//
// Secondly you need to compile ts to js
// npx tsc example.ts
// (npx = node package execute, allows you ro run programs without installing it

type User2 = {
  name: string;
  age: number;
};

function isAdult(user: User): boolean {
  return user.age >= 18;
}

const justine: User = {
  name: 'justine',
  age: 23,
}

const isJustineAdult: boolean = isAdult(justine);
console.log(isJustineAdult);
