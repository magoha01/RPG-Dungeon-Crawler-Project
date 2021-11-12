
class Room {
    constructor(roomAtt){
        this.roomId = roomAtt.roomId
        this.option1Text = roomAtt.option1Text
        this.roomNorth = roomAtt.roomNorth
        this.roomEast = roomAtt.roomEast
        this.roomWest = roomAtt.roomWest
        this.roomSouth = roomAtt.roomSouth

    }
    optionOne(){


    }
}
startingRoom = new Room({roomId:'1', option1Text: 'Advance to the next room!', roomNorth: 2, roomWest: 3, roomEast: null, roomSouth: null})
roomArr= [startingRoom]

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
    room: 0,

}
function explore(){
    let room = player.room
    document.getElementById("roomOption1").innerHTML = `${roomArr[room].option1Text}`;
    document.getElementById("roomOption2").innerHTML = `Stat 2: ${player.stat2}`;
    if(player.stat4 != null){
    document.getElementById("roomOption3").innerHTML = `Stat 4: ${player.stat4}`;
    }
}
function option1(){
    let room = player.room
    roomArr[room].firstOption()
}

function stat1Increment(){
    player.stat1++
    document.getElementById("cSheetStatField1").innerHTML = `Stat 1: ${player.stat1}`;
}
// stat1Increment()
// console.log(player.stat1)