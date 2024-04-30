const form = document.getElementById('employeeForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const departmentInput = document.getElementById('departmentInput');
const gradeInput = document.getElementById('gradeInput');
const employeeList = document.getElementById('employeeList');

let employees = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const department = departmentInput.value;
    const grade = gradeInput.value;

    if (name && email && phone && department && grade) {
        addEmployee(name, email, phone, department, grade);
        renderEmployees();
        form.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

function addEmployee(name, email, phone, department, grade) {
    employees.push({ name, email, phone, department, grade });
}

function renderEmployees() {
    employeeList.innerHTML = '';
    employees.forEach(function(employee, index) {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${employee.name}</strong> (${employee.email}) - ${employee.phone} - ${employee.department} - ${employee.grade}
            <button onclick="editEmployee(${index})">Edit</button>
            <button onclick="deleteEmployee(${index})">Delete</button>
        `;
        employeeList.appendChild(li);
    });
}

function editEmployee(index) {
    const employee = employees[index];
    nameInput.value = employee.name;
    emailInput.value = employee.email;
    phoneInput.value = employee.phone;
    departmentInput.value = employee.department;
    gradeInput.value = employee.grade;

    employees.splice(index, 1);
    renderEmployees();
}


function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployees();
}
