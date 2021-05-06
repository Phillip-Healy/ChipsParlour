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
//1=red, 2=yellow, 3=orange, 4=green, 5=blue, 0=purple
//then calls roundOne and makes breaker button visible.
function runGame() {
    $('#game-container').html('<table id="gameBoard"><tr><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td><div class="gamePeg peg1" id="a1"></div></td><td><div class="gamePeg peg1" id="b1"></div></td><td><div class="gamePeg peg1" id="c1"></div></td><td><div class="gamePeg peg1" id="d1"></div></td></tr><tr><td><div class="gamePeg peg2" id="a2"></div></td><td><div class="gamePeg peg2" id="b2"></div></td><td><div class="gamePeg peg2" id="c2"></div></td><td><div class="gamePeg peg2" id="d2"></div></td></tr><tr><td><div class="gamePeg" id="a3"></div></td><td><div class="gamePeg" id="b3"></div></td><td><div class="gamePeg" id="c3"></div></td><td><div class="gamePeg" id="d3"></div></td></tr><tr><td><div class="gamePeg" id="a4"></div></td><td><div class="gamePeg" id="b4"></div></td><td><div class="gamePeg" id="c4"></div></td><td><div class="gamePeg" id="d4"></div></td></tr><tr><td><div class="gamePeg" id="a5"></div></td><td><div class="gamePeg" id="b5"></div></td><td><div class="gamePeg" id="c5"></div></td><td><div class="gamePeg" id="d5"></div></td></tr><tr><td><div class="gamePeg" id="a6"></div></td><td><div class="gamePeg" id="b6"></div></td><td><div class="gamePeg" id="c6"></div></td><td><div class="gamePeg" id="d6"></div></td></tr><tr><td><div class="gamePeg" id="a7"></div></td><td><div class="gamePeg" id="b7"></div></td><td><div class="gamePeg" id="c7"></div></td><td><div class="gamePeg" id="d7"></div></td></tr><tr><td><div class="gamePeg" id="a8"></div></td><td><div class="gamePeg" id="b8"></div></td><td><div class="gamePeg" id="c8"></div></td><td><div class="gamePeg" id="d8"></div></td></tr></table>');

    alert(secretCode);
    roundOne();
    $('.breaker').css('visibility', 'visible');
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
    $('.breaker').click(function(event) {
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
            $('.breaker').css('visibility', 'hidden');
            $('.breakerTwo').css('visibility', 'visible');
            roundTwo();
        }
    });
};

