---
sidebar: auto
---

# Introduction

**JavaScript Swiss Army Knife** is a modern JavaScript utility library aiming to collect popular helpers and learn functional programming.

## Array

### isSorted

```isSorted(array, [comparator])```

Check if an array is sorted.

#### Arguments

1. `array` *(Array)*: The array to check.
2. `comparator` *(Function)*: Specifies a function that defines the sort order.

#### Returns

*(Boolean)*: Returns `true` if `array` is sorted, else `false`.

#### Example

``` js
isSorted([1, 2, 3, 4, 5]);
// => true

isSorted([5, 4, 3, 2, 1], (a, b) => b - a);
// => false
```