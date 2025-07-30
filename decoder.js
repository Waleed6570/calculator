function decodeCode() {
  const code = parseInt(document.getElementById('codeInput').value);
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (isNaN(code) || code < 4 || code > 12) {
    resultDiv.innerHTML = `<p style="color:red;">Invalid code. Please enter a number between 4 and 12.</p>`;
    return;
  }

  // Try all combinations (1 to 3 for 4 questions)
  let found = false;
  for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 3; b++) {
      for (let c = 1; c <= 3; c++) {
        for (let d = 1; d <= 3; d++) {
          if (a + b + c + d === code) {
            resultDiv.innerHTML += `
              <p><strong>Decoded Answers:</strong></p>
              <ul style="text-align:left">
                <li>Q1 Option: ${a}</li>
                <li>Q2 Option: ${b}</li>
                <li>Q3 Option: ${c}</li>
                <li>Q4 Option: ${d}</li>
              </ul>
              <p style="color:green;"><strong>✔ Match Found!</strong></p>
            `;
            found = true;
            return;
          }
        }
      }
    }
  }

  if (!found) {
    resultDiv.innerHTML = `<p style="color:red;">No valid answer combination found.</p>`;
  }
}
