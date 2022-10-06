const COMMENT_MAX_LENGTH = 15;

/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 * @param {number} min - минимальное переданное число
 * @param {number} max - максимальное переданное число
 * @see {@link https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random} - ссылка на источник функции
 * @return {number}
 */
function getRandomInclusiveInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

/**
 * Функция для проверки максимальной длины строки
 * @param {string} string - переданный комментарий
 * @param {number} maxLength - максимальная длинна строки
 * @return {boolean} Результат работы функции true, если строка проходит по длине, и false — если не проходит (удалить на 24 строке, весь текст после фигурных скобок)
 */
function checkStringMaxLengthValid (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }

  return false;
}

console.log(getRandomInclusiveInt(6, 25));
console.log(checkStringMaxLengthValid('Hello world!', COMMENT_MAX_LENGTH));
