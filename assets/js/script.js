$('#tutorial').click(function() {
    $('#how-to').html("<img src='assets/images/CodeBreakerPlay.png' alt='code breaker game' role='presentation'>Code Breaker</img>");
});

$('#start-game').click(runGame);

function runGame() {
    $('#game-container').html('<table id="gameBoard"><tr><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td><div class="gamePeg peg1" id="a1"></div></td><td><div class="gamePeg peg1" id="b1"></div></td><td><div class="gamePeg peg1" id="c1"></div></td><td><div class="gamePeg peg1" id="d1"></div></td></tr><tr><td><div class="gamePeg peg2" id="a2"></div></td><td><div class="gamePeg peg2" id="b2"></div></td><td><div class="gamePeg peg2" id="c2"></div></td><td><div class="gamePeg peg2" id="d2"></div></td></tr><tr><td><div class="gamePeg" id="a3"></div></td><td><div class="gamePeg" id="b3"></div></td><td><div class="gamePeg" id="c3"></div></td><td><div class="gamePeg" id="d3"></div></td></tr><tr><td><div class="gamePeg" id="a4"></div></td><td><div class="gamePeg" id="b4"></div></td><td><div class="gamePeg" id="c4"></div></td><td><div class="gamePeg" id="d4"></div></td></tr><tr><td><div class="gamePeg" id="a5"></div></td><td><div class="gamePeg" id="b5"></div></td><td><div class="gamePeg" id="c5"></div></td><td><div class="gamePeg" id="d5"></div></td></tr><tr><td><div class="gamePeg" id="a6"></div></td><td><div class="gamePeg" id="b6"></div></td><td><div class="gamePeg" id="c6"></div></td><td><div class="gamePeg" id="d6"></div></td></tr><tr><td><div class="gamePeg" id="a7"></div></td><td><div class="gamePeg" id="b7"></div></td><td><div class="gamePeg" id="c7"></div></td><td><div class="gamePeg" id="d7"></div></td></tr><tr><td><div class="gamePeg" id="a8"></div></td><td><div class="gamePeg" id="b8"></div></td><td><div class="gamePeg" id="c8"></div></td><td><div class="gamePeg" id="d8"></div></td></tr></table>');
    roundOne();
};

function roundOne() {
    $('.peg1').click(function() {
        $(this).addClass('red');
    });
};