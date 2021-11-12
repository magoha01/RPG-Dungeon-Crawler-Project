
class Room {
    constructor(roomAtt){
        this.roomId = roomAtt.roomId
    }
}

 let toggle = false
function Button ()  {
    // let toggle = false
    if(toggle === false){
    document.getElementById("tester").innerHTML = "New text!";
    toggle = true
} else {
    document.getElementById("tester").innerHTML = null;
    toggle = false
}
document.getElementById("testTest").innerHTML = toggle;
}

startingRoom = new Room({roomId:'testing room ID'})
console.log(startingRoom.roomId)
// function updateStats() {
// document.getElementById("stat1").innerHTML = "New text!"
// }
// updateStats()
// let test = document.getElementById("rooms");
// console.log(test)
// document.addEventListener()
startingRoom.roomId = 'Testing Testing'
let player = {
    playerName: 'Ted',
    stat1: 5,
    stat2: 4,
    stat3: 7,
    hpCurrent: 10,
    hpTotal: 15,
    armor: 20,
    dmg: 22,
    room: 1,

}

function stat1Increment(){
    player.stat1++
    document.getElementById("cSheetStatField1").innerHTML = `Stat 1: ${player.stat1}`;
}
// stat1Increment()
// console.log(player.stat1)