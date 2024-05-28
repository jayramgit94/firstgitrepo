function generateTable() {
    const number = document.getElementById('numberInput').value;
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output

    if (number) {
        let table = '<table>';
        for (let i = 1; i <= 10; i++) {
            table += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
        }
        table += '</table>';
        output.innerHTML = table;
    } else {
        output.innerHTML = 'Please enter a number.';
    }
}
