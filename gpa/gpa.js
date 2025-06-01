function getGrades(inputSelector) {
  const grades = document.querySelector(inputSelector).value;
  const gradesArray = grades.split(",");
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  return cleanGrades;
}


function lookupGrade(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  } else {
    points = 0; 
  }
  return points;
}

function calculateGpa(grades) {
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  const total = gradePoints.reduce((sum, point) => sum + point, 0);
  const gpa = total / gradePoints.length;
  return gpa;
}

function outputGpa(gpa, selector) {
  const outputElement = document.querySelector(selector);
  outputElement.innerText = `Your GPA is: ${gpa}`;
}

function clickHandler() {
  const grades = getGrades("#grades");
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);