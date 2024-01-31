const stringToNumber = (string) => {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }

  return hashCode;
};
class HashMap {
  constructor() {
    this.buckets = new Array(16);
    this.loadFactor = 0.75;
    this.capacity = 0;
  }

  hash(key) {
    return stringToNumber(key);
  }
}