function roundTwo() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a2').click(function() {
        if (ai === 0) {
            $('#a2').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a2').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b2').click(function() {
        if (bi === 0) {
            $('#b2').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b2').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c2').click(function() {
        if (ci === 0) {
            $('#c2').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c2').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d2').click(function() {
        if (di === 0) {
            $('#d2').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d2').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('.breakerTwo').click(function() {
        if (ai == aa) {
            $('#a2').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a2').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b2').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b2').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c2').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c2').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d2').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d2').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            $('.breakerTwo').css('visibility', 'hidden');
            $('.breakerThree').css('visibility', 'visible');
            roundThree();
        }
    });
};

function roundThree() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a3').click(function() {
        if (ai === 0) {
            $('#a3').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a3').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b3').click(function() {
        if (bi === 0) {
            $('#b3').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b3').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c3').click(function() {
        if (ci === 0) {
            $('#c3').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c3').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d3').click(function() {
        if (di === 0) {
            $('#d3').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d3').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('.breakerThree').click(function() {
        if (ai == aa) {
            $('#a3').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a3').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b3').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b3').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c3').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c3').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d3').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d3').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            $('.breakerThree').css('visibility', 'hidden');
            $('.breakerFour').css('visibility', 'visible');
            roundFour();
        }
    });
};

function roundFour() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a4').click(function() {
        if (ai === 0) {
            $('#a4').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a4').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b4').click(function() {
        if (bi === 0) {
            $('#b4').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b4').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c4').click(function() {
        if (ci === 0) {
            $('#c4').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c4').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d4').click(function() {
        if (di === 0) {
            $('#d4').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d4').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('.breakerFour').click(function() {
        if (ai == aa) {
            $('#a4').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a4').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b4').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b4').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c4').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c4').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d4').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d4').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            $('.breakerFour').css('visibility', 'hidden');
            $('.breakerFive').css('visibility', 'visible');
            roundFive();
        }
    });
};

function roundFive() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a5').click(function() {
        if (ai === 0) {
            $('#a5').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a5').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b5').click(function() {
        if (bi === 0) {
            $('#b5').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b5').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c5').click(function() {
        if (ci === 0) {
            $('#c5').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c5').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d5').click(function() {
        if (di === 0) {
            $('#d5').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d5').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('.breakerFive').click(function() {
        if (ai == aa) {
            $('#a5').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a5').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b5').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b5').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c5').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c5').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d5').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d5').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            $('.breakerFive').css('visibility', 'hidden');
            $('.breakerSix').css('visibility', 'visible');
            roundSix();
        }
    });
};

function roundSix() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a6').click(function() {
        if (ai === 0) {
            $('#a6').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a6').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b6').click(function() {
        if (bi === 0) {
            $('#b6').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b6').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c6').click(function() {
        if (ci === 0) {
            $('#c6').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c6').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d6').click(function() {
        if (di === 0) {
            $('#d6').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d6').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('.breakerSix').click(function() {
        if (ai == aa) {
            $('#a6').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a6').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b6').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b6').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c6').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c6').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d6').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d6').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            $('.breakerSix').css('visibility', 'hidden');
            $('.breakerSeven').css('visibility', 'visible');
            roundSeven();
        }
    });
};

function roundSeven() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a7').click(function() {
        if (ai === 0) {
            $('#a7').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a7').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b7').click(function() {
        if (bi === 0) {
            $('#b7').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b7').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c7').click(function() {
        if (ci === 0) {
            $('#c7').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c7').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d7').click(function() {
        if (di === 0) {
            $('#d7').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d7').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('.breakerSeven').click(function() {
        if (ai == aa) {
            $('#a7').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a7').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b7').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b7').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c7').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c7').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d7').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d7').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            $('.breakerSeven').css('visibility', 'hidden');
            $('.breakerEight').css('visibility', 'visible');
            roundEight();
        }
    });
};

function roundEight() {
    var ai = 0;
    var bi = 0;
    var ci = 0;
    var di = 0;


    $('#a8').click(function() {
        if (ai === 0) {
            $('#a8').removeClass('purple').addClass(colorArray[ai]);
                    ai++;
        }
        else {
            $('#a8').removeClass(colorArray[ai-1]).addClass(colorArray[ai]);
            if (ai < 5) {
                ai++;
            }
            else {
                ai = 0;
            }
        }
    });
    $('#b8').click(function() {
        if (bi === 0) {
            $('#b8').removeClass('purple').addClass(colorArray[bi]);
                    bi++;
        }
        else {
            $('#b8').removeClass(colorArray[bi-1]).addClass(colorArray[bi]);
            if (bi < 5) {
                bi++;
            }
            else {
                bi = 0;
            }
        }
    });
    $('#c8').click(function() {
        if (ci === 0) {
            $('#c8').removeClass('purple').addClass(colorArray[ci]);
                    ci++;
        }
        else {
            $('#c8').removeClass(colorArray[ci-1]).addClass(colorArray[ci]);
            if (ci < 5) {
                ci++;
            }
            else {
                ci = 0;
            }
        }
    });
    $('#d8').click(function() {
        if (di === 0) {
            $('#d8').removeClass('purple').addClass(colorArray[di]);
                    di++;
        }
        else {
            $('#d8').removeClass(colorArray[di-1]).addClass(colorArray[di]);
            if (di < 5) {
                di++;
            }
            else {
                di = 0;
            }
        }
    });
    $('.breakerEight').click(function() {
        if (ai == aa) {
            $('#a8').parent().css('background-color', 'green');
            ar = 1;
        }
        else {
            $('#a8').parent().css('background-color', 'red');
            ar = 0;
        }
        if (bi == bb) {
            $('#b8').parent().css('background-color', 'green');
            br = 1;
        }
        else {
            $('#b8').parent().css('background-color', 'red');
            br = 0;
        }
        if (ci == cc) {
            $('#c8').parent().css('background-color', 'green');
            cr = 1;
        }
        else {
            $('#c8').parent().css('background-color', 'red');
            cr = 0;
        }
        if (di == dd) {
            $('#d8').parent().css('background-color', 'green');
            dr = 1;
        }
        else {
            $('#d8').parent().css('background-color', 'red');
            dr = 0;
        }
        if (ar == 1 && br == 1 && cr == 1 && dr == 1) {
            alert("You Win!!!");
        } 
        else {
            alert("You got " + (ar + br + cr + dr) + " correct.");
            $('.breakerEight').css('visibility', 'hidden');
            gameOver();
        }
    });
};

function gameOver() {
    var sollution = ['purple', 'red', 'yellow', 'orange', 'green', 'blue'];
    var answer = [];
    answer += sollution[aa];
    answer += sollution[bb];
    answer += sollution[cc];
    answer += sollution[dd];
    alert("Sorry, you didn't win this time. The correct sollution was: " + answer[0] + " " + answer[1] + " " + answer[2] + " " + answer[3] + ". Try Again!");
    $('#post-game').html('<a href="codebreaker.html" id="retry">Try Again?</a>');
}