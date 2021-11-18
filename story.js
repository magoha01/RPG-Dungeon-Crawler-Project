

const storyText = [];

const gameIntro = 'As a simple farm hand in the land of Lambastia, your daily life is full of heavy chores and physical labour. You know there must be more to life. You crave adventure, admiration and most of all...riches!' <br> 'Once a blue moon in the lands of Lambastia, there is a competition to determine a new leader. It is a matter of learning agility determined through a battle of wills. Every eligible person is welcome to the Ternary Estate to compete.'

const room1Intro = 'Today is your turn to compete! You walk into the Estate to find a standalone building with a door. Nervous, but ready to prevail, you enter the first room. You see a table with a single candle in the darkness...a note that reads “who are you?”';

function gameStart(){
player = {
        playerName: 'Bill the Barbarian',
        strength: 5,
        dexterity: 4,
        constitution: 3,
        hpCurrent: 10,
        hpTotal: 10,
        armor: 15,
        tempArmor: 0,
        dmg: 4,
        room: 0,
        inventory: []
    }
document.getElementById("storyContainer").innerHTML = gameIntro;
}

function classChoice(){

}

function warrior(){
return 'Ah yes! You are a warrior bound by your brute strength and will to succeed. Welcome.';
}

function ranger(){
return 'Ah yes! You are a ranger tied to the forest with your trusty shortbow at your side. Welcome.'
}

function rogue(){
return 'Ah yes! You are a rogue, an assassin of the night, with your small blade to destroy anything in your path. Welcome.'
}
