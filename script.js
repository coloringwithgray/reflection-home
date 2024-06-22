window.onload = function() {
    const text = document.getElementById('mirrorText');
    text.style.opacity = 1;

    setTimeout(() => {
        document.getElementById('content').style.display = 'block';
    }, 7000); // Adjust this delay based on your animation duration
};
