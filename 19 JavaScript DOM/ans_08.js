const h1 =document.querySelector('h1');
const body = document.body;
console.log(h1);


setInterval(()=>{

let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();

h1.textContent=`${hour} : ${minute} : ${second}`;
body.style.backgroundColor = `#${hour}${minute}${second}`
},1000)