export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Имя должно быть минимум 2 символа и максимум 10 символов'],
      [2, 'Этот персонаж уже добавлен'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      throw new Error('Unknown error');
    } else {
      return this.errors.get(code);
    }
  }
}
