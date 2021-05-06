$('#tutorial').click(function() {
    $('#how-to').html("<img src='assets/images/CodeBreakerPlay.png' alt='code breaker game' role='presentation'>Code Breaker</img>");
});

$('#start-game').click(runGame);
var colorArray = ['red','yellow','orange','green','blue','purple']; // colorArray idea given by igor_ci on interactive-frontend board of slack.
var secretCode = [];
for (let i=0; i < 4; i++) {
    x = Math.floor(Math.random() * 5);
    secretCode += x;
}
var aa = secretCode[0];
var bb = secretCode[1];
var cc = secretCode[2];
var dd = secretCode[3];

var ar = 0;
var br = 0;
var cr = 0;
var dr = 0;

    
// runs game on click of start-game button. creates a secret code in numbers which will be checked against as player attempts to break the code.
//0=red, 1=yellow, 2=orange, 3=green, 4=blue, 5=purple
//then calls roundOne and makes breaker button visible.
function runGame() {
    $('#game-container').html('<table id="gameBoard"><tr><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td><div class="gamePeg peg1" id="a1"></div></td><td><div class="gamePeg peg1" id="b1"></div></td><td><div class="gamePeg peg1" id="c1"></div></td><td><div class="gamePeg peg1" id="d1"></div></td></tr><tr><td><div class="gamePeg peg2" id="a2"></div></td><td><div class="gamePeg peg2" id="b2"></div></td><td><div class="gamePeg peg2" id="c2"></div></td><td><div class="gamePeg peg2" id="d2"></div></td></tr><tr><td><div class="gamePeg" id="a3"></div></td><td><div class="gamePeg" id="b3"></div></td><td><div class="gamePeg" id="c3"></div></td><td><div class="gamePeg" id="d3"></div></td></tr><tr><td><div class="gamePeg" id="a4"></div></td><td><div class="gamePeg" id="b4"></div></td><td><div class="gamePeg" id="c4"></div></td><td><div class="gamePeg" id="d4"></div></td></tr><tr><td><div class="gamePeg" id="a5"></div></td><td><div class="gamePeg" id="b5"></div></td><td><div class="gamePeg" id="c5"></div></td><td><div class="gamePeg" id="d5"></div></td></tr><tr><td><div class="gamePeg" id="a6"></div></td><td><div class="gamePeg" id="b6"></div></td><td><div class="gamePeg" id="c6"></div></td><td><div class="gamePeg" id="d6"></div></td></tr><tr><td><div class="gamePeg" id="a7"></div></td><td><div class="gamePeg" id="b7"></div></td><td><div class="gamePeg" id="c7"></div></td><td><div class="gamePeg" id="d7"></div></td></tr><tr><td><div class="gamePeg" id="a8"></div></td><td><div class="gamePeg" id="b8"></div></td><td><div class="gamePeg" id="c8"></div></td><td><div class="gamePeg" id="d8"></div></td></tr></table>');

    alert(secretCode);
    roundOne();
    $('#breaker').css('visibility', 'visible');
};


// allows player to interact with line one of buttons to guess against secret code when they submit via breaker button.
//breaker button should not allowplayers to submit if they have not changed all pegs. 
//Player should not be able to change colors of pegs on different lines.
function roundOne() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a1').click(function() {
        if (ai === 0) {
            $('#a1').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a1').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b1').click(function() {
        if (bi === 0) {
            $('#b1').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b1').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c1').click(function() {
        if (ci === 0) {
            $('#c1').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c1').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d1').click(function() {
        if (di === 0) {
            $('#d1').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d1').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('#breaker').click(function() {
        if (ai == aa) {
            $('#a1').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a1').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b1').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b1').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c1').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c1').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d1').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d1').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            roundTwo();
        }
    });
};
