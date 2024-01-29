function setTheme(theme) {
    document.body.className = `theme-container ${theme}`;
    document.getElementById('main-section').style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--bg-color');
}