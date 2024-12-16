const lists = document.getElementsByTagName('li');
const input = document.getElementsByName('item');

function check(){
    let keyword = input[0].value;
    const flag = 'gi'; 
    let regEx = new RegExp(keyword,flag)

    let isKeywordFound = false;
   
    for(let li of lists){
       
       isKeywordFound = regEx.test((li.textContent));
        
        li.style.display='none';

        if(isKeywordFound){
            li.style.display='block';
            console.log(li.textContent);
        }
    }
    
}

console.log(input[0]);

input[0].addEventListener('input',check);

