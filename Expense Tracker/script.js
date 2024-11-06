const task = document.getElementById("task");
const expense = document.getElementById("expense");
const date = document.getElementById("date");
let total = 0;
function submit() {
  let taskValue = task.value;
  let expenseValue = expense.value;
  let dateValue = date.value;
  if (taskValue === "" || expenseValue === "" || dateValue === "") {
    alert("Enter Valid Task Amount OR Date");
  } else {
    let amount = Number(expenseValue);
    total += amount;
    let row = document.getElementById("tablebody");
    let newRow = row.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    cell1.innerHTML = taskValue;
    cell2.innerHTML = "CREDITTED";
    cell3.innerHTML = expenseValue;
    cell4.innerHTML = dateValue;
    cell5.innerHTML = total;
  }
}
function remove() {
  let taskValue = task.value;
  let expenseValue = expense.value;
  let dateValue = date.value;
  if (taskValue === "" || expenseValue === "" || dateValue === "") {
    alert("Enter Valid Task Amount OR Date");
  } else {
    let amount = Number(expenseValue);
    total -= amount;
    let row = document.getElementById("tablebody");
    let newRow = row.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    cell1.innerHTML = taskValue;
    cell2.innerHTML = "DEBITTED";
    cell3.innerHTML = expenseValue;
    cell4.innerHTML = dateValue;
    cell5.innerHTML = total;
  }
}
