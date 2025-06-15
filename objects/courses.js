const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
    sectionNum: 1,
    roomNum: "STC 535",
    enrolled: 26, 
    days: "TTh",
    instructor: "Bro T"
  }, 
  {
    sectionNum: 2, 
    roomNum: "STC 347",
    enrolled: 26, 
    days: "TTh",
    instructor: "Sis A"
  }],
  changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      renderSections(this.sections);
    }
  }
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return`<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join(" ");
}

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
  if (!isNaN(sectionNum)) {
    aCourse.changeEnrollment(sectionNum, true);
  } else {
    alert("Please enter a valid section number.");
  }
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
  if (!isNaN(sectionNum)) {
    aCourse.changeEnrollment(sectionNum, false);
  } else {
    alert("Please enter a valid section number.");
  }
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);