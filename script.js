let students = [];

function addStudent() {
    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("studentName").value.trim();
    const course = document.getElementById("course").value.trim();

    if (!id || !name || !course) {
        showMessage("Please fill all fields.");
        return;
    }

    const existingStudent = students.find(student => student.id === id);

    if (existingStudent) {
        showMessage("Student ID already exists.");
        return;
    }

    students.push({
        id: id,
        name: name,
        course: course
    });

    clearForm();
    displayStudents();
    showMessage("Student added successfully.");
}

function displayStudents(studentList = students) {
    const tableBody = document.getElementById("studentTableBody");

    tableBody.innerHTML = "";

    studentList.forEach(student => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>
            <td>
                <button onclick="deleteStudent('${student.id}')">
                    Delete
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function searchStudent() {
    const searchId = document.getElementById("searchId").value.trim();

    if (!searchId) {
        showMessage("Please enter Student ID.");
        return;
    }

    const student = students.find(student => student.id === searchId);

    if (student) {
        displayStudents([student]);
        showMessage("Student found.");
    } else {
        displayStudents([]);
        showMessage("Student not found.");
    }
}

function deleteStudent(id) {
    students = students.filter(student => student.id !== id);

    displayStudents();
    showMessage("Student deleted successfully.");
}

function clearForm() {
    document.getElementById("studentId").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("course").value = "";
}

function showMessage(message) {
    document.getElementById("message").textContent = message;
}