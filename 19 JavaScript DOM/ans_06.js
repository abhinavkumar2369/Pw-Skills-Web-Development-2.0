const body = document.body;

const heading = document.createElement('h2');

heading.textContent='Which is favourite Programming Language: ';

const select = document.createElement('select');

const option1 =  document.createElement('option');
const option2 =  document.createElement('option');
const option3 =  document.createElement('option');
const option4 =  document.createElement('option');

option1.text = 'Javascript';
option2.text = 'Java';
option3.text = 'Python';
option4.text = 'C++';

heading.style.display = 'inline';

body.appendChild(heading);

const optionLists = [option1,option2,option3,option4];


for(let option of optionLists){
    select.appendChild(option);
}

body.appendChild(select);