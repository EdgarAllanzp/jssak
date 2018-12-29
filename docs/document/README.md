---
sidebar: auto
---

# Introduction

**JavaScript Swiss Army Knife** is a **slight** and **elegant** utility library for modern JavaScript.

## Array

### first

```first(array)```

Get the first element.

#### Arguments

1. `array` *(Array)*: The array to query.

#### Returns

*(Any)*: Returns the first element.

#### Example

``` js
first(['a', 'b', 'c', 'd', 'e', 'f']); 
// => 'a'
```
    

### isSorted

```isSorted(array, [comparator])```

Check if an array is sorted.

#### Arguments

1. `array` *(Array)*: The array to check.
2. `[comparator]` *(Function)*: Specifies a function that defines the sort order.

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

```last(array)```

Get the last element.

#### Arguments

1. `array` *(Array)*: The array to query.

#### Returns

*(Any)*: Returns the last element.

#### Example

``` js
last(['a', 'b', 'c', 'd', 'e', 'f']); 
// => 'f'
```
    
## Function

## String

### camelcase

```camelCase([string])```

Converts `string` to camcel case.

#### Arguments

1. `[string]` *(String)*: The string to convert.

#### Returns

*(String)*: Returns the camel cased string.

#### Example

``` js
camelCase('foo bar');
// => 'fooBar'
```
    

### capitalize

```capitalize([string])```

Converts the first character of `string` to upper case.

#### Arguments

1. `[string]` *(String)*: The string to capitalize.

#### Returns

*(String)*: Returns the capitalized string.

#### Example

``` js
capitalize('foo');
// => 'Foo'
```
    