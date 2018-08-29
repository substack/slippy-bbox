# slippy-bbox

calculate a bounding box for a [slippy map][] (x,y,zoom) coordinate

# example

``` js
var slippyBBox = require('slippy-bbox')
var bbox = slippyBBox(2,14,5) // x,y,zoom
console.log(bbox) // west,south,east,north
```

output:

```
[ -157.5, 11.178401873711792, -146.25, 21.943045533438177 ]
```

# api

``` js
var slippyBBox = require('slippy-bbox')
```

## var bbox = slippyBBox(x, y, zoom)

Calculate `bbox`, a `[west,south,east,north]` array in lon/lat degrees for the
slippy map coordinates `x,y,zoom`.

# install

```
npm install slippy-bbox
```

# license

BSD
