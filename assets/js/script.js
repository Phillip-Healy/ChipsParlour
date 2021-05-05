$('#tutorial').click(function() {
    $('#how-to').html("<img src='assets/images/CodeBreakerPlay.png' alt='code breaker game' role='presentation'>Code Breaker</img>");
});

$('#start-game').click(function() {
    $('input[name="difficulty"]:checked').each(function(index) {
        let gameMode = $this.value();
        runGame(gameMode);
    });
});

function runGame(gameMode) {
    
}