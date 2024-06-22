window.onload = function() {
    const text = document.getElementById('mirrorText');
    text.style.opacity = 1;

    setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        document.getElementById('content').style.display = 'block';
    }, 3000);
};

