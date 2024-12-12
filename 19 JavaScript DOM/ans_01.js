// ----- Selecting Uploading Image -----
const imageFile = document.getElementById('image-file');

// ------- Image Conponent --------
const img = document.querySelector('img');

// -------- Event Listener --------
imageFile.addEventListener('change', function() {
    const file = this.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function() {
        img.src = reader.result;
    });

    reader.readAsDataURL(file);
});