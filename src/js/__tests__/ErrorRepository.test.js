import ErrorRepository from '../ErrorRepository';

test('1 - should return error text 1', () => {
  const error = new ErrorRepository();
  const result = 'Имя должно быть минимум 2 символа и максимум 10 символов';
  expect(error.translate(1)).toEqual(result);
});

test('2 - should return error text 2', () => {
  const error = new ErrorRepository();
  const result = 'Этот персонаж уже добавлен';
  expect(error.translate(2)).toEqual(result);
});

test('3 - should throw an error', () => {
  const error = new ErrorRepository();
  const result = 'Unknown error';
  expect(() => {
    error.translate(3);
  }).toThrow(result);
});
