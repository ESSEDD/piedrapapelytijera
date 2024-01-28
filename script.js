function playGame(playerChoice) {
  const choices = ['piedra', 'papel', 'tijera'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  
  let result = '';

  if (playerChoice === computerChoice) {
    result = 'Empate';
  } else if (
    (playerChoice === 'piedra' && computerChoice === 'tijera') ||
    (playerChoice === 'papel' && computerChoice === 'piedra') ||
    (playerChoice === 'tijera' && computerChoice === 'papel')
  ) {
    result = '¡Ganaste!';
  } else {
    result = '¡Perdiste!';
  }

  document.getElementById('result').innerHTML = `<p>Elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${result}</p>`;
}
