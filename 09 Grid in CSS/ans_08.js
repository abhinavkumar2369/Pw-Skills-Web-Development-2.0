const colorCards = document.querySelectorAll('.color-card');
const modal = document.getElementById('colorModal');
const selectedColorDisplay = document.getElementById('selectedColorDisplay');
const colorValue = document.getElementById('colorValue');
        

colorCards.forEach(card => {
    card.addEventListener('click', () => {
        const color = card.getAttribute('data-color');
        openModal(color);
    });
});
        

function openModal(color) {
    selectedColorDisplay.style.backgroundColor = color;
    colorValue.textContent = color;
    modal.style.display = 'flex';
}
        
function closeModal() {
    modal.style.display = 'none';
}

function copyToClipboard() {
    const colorText = colorValue.textContent;
    navigator.clipboard.writeText(colorText).then(() => {
        alert('Color code copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}
        
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});