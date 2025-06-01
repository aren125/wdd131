// #1 - Audrey Rentz

const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

// #2

const grades = ['A', 'B', 'A'];

function gradeToPoints(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    }   else if (grade === 'B') {
        points = 3
    }
    return points;
}
const gpaPoints = grades.map(gradeToPoints);

// #3
const totalPoints = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = totalPoints / gpaPoints.length;

// #4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

// #5

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);