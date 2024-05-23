$(document).ready(function() {
    $('#calculateButton').click(function() {
        const leftOperand = parseInt($('#leftOperand').val(), 10);
        const operator = $('#operator').val();
        const rightOperand = parseInt($('#rightOperand').val(), 10);

        if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
            alert('Error :(');
            console.log('Error :(');
            return;
        }

        let result;
        switch (operator) {
            case '+':
                result = leftOperand + rightOperand;
                break;
            case '-':
                result = leftOperand - rightOperand;
                break;
            case '*':
                result = leftOperand * rightOperand;
                break;
            case '/':
                if (rightOperand === 0) {
                    alert('It’s over 9000!');
                    console.log('It’s over 9000!');
                    return;
                }
                result = leftOperand / rightOperand;
                break;
            case '%':
                if (rightOperand === 0) {
                    alert('It’s over 9000!');
                    console.log('It’s over 9000!');
                    return;
                }
                result = leftOperand % rightOperand;
                break;
            default:
                alert('Error :(');
                console.log('Error :(');
                return;
        }

        alert('Result: ' + result);
        console.log('Result: ' + result);
    });

    setInterval(function() {
        alert('Please, use me...');
    }, 30000);
});
