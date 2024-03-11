let today = new Date().toISOString().slice(0, 10);
let age;
if (Number(today.slice(5, 7)) > 2) {
    age = Number(today.slice(0, 4)) - 2000;
} else {
    age = Number(today.slice(0, 4)) - 2001;
}
document.getElementById('age').innerHTML = `${age} years old. Colombian.`