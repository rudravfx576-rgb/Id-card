const students = {
    "1": {name: "RUDRA BARIK", estd: "2025", gender: "male", dist: "nayagada", mob: "8260557695", photo: "1.jpg"},
    "1": {name: "KANHA PRADHAN", estd: "2025", gender: "male", dist: "nayagada", mob: "6370728974", photo: "2.jpg"},
    "1": {name: "LOCHAN BISOI", estd: "2025", gender: "male", dist: "nayagada", mob: "8260557695", photo: "3.jpg"},
    "1": {name: "PRATAP NAYAK", estd: "2025", gender: "male", dist: "nayagada", mob: "8258657695", photo: "4.jpg"},
};
const urlParams = new URLSearchParams(Window.location.search);
const studentId = urlParams.get('id');

if (students[studentId]) {
    document.getElementById('name').innerText = students[studentId].name;
    document.getElementById('estd').innerText = students[studentId].name;
    document.getElementById('gender').innerText = students[studentId].name;
    document.getElementById('blood').innerText = students[studentId].name;
    document.getElementById('dist').innerText = students[studentId].name;
    document.getElementById('mob').innerText = students[studentId].name;
    document.getElementById('photo').src = students[studentId].name;
} else {
    document.querySelector('.card').innerHTML = "<h3>ID</h3>";
}