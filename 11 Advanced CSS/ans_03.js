document.querySelectorAll('.mark-done-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.target.textContent = 'Done!';
      e.target.style.backgroundColor = '#2ecc71';
      setTimeout(() => {
        e.target.textContent = 'Mark As Done';
        e.target.style.backgroundColor = '#4aea9a';
      }, 1000);
    });
});