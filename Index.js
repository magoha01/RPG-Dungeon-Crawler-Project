
class Room {
    constructor(roomAtt){
        this.roomId = roomAtt.roomId
        this.option1Text = roomAtt.option1Text
        this.option2Text = roomAtt.option2Text
        this.option3Text = roomAtt.option3Text
        this.option4Text = roomAtt.option4Text
        this.roomNorth = roomAtt.roomNorth
        this.roomEast = roomAtt.roomEast
        this.roomWest = roomAtt.roomWest
        this.roomSouth = roomAtt.roomSouth
        this.treasurePresent = roomAtt.treasurePresent


    }
    
    optionOne(){
       if(this.roomNorth != null){
           player.room = this.roomNorth
       } else if(this.roomSouth != null){
        player.room = this.roomSouth
       } else if(this.roomEast != null){
        player.room = this.roomEast
       } else if(this.roomEast != null){
        player.room = this.roomSouth
       }
       let room = player.room
       if(roomArr[room].option1Text != null){
    document.getElementById("roomOption1").innerHTML = `${roomArr[room].option1Text}`;
    }
    if(roomArr[room].option2Text != null){
    document.getElementById("roomOption2").innerHTML = `${roomArr[room].option2Text}`;
    } else{
        document.getElementById("roomOption2").innerHTML = '';
    }
    if(roomArr[room].option3Text != null){
    document.getElementById("roomOption3").innerHTML = `${roomArr[room].option3Text}`;
    } else{
        document.getElementById("roomOption3").innerHTML = '';
    }
    if(roomArr[room].option4Text != null){
        document.getElementById("roomOption4").innerHTML = `${roomArr[room].option4Text}`;
        }  else{
            document.getElementById("roomOption4").innerHTML = '';
        }
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
    }
    optionTwo(){
        if(this.roomSouth != null && this.roomNorth != null){
         player.room = this.roomSouth
        }else if(this.roomEast != null){
         player.room = this.roomEast
        } else if(this.roomWest != null){
         player.room = this.roomWest
        }
        let room = player.room
        if(roomArr[room].option1Text != null){
     document.getElementById("roomOption1").innerHTML = `${roomArr[room].option1Text}`;
     }
     if(roomArr[room].option2Text != null){
     document.getElementById("roomOption2").innerHTML = `${roomArr[room].option2Text}`;
     } else{
         document.getElementById("roomOption2").innerHTML = '';
     }
     if(roomArr[room].option3Text != null){
     document.getElementById("roomOption3").innerHTML = `${roomArr[room].option3Text}`;
     } else{
         document.getElementById("roomOption3").innerHTML = '';
     }
     if(roomArr[room].option4Text != null){
         document.getElementById("roomOption4").innerHTML = `${roomArr[room].option4Text}`;
         }  else{
             document.getElementById("roomOption4").innerHTML = '';
         }
         document.getElementById("roomIdTester").innerHTML = `${player.room}`
     }
}
function option1(){
        let room = player.room
        roomArr[room].optionOne()
}
function option2(){
    let room = player.room
        roomArr[room].optionTwo()
}
startingRoom = new Room({
    roomId: 0, 
    option2Text:'Advance West to the next room!', 
    option3Text:'Loot the Chest!', 
    option4Text:null, 
    roomNorth: 1, 
    roomWest: 2, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: true
})
secondRoom = new Room({
    roomId: 1, 
    option1Text: 'Advance South to the next room!', 
    option2Text:'Advance West to the next room!', 
    option3Text: `Loot the Chest!`, 
    option4Text:null, 
    roomNorth: null, 
    roomWest: 3, 
    roomEast: null, 
    roomSouth: 0,
    treasurePresent: true
})
thirdRoom = new Room({
    roomId: 2, 
    option1Text: 'Advance North to the next room!', 
    option2Text: 'Advance East to the next room!', 
    option3Text:null, 
    option4Text:null, 
    roomNorth: 3, 
    roomWest: null, 
    roomEast: 0, 
    roomSouth: null,
    treasurePresent: true
})
fourthRoom = new Room({
    roomId:3, 
    option1Text: 'Advance South to the next room!', 
    option2Text: 'Advance East to the next room!', 
    option3Text:null, 
    option4Text:null, 
    roomNorth: null, 
    roomWest: null,
    roomEast: 1, 
    roomSouth: 2,
    treasurePresent: true
})
roomArr= [startingRoom, secondRoom, thirdRoom, fourthRoom]

 let toggle = false
function Button ()  {
    if(toggle === false){
    document.getElementById("tester").innerHTML = "New text!";
    toggle = true
} else {
    document.getElementById("tester").innerHTML = null;
    toggle = false
}
document.getElementById("testTest").innerHTML = toggle;
}

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
    if(roomArr[room].option1Text != null){
        document.getElementById("roomOption1").innerHTML = `${roomArr[room].option1Text}`;
        }
        if(roomArr[room].option2Text != null){
        document.getElementById("roomOption2").innerHTML = `${roomArr[room].option2Text}`;
        }
        if(roomArr[room].option3Text != null){
        document.getElementById("roomOption3").innerHTML = `${roomArr[room].option3Text}`;
        }
        if(roomArr[room].option4Text != null){
            document.getElementById("roomOption3").innerHTML = `${roomArr[room].option4Text}`;
        }
}

function stat1Increment(){
    player.stat1++
    document.getElementById("cSheetStatField1").innerHTML = `Stat 1: ${player.stat1}`;
}