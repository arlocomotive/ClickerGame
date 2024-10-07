
const HTMLScore = document.getElementById("score")
const HTMLUpgrade = document.getElementById("upgradeAmount")
const HTMLClickValue = document.getElementById("clickValue")

const storage = window.localStorage
const storageEnabled = (typeof(storage) !== "undefined")

if (storageEnabled) {
    if (!storage.score) {
        storage.score = 0;
    }
    if (!storage.clickValue) {
        storage.clickValue = 1;
    }
}

var clickValue = (Number(storage.clickValue) || 1);
var upgradeAmount = Infinity; // before data loads
var score = (Number(storage.score) || 0);

function playSound(sound) {

    new Audio(sound).play();

}

function updateHTML() {

    HTMLScore.innerHTML = score;
    HTMLUpgrade.innerHTML = upgradeAmount;
    HTMLClickValue.innerHTML = clickValue;

}

function saveData() {

    if (storageEnabled) {
        storage.score = score;
        storage.clickValue = clickValue;
    }

}

function updateUpgradeAmount() {

    upgradeAmount = Math.ceil((15 + (clickValue ** 2)));

}

function upgrade() {

    if (score >= upgradeAmount) {

        score -= upgradeAmount
        clickValue += 1
        updateUpgradeAmount()

        updateHTML()
        saveData()

        playSound("upgrade.wav")

    } else {

        playSound("no.wav")

    }

}

function addToScore() {

    score += clickValue;

    saveData()

    HTMLScore.innerHTML = score;

}

updateUpgradeAmount()
updateHTML()
