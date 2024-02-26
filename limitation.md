# Limitations

* bian::unique

  `[NaN, NaN].bian().unique().toValue(); // [NaN, NaN]`
  
* bian::zip

```javascript
  // fail
  t.deepEqual(
      [[,,,,,], [true, false]].bian().zip().toValue(),
      [[undefined, true], [undefined, false]]
  );
  
  AssertionError:
  [ [ undefined, true ],
    [ undefined, false ],
    [ undefined, undefined ],
    [ undefined, undefined ],
    [ undefined, undefined ] ]
  deepEqual
  [ [ undefined, true ], [ undefined, false ] ]
```
