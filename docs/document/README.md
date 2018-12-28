---
sidebar: auto
---

# Introduction

**JavaScript Swiss Army Knife** is a **slight** and **elegant** utility library for modern JavaScript.

## Array

### first

```first(array, [num])```

Get the first element or first n elements of an array.

#### Arguments

1. `array` *(Array)*: The array to query.
2. `num` *(Number)*: The first elements count.

#### Returns

*(Any)*: Returns the first element or first n elements of array.

#### Example

``` js
first(['a', 'b', 'c', 'd', 'e', 'f']); 
// => 'a'

first(['a', 'b', 'c', 'd', 'e', 'f'], 1);
// => 'a'

first(['a', 'b', 'c', 'd', 'e', 'f'], 3);
// => ['a', 'b', 'c']
```
    

### isSorted

```isSorted(array, [comparator])```

Check if an array is sorted.

#### Arguments

1. `array` *(Array)*: The array to check.
2. `[comparator]` *(Function)*: Optionally. Specifies a function that defines the sort order.

#### Returns

*(Boolean)*: Returns `true` if `array` is sorted, else `false`.

#### Example

``` js
isSorted([1, 2, 3, 4, 5]);
// => true

isSorted([1, 3, 5, 2, 4]);
// => false

isSorted([5, 4, 3, 2, 1], (a, b) => b - a);
// => true
```
    

### last

```last(array, [num])```

Get the last element or last n elements of an array.

#### Arguments

1. `array` *(Array)*: The array to query.
2. `num` *(Number)*: The last elements count.

#### Returns

*(Any)*: Returns the last element or last n elements of array.

#### Example

``` js
last(['a', 'b', 'c', 'd', 'e', 'f']); 
// => 'f'

last(['a', 'b', 'c', 'd', 'e', 'f'], 1);
// => 'f'

last(['a', 'b', 'c', 'd', 'e', 'f'], 3);
// => ['d', 'e', 'f']
```
    
## Function

## String

### camelcase
      

### capitalize
      