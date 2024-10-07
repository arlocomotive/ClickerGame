
const HTMLScore = document.getElementById("score")
const HTMLUpgrade = document.getElementById("upgradeAmount")
const HTMLClickValue = document.getElementById("clickValue")

var addAmountPerClick = 1;
var upgradeAmount = 15;
var score = 0;

function playSound(sound) {

    new Audio(sound).play();

}

function upgrade() {

    if (score >= upgradeAmount) {

        score -= upgradeAmount
        upgradeAmount = Math.ceil(upgradeAmount * 1.5)
        addAmountPerClick += 1

        HTMLScore.innerHTML = score;
        HTMLUpgrade.innerHTML = upgradeAmount;
        HTMLClickValue.innerHTML = addAmountPerClick;

        playSound("upgrade.wav")

    } else {

        playSound("no.wav")

    }

}

function addToScore() {

    score += addAmountPerClick;

    document.getElementById("score").innerHTML = score;

}
