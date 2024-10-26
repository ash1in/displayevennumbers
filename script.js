function getEvenNums(num) {
    const outputDiv = document.getElementById('output');

    for (let i = 0; i <= num; i += 2) {
        const evenNum = document.createElement('p');
        evenNum.textContent = i;
        outputDiv.appendChild(evenNum);
    }
}
