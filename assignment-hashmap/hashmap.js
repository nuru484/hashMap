const stringToNumber = (string) => {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }

  return hashCode;
};
class HashMap {
  constructor() {}

  hash(key) {
    return stringToNumber(key);
  }
}
