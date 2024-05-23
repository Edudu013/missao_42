document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');
    let colorIndex = 0;

    button.addEventListener('click', () => {
        const colors = ['white', 'lightblue', 'lightgreen'];
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });
});