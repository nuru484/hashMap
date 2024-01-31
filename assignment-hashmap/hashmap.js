const stringToNumber = (string) => {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }

  return hashCode;
};
class HashMap {
  constructor(capacity = 16) {
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null);
    this.size = 0;
    this.loadFactor = 0.75;
  }

  hash(key) {
    return stringToNumber(key);
  }

  resize(newCapacity) {
    const newBuckets = new Array(newCapacity).fill(null);
    this.capacity = 0; // Reset capacity

    // Rehash existing elements into the new array
    this.buckets.forEach((bucket) => {
      if (bucket) {
        bucket.forEach(({ key, value }) => {
          const index = this.hash(key) % newCapacity;
          if (!newBuckets[index]) {
            newBuckets[index] = [];
          }
          newBuckets[index].push({ key, value });
          this.size++;
        });
      }
    });
    this.buckets = newBuckets; // Update buckets
  }

  set(key, value) {
    const index = this.hash(key) % this.buckets.length;

    // Check if resizing is needed
    if (this.capacity > this.loadFactor * this.buckets.length) {
      this.resize(this.buckets.length * 2); // Double the capacity
    }

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    } else {
      if (!this.buckets[index]) {
        this.buckets[index] = [];
      }

      const bucket = this.buckets[index];
      let found = false;
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket[i].value = value;
          found = true;
          break;
        }
      }

      if (!found) {
        bucket.push({ key, value });
        this.size++;
      }
    }
  }

  get(key) {
    const index = this.hash(key) % this.buckets.length;

    const bucket = this.buckets[index];

    if (Array.isArray(bucket)) {
      for (const entry of bucket) {
        if (entry.key === key) {
          return entry.value;
        }
      }
    } else if (bucket && bucket.key === key) {
      return bucket.value;
    }

    return null;
  }

  has(key) {
    const index = this.hash(key) % this.buckets.length;

    const bucket = this.buckets[index];

    if (Array.isArray(bucket)) {
      return bucket.some((entry) => entry.key === key);
    } else {
      return bucket && bucket.key === key;
    }
  }

  remove(key) {
    const index = this.hash(key) % this.buckets.length;

    const bucket = this.buckets[index];

    if (Array.isArray(bucket)) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i].key === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    } else if (bucket && bucket.key === key) {
      this.buckets[index] = null;
      return true;
    }

    return false;
  }

  length() {
    let totalSize = 0;

    this.buckets.forEach((bucket) => {
      if (Array.isArray(bucket)) {
        bucket.forEach((entry) => {
          totalSize += 1;
        });
      } else {
        totalSize += 1;
      }
    });

    return totalSize;
  }

  clear() {
    this.buckets.fill(null);
  }
}
