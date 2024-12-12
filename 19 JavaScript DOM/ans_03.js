const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const count = document.getElementById('count');

let counter = 0;

add.addEventListener('click', function() {
    counter++;
    count.innerText = counter;
});

subtract.addEventListener('click', function() {
    if(counter <= 0) {
        alert("Counter is goinng beyond 0");
        return;
    }
    counter--;
    count.innerText = counter;
});