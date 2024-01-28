let lives = 3;

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
    lives--;

    // Verificar si se quedó sin vidas
    if (lives === 0) {
      result = '¡Perdiste todas tus vidas! El juego ha terminado.';
      document.querySelectorAll('.btn').forEach(btn => (btn.disabled = true));
    }
  }

  document.getElementById('result').innerHTML = `<p>Elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${result}</p>`;
  document.getElementById('lives').innerText = lives;

  // Si quedan vidas, permitir continuar el juego
  if (lives > 0) {
    resetGame();
  }
}

function resetGame() {
  // Puedes agregar lógica adicional para reiniciar el juego si es necesario
}
