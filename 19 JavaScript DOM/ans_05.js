const toggleButton = document.getElementById('toggle-btn');

const img = document.querySelector("[alt='Couple Image']");

const heading = document.querySelector('h1');

function toggleEffect(){
    if(img.hasAttribute('hidden')){
    
        heading.textContent = 'Your Image is visible.';

        img.style.display = 'block';
        img.removeAttribute('hidden');
    
    }
    else{
        
        heading.textContent = 'Your Image is hidden.';
        
        img.style.display = null;
        img.setAttribute('hidden','hidden');
        

    }
}

toggleButton.addEventListener('click',toggleEffect);