const score = 0;

const addAmountPerClick = 1;

const upgradeAmount = 15;

function playSound(sound) {

    new Audio(sound).play();

}

function upgrade() {

    if (score >= upgradeAmount) {

        score = score - upgradeAmount

        upgradeAmount = Math.round(upgradeAmount * 1.5)

        addAmountPerClick = addAmountPerClick + 1

        document.getElementById("score").innerHTML = score;

        document.getElementById("upgradeAmount").innerHTML = upgradeAmount;

        document.getElementById("addAmountPerClick").innerHTML = addAmountPerClick;

        playSound("upgrade.wav")

    } else {

        playSound("no.wav")

    }

}

function addToScore() {

    score += addAmountPerClick;

    document.getElementById("score").innerHTML = score;

    playSound("pickup.wav")

}