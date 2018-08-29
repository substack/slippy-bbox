var PI = Math.PI
module.exports = function (x, y, z) {
  var p2z = Math.pow(2.0,z)
  return [
     x / p2z * 360.0 - 180, // west
     Math.atan(Math.sinh(PI-(2.0*PI*(y+1))/p2z))/PI*180.0, // south
     (x+1) / p2z * 360.0 - 180, // east
     Math.atan(Math.sinh(PI-(2.0*PI*y)/p2z))/PI*180.0 // north
  ]
}
