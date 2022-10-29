var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["id"] = document.getElementById("id").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["Last-Name"] = document.getElementById("Last-Name").value;
    formData["Capsule"] = document.getElementById("Capsule").value;
    formData["age"] = document.getElementById("age").value;
    formData["City"] = document.getElementById("City").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["Hobby"] = document.getElementById("Hobby").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Name;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Last-Name;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Capsule;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.City;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.gender;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = data.Hobby;
    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Last-Name").value = "";
    document.getElementById("Capsule").value = "";
    document.getElementById("age").value = "";
    document.getElementById("City").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("Hobby").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Last-Name").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Capsule").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("City").value = selectedRow.cells[5].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[6].innerHTML;
    document.getElementById("Hobby").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Last-Name;
    selectedRow.cells[3].innerHTML = formData.Capsule;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.City;
    selectedRow.cells[6].innerHTML = formData.gender;
    selectedRow.cells[7].innerHTML = formData.Hobby;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("id").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}