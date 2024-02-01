# The Odin Project HashMap Implementation

This is a solution to Odin Project assignment to implement a HashMap data structure in JavaScript.

## HashMap Class

### Functions to Implement:

1. **hash(key):** Takes a key and produces a hash code for it. Only handles keys of type strings.

2. **set(key, value):** Takes a key and a value, assigns the value to the key. Overwrites the old value if the key already exists. Grows buckets size when needed based on the load factor.

3. **get(key):** Takes a key and returns the value assigned to it. Returns null if key is not found.

4. **has(key):** Takes a key and returns true or false based on whether the key is in the hash map.

5. **remove(key):** Takes a key and removes the entry with that key. Returns true if the key is in the hash map, otherwise returns false.

6. **length():** Returns the number of stored keys in the hash map.

7. **clear():** Removes all entries in the hash map.

8. **keys():** Returns an array containing all the keys inside the hash map.

9. **values():** Returns an array containing all the values inside the hash map.

10. **entries():** Returns an array containing each key-value pair.

## Example

```javascript
const myHashMap = new HashMap();
myHashMap.set('a', 1);
myHashMap.set('b', 2);
myHashMap.set('c', 3);

console.log(myHashMap.get('a')); // Output: 1
console.log(myHashMap.has('b')); // Output: true
console.log(myHashMap.remove('c')); // Output: true
console.log(myHashMap.length()); // Output: 2
console.log(myHashMap.keys()); // Output: ['a', 'b']
console.log(myHashMap.values()); // Output: [1, 2]
console.log(myHashMap.entries()); // Output: [['a', 1], ['b', 2]]
```

## Author

- Twitter - [Nurudeen Abdul-Majeed](https://twitter.com/ABDULMAJEEDNUR3)
- Linkedin - [Nurudeen Abdul-Majeed](https://www.linkedin.com/in/abdul-majeed-nurudeen-78266a182/)

## Acknowledgments

- Thanks to [The Odin Project](https://www.theodinproject.com/)

- All praised to Allah.
