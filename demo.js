document.addEventListener("DOMContentLoaded", function() {
    var hocsinhs = [
        { id: 1, name: "a", sdt: "0921232132" },
        { id: 2, name: "b", sdt: "1234567789" },
        { id: 3, name: "c", sdt: "1231254235" }
    ];

    var tableBody = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

    hocsinhs.forEach(function(hocsinh) {
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = hocsinh.id;
        row.insertCell(1).textContent = hocsinh.name;
        row.insertCell(2).textContent = hocsinh.sdt;
    })
})