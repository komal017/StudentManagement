let students = [];
function addStudent() {
    const id = document.getElementById("studentId").value;
    const name = document.getElementById("studentName").value;
    const course = document.getElementById("course").value;

    if (id === "" || name === "" || course === "") {
        alert("Please fill all fields.");
        return;
    }

    students.push({
        id: id,
        name: name,
        course: course
    });

    displayStudents();

    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("course").value = "";
}

function displayStudents() {
    const studentList = document.getElementById("studentList");

    studentList.innerHTML = "";

    students.forEach(student => {
        studentList.innerHTML += `
            <div class="student">
                <p><strong>Student ID:</strong> ${student.id}</p>
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>Course:</strong> ${student.course}</p>
            </div>
        `;
    });
}