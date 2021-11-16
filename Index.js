
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
        this.explored = false
        this.enemyPresent = roomAtt.enemyPresent
        this.mapId = roomAtt.mapId
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
    //    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = black
       let room = player.room;
       
       if(roomArr[room].option1Text != null){
    document.getElementById("roomOption1").innerHTML = `${roomArr[room].option1Text}`;
    }
    if(roomArr[room].option2Text != null){
    document.getElementById("roomOption2").innerHTML = `${roomArr[room].option2Text}`;
    } 
    // else if(roomArr[room].treasurePresent != null){
        // document.getElementById("roomOption2").innerHTML = 'Loot the Chest!';
    // } 
    else {
       document.getElementById("roomOption2").innerHTML = '';
    }
    if(roomArr[room].option3Text != null){
    document.getElementById("roomOption3").innerHTML = `${roomArr[room].option3Text}`;
    // } else if(roomArr[room].treasurePresent != null){
        // document.getElementById("roomOption3").innerHTML = 'Loot the Chest!';
    } else {
       document.getElementById("roomOption3").innerHTML = '';
    }
    if(roomArr[room].option4Text != null){
        document.getElementById("roomOption4").innerHTML = `${roomArr[room].option4Text}`;
        }  else{
            document.getElementById("roomOption4").innerHTML = '';
        }
    if(roomArr[room].enemyPresent != null){
            combatStart()
       }
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        this.explored = true
    }
    optionTwo(){
        if(this.roomSouth != null && this.roomNorth != null){
         player.room = this.roomSouth
        }else if(this.roomEast != null){
         player.room = this.roomEast
        } else if(this.roomWest != null){
         player.room = this.roomWest
        }
        document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
        let room = player.room
        if(roomArr[room].option1Text != null){
     document.getElementById("roomOption1").innerHTML = `${roomArr[room].option1Text}`;
     }
     if(roomArr[room].option2Text != null){
     document.getElementById("roomOption2").innerHTML = `${roomArr[room].option2Text}`;
     } else if(roomArr[room].treasurePresent != null){
         document.getElementById("roomOption2").innerHTML = 'Loot the Chest!';
     } else {
        document.getElementById("roomOption2").innerHTML = '';
     }
     if(roomArr[room].option3Text != null){
     document.getElementById("roomOption3").innerHTML = `${roomArr[room].option3Text}`;
     } else if(roomArr[room].treasurePresent != null){
        document.getElementById("roomOption3").innerHTML = 'Loot the Chest!';
    } else {
       document.getElementById("roomOption3").innerHTML = '';
    }
     if(roomArr[room].option4Text != null){
         document.getElementById("roomOption4").innerHTML = `${roomArr[room].option4Text}`;
         }  else{
             document.getElementById("roomOption4").innerHTML = '';
         }
         document.getElementById("roomIdTester").innerHTML = `${player.room}`
         this.explored = true
     }
     optionThree(){
        if(this.roomEast != null && this.roomSouth != null && this.roomNorth != null){
         player.room = this.roomEast
        } else if(this.roomWest != null && this.roomNorth != null && this.roomSouth != null || this.roomWest != null && this.roomNorth != null && this.roomEast != null || this.roomWest != null && this.roomSouth != null && this.roomEast != null){
         player.room = this.roomWest
        } else if(this.treasurePresent !== null){
            itemArr[this.treasurePresent].loot();
            this.treasurePresent = null;
        }
        document.getElementById(roomArr[player.room].mapId).style.backgroundColor = black
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
         this.explored = true
     }
}
function option1(){
        roomArr[player.room].optionOne()
}
function option2(){
        roomArr[player.room].optionTwo()
}
function option3(){
    roomArr[player.room].optionThree()
}
startingRoom = new Room({
    roomId: 0,
    option1Text:'Advance North to the next room!', 
    option2Text:'Advance West to the next room!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: 1, 
    roomWest: 2, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: null,
    mapId: 'rm15'
})
startingRoom.explored = true
secondRoom = new Room({
    roomId: 1, 
    option1Text: 'Advance South to the next room!', 
    option2Text:'Advance West to the next room!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: null, 
    roomWest: 3, 
    roomEast: null, 
    roomSouth: 0,
    treasurePresent: 1,
    enemyPresent: 0,
    mapId: 'rm25'
})
thirdRoom = new Room({
    roomId: 2, 
    option1Text: 'Advance North to the next room!', 
    option2Text: 'Advance East to the next room!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: 3, 
    roomWest: null, 
    roomEast: 0, 
    roomSouth: null,
    treasurePresent: 1
})
fourthRoom = new Room({
    roomId:3, 
    option1Text: 'Advance South to the next room!', 
    option2Text: 'Advance East to the next room!', 
    option3Text: null, 
    option4Text:null, 
    roomNorth: null, 
    roomWest: null,
    roomEast: 1, 
    roomSouth: 2,
    treasurePresent: 0
})
roomArr= [startingRoom, secondRoom, thirdRoom, fourthRoom]
//             Item class code
class Item{
    constructor(att){
        this.itemId = att.itemId
        this.imgSrc = att.imgSrc
    }
    loot(){
        let invSpot = `item${player.inventory.length +1}`;
        player.inventory.push(this)
        document.getElementById(invSpot).src = this.imgSrc
        roomArr[player.room].treasurePresent = null
    }
}
let key = new Item({
    itemId: 0,
    imgSrc: 'cSheet_Icons/Key.png'
})
let potion = new Item({
    itemId: 1,
    imgSrc: 'cSheet_Icons/Potion.png'
})
let itemArr = [key, potion]

//          Enemy class init
class Enemy{
    constructor(att){
        this.enemyId = att.enemyId
        this.name = att.name
        this.hpCurrent = att.hp
        this.hpTotal = att.hp
        this.dmg = att.dmg
        this.armor = att.armor
    }
}
let slime = new Enemy({
   enemyId: 0,
   name: 'Slime',
   hp: 20,
   dmg: 8,
   armor:2
})
let enemyArr = [slime]
//          Combat Functions
function combatStart(){
    enemy.push(enemyArr[roomArr[player.room].enemyPresent])
    document.getElementById("roomOption1").onclick = attack
    document.getElementById("roomOption1").innerHTML = `Attack!`
    document.getElementById("roomOption2").onclick = defend
    document.getElementById("roomOption2").innerHTML = `Defend!`
    document.getElementById("roomOption3").onclick = powerAttack
    document.getElementById("roomOption3").innerHTML = `Power Attack!`
    document.getElementById("roomOption4").onclick = ''
    document.getElementById("roomOption4").innerHTML = ``
}
function combatEnd(){
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
     document.getElementById("roomOption1").onclick = option1
     document.getElementById("roomOption2").onclick = option2
     document.getElementById("roomOption3").onclick = option3
     document.getElementById("roomOption4").onclick = ''
}
function attack(){
    enemy[0].hpCurrent -= player.dmg - enemy[0].armor
    if(enemy[0].hpCurrent <= 0){
        enemy.pop
        combatEnd()
    }
    enemyTurn()
}
function defend(){
    player.armor += Math.ceiling(player.armor/3)
    enemyTurn()
}
function powerAttack(){
    enemy[0].hpCurrent -= (Math.floor(player.dmg * 1.5) - enemy[0].armor)
    player.armor -= Math.ceiling(player.armor/3)
    enemyTurn()
}
let enemy = []
function enemyTurn(){
    let action = Math.floor(Math.random()* 3)
    // if(action === 0){
        // player.hpCurrent -= (enemy[0].dmg - player.armor)
    // }else if(action === 1){
    //     enemy[0].armor =+ Math.ceiling(enemy[0].armor/3)
    // }else if(action === 2){
        player.hpCurrent -= Math.floor(enemy[0].dmg * 1.5) - player.armor
    //     enemy[0].armor -= Math.ceiling(enemy[0].armor/3)
    // }
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
}
//          Player init
let player = {
    playerName: 'Bill the Barbarian',
    stat1: 5,
    stat2: 4,
    stat3: 07,
    hpCurrent: 25,
    hpTotal: 25,
    armor: 3,
    dmg: 4,
    room: 0,
    inventory: []
}
// Button Functionality
// function explore(){
//     let room = player.room
//     if(roomArr[room].option1Text != null){
//         document.getElementById("roomOption1").innerHTML = `${roomArr[room].option1Text}`;
//         }
//         if(roomArr[room].option2Text != null){
//         document.getElementById("roomOption2").innerHTML = `${roomArr[room].option2Text}`;
//         }
//         if(roomArr[room].option3Text != null){
//         document.getElementById("roomOption3").innerHTML = `${roomArr[room].option3Text}`;
//         }
//         if(roomArr[room].option4Text != null){
//             document.getElementById("roomOption3").innerHTML = `${roomArr[room].option4Text}`;
//         }
//         document.getElementById("roomIdTester").innerHTML = `${player.room}`
// }

function stat1Increment(){
    player.stat1++
    document.getElementById("cSheetStatField1").innerHTML = `${player.stat1}`;
}

// let toggle = false
function Button ()  {
    // document.getElementById("roomOption2").onclick = stat1Increment
    combatStart()
    // itemArr[0].loot()
    // itemArr[0].loot()
    // let one = 1
    // let test = `item${one}`
    // document.getElementById(test).src = itemArr[0].imgSrc
//     if(toggle === false){
//     document.getElementById("tester").innerHTML = "New text!";
//     toggle = true
// } else {
//     document.getElementById("tester").innerHTML = null;
//     toggle = false
// }
// document.getElementById("testTest").innerHTML = toggle;
}
//  console.log('test')
