import ErrorRepository from './ErrorRepository';

console.log('worked');

const error = new ErrorRepository();

console.log(error.translate(1));
console.log(error.translate(2));
console.log(error.translate(3));
