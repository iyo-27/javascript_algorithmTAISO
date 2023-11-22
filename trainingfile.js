function vdiff(p1, p2){
    var [x1, y1] = p1
    var [x2, y2] = p2
    return [x2-x1, y2-y1]
}

function prod(p1, p2){
    var [x1, y1] = p1
    var [x2, y2] = p2

    return x1 * y2 - y1 * x2 
}

var menseki = (p1, p2, p3) =>
  Math.abs(prod(vdiff(p3, p1), vdiff(p2, p1))) / 2

var p1 = [3, 3]
var p2 = [2, 1]
var p3 = [1, 7]

console.log(menseki(p1, p2, p3))