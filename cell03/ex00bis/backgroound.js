$(document).ready(function() {
    let colorIndex = 0;
    const colors = ['white', 'lightblue', 'lightgreen'];

    $('#colorButton').click(function() {
        colorIndex = (colorIndex + 1) % colors.length;
        $('body').css('background-color', colors[colorIndex]);
    });
});
