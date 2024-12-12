h1 = document.getElementById('heading');
button = document.getElementById("toggle");

button.addEventListener("click", () =>{
    heading.style.color = heading.style.color =="black" ? "white" : "black";
    document.body.style.backgroundColor = document.body.style.backgroundColor =="white" ? "black" : "white";

    heading.innerText = heading.innerText === "This is Light Mode" ? "This is Dark Mode" : "This is Light Mode";
})