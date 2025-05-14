const pi = 3.14;
let radius = 3;
let area = 0;

console.log(pi)
console.log(radius)
console.log(area)

area = radius * radius * pi;

console.log(area)

radius = 4;
area = radius * radius * pi;

console.log(area)
console.log(radius)

function circleArea(radius) {
    let circle_area = radius * radius * pi;
    return circle_area
}

console.log('Using the function:')

debugger;
area = circleArea(3)
console.log(area)

area = circleArea(4)
console.log(area)

console.log('Audrey Rentz')