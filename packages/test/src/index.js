import { add } from 'calc-webpack';
import { add as add2 } from 'calc-tsc';

const result = add(10, 20);
const result2 = add2(10, 20);

console.log(result);
console.log(result2);
