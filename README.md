# Bian

collection of often-used data transformation methods.

## Static methods

### identity(any) : any

identity function.

### compose([functions]): function

reduce functions from right to left.

### splats(function): function

convert a function originally receives multiple arguments to a compressed array as argument

```javascript
Bian.splats((a, b, c) => a + b + c)([1, 2, 3]);
// 6
```

### unsplats(function): function

convert a function originally receive array as arguments to the splatted array as arguments, like spread

```javascript
Bian.unsplats(arr => arr.join('-'))('first', 'second', 'third');
// 'first-second-third'
```

## Array methods

### pick(propName) : array

pick a property from list of objects.

```javascript
[{name: 'js'},  {name: 'php'}, {name: 'scala'}].bian().pick('name').toValue(); 

// ['js', 'php', 'scala'];
```

### compact : array

filter out not trucy element in an array.

```javascript
['first', NaN, '', false, 0, undefined, null, 'last'].bian().compact().toValue();

// ['first', 'last']
```

### unique : array

make unique of an array.

### chunk(size) : array

split an array into groups by given size.

```javascript
[ 1, 2, 3, 4, 5 ].bian().chunk(2).toValue();

// [[1,2], [3,4], [5]]
```

### zip : array

Creates an array of grouped elements,
 the first of which contains the first elements of the given arrays,
 the second of which contains the second elements of the given arrays, and so on.

```javascript
[[1,2,3], [true, false]].bian().zip().toValue(),
// [[1, true], [2, false], [3, undefined]]

[[], [true, false, 'string'], ].bian().zip().toValue(),
// [[undefined, true], [undefined, false], [undefined, 'string']]
```

### head : any

get the first element of an array.

### initial : array

get all but the last element of an array.

### last : any

get the last element of an array.

### tail : array

get all but the first element of an array.

## Object methods

### values : array

grab the values of an object

```javascript
{ firstName: 'fei', lastName: 'liu', city: 'munich' }.bian().values().toValue();

// ['fei', 'liu', 'munich'] 
```

### valuesIf(pred):array

get object values as array when the value sacrifices the predicate.

### pair : array

turn object into list of a two-dimensional array [ [key, value], [key, value], ... ]

### entry([array=['key', 'value']]) : array

turn object into a list of object with predefined key and value property [ {customkey: key, customValue: value}, ...]

