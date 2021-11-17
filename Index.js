// creating mute button for music functionality
function mute(){
    const music = document.getElementById('background_music');
    document.getElementById('mute_option').innerHTML = music.muted ? 'mute' : 'unmute';
    music.muted = !music.muted;
}
var JSON = JSON || {};
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
        document.getElementById(roomArr[player.room].mapId).style.border = null
           player.room = this.roomNorth
           roomText()
        }
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        this.explored = true
        if(roomArr[player.room].enemyPresent != null){
            combatStart()
       }
    }
    optionTwo(){
        if(this.roomSouth != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
        player.room = this.roomSouth
        roomText()
        }
         this.explored = true
         document.getElementById("roomIdTester").innerHTML = `${player.room}`
         if(roomArr[player.room].enemyPresent != null){
            combatStart()
       }
     }
     
     
     optionThree(){
        if(this.roomEast != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
        player.room = this.roomEast
        roomText()
        } 
        this.explored = true
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        if(roomArr[player.room].enemyPresent != null){
           combatStart()
      }
    }
    optionFour(){
        if(this.roomWest != null){
            document.getElementById(roomArr[player.room].mapId).style.border = null
            player.room = this.roomWest
            roomText()
            }
             this.explored = true
             document.getElementById("roomIdTester").innerHTML = `${player.room}`
             if(roomArr[player.room].enemyPresent != null){
                combatStart()
           }
    } 
}
function roomText(){
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    if(roomArr[player.room].roomNorth != null){
        document.getElementById("roomOption1").innerHTML = `Go North!`
     } else {
         document.getElementById("roomOption1").innerHTML = ''
     }
     if(roomArr[player.room].roomSouth != null){
         document.getElementById("roomOption2").innerHTML = `Go South!`
      } else {
         document.getElementById("roomOption2").innerHTML = ''
     }
      if(roomArr[player.room].roomEast != null){
         document.getElementById("roomOption3").innerHTML = `Go East!`
      } else {
         document.getElementById("roomOption3").innerHTML = ''
     }
      if(roomArr[player.room].roomWest != null){
         document.getElementById("roomOption4").innerHTML = `Go West!`
      } else {
         document.getElementById("roomOption4").innerHTML = ''
     }
}
startingRoom = new Room({
    roomId: 0,
    option1Text:'Go North to the next room!', 
    option2Text: null, 
    option3Text: null,
    option4Text:null, 
    roomNorth: 1, 
    roomWest: null,
    roomEast: null, 
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 'rm68'
})
startingRoom.explored = true
let room1 = new Room({
    roomId: 1, 
    option1Text: 'Go North!', 
    option2Text: 'Go South!',
    option3Text: null,
    option4Text:null, 
    roomNorth: 2, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 0,
    treasurePresent: 1,
    enemyPresent: 0,
    mapId: 'rm58'
})
let room2 = new Room({
    roomId: 2, 
    option1Text: 'Go North!', 
    option2Text: 'Go South!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: 3, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 1,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm48'
})
let room3 = new Room({
    roomId:3, 
    option1Text: 'Go South!', 
    option2Text: 'Go West!', 
    option3Text: null, 
    option4Text:null, 
    roomNorth: null, 
    roomWest: 4,
    roomEast: null, 
    roomSouth: 2,
    treasurePresent: 0,
    enemyPresent: null,
    mapId: 'rm38'
})
let room4 = new Room({
    roomId: 4, 
    option1Text: 'Go East!', 
    option2Text: 'Go West!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: null, 
    roomWest: 5, 
    roomEast: 3, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm37'
})
let room5 = new Room({
    roomId: 5, 
    option1Text: 'Go South!', 
    option2Text: 'Go East!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 4, 
    roomSouth: 6,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm36'
})
let room6 = new Room({
    roomId: 6, 
    option1Text: 'Go North!', 
    option2Text: 'Go West!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: 5, 
    roomWest: 7, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm46'
})
let room7 = new Room({
    roomId: 7, 
    option1Text: 'Go South!', 
    option2Text: 'Go East!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 6, 
    roomSouth: 8,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45'
})
let room8 = new Room({
    roomId: 8, 
    option1Text: 'Go North!', 
    option2Text: 'Go West!', 
    option3Text: null,
    option4Text:null, 
    roomNorth: 7, 
    roomWest: null, 
    roomEast: 9, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55'
})
let room9 = new Room({
    roomId: 9, 
    option1Text: 'Return East!', 
    option2Text: null,
    option3Text: null,
    option4Text:null, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 8, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm54'
})
roomArr= [startingRoom, room1, room2, room3, room4, room5, room6, room7, room8, room9]
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
    imgSrc: 'assets/Key.png'
})
let potion = new Item({
    itemId: 1,
    imgSrc: 'assets/Potion.png'
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
        this.enemyImg = att.enemyImg
    }

    
}
let slime = new Enemy({
   enemyId: 0,
   name: 'Slime',
   hp: 20,
   dmg: 6,
   armor:2,
   enemyImg: 'cSheet_Icons/purple_blob.png'
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
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor}`
    document.getElementById("enemyAttack").innerHTML = `${enemy[0].dmg}`
    document.getElementById("enemyName").innerHTML = `${enemy[0].name}`
    document.getElementById('enemyImg').src = `${enemy[0].enemyImg}`
    document.getElementById('enemyHealthImg').src = "assets/heart pixel art.png"
    document.getElementById('enemyDefenseImg').src = 'assets/Shield1.png'
    document.getElementById('enemyAttackImg').src = 'assets/sword_small (1).png'
}
function combatEnd(){
    let room = player.room
    roomText()
     document.getElementById('enemyImg').src = ''
     document.getElementById("enemyHealth").innerHTML = ``
     document.getElementById("enemyDefense").innerHTML = ``
     document.getElementById("enemyAttack").innerHTML = ``
     document.getElementById("enemyName").innerHTML = ``
     document.getElementById('enemyHealthImg').src = ""
     roomArr[room].enemyPresent = null;
     document.getElementById("roomOption1").onclick = option1
     document.getElementById("roomOption2").onclick = option2
     document.getElementById("roomOption3").onclick = option3
     document.getElementById("roomOption4").onclick = option4
     document.getElementById('enemyHealthImg').src = ""
     document.getElementById('enemyDefenseImg').src = ''
     document.getElementById('enemyAttackImg').src = ''
     document.getElementById("combatLog").innerHTML = ''
}
function attack(){
    enemy[0].hpCurrent -= player.dmg - enemy[0].armor
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    if(enemy[0].hpCurrent <= 0){
        enemy.pop
        combatEnd()
    }
    enemyTurn()
}
function defend(){
    player.armor += 2
    document.getElementById("cSheetArmor").innerHTML = `${player.armor}`
    enemyTurn()
    
}
function powerAttack(){
    enemy[0].hpCurrent -= (Math.floor(player.dmg * 1.5) - enemy[0].armor)
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    player.armor -= 2
    document.getElementById("cSheetArmor").innerHTML = `${player.armor}`
    if(enemy[0].hpCurrent <= 0){
        enemy.pop
        combatEnd()
    }
    enemyTurn()
}
let enemy = []
function enemyTurn(){
    let action = Math.floor(Math.random()* 3)
    if(action === 0){
        player.hpCurrent -= (enemy[0].dmg - player.armor);
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} Attacks!`;
    }else if(action === 1){
        enemy[0].armor =+  2;
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} Defends!`;
    }else
    if(action === 2){
        player.hpCurrent -= Math.floor(enemy[0].dmg * 1.5) - player.armor;
        enemy[0].armor -= 2;
        document.getElementById("combatLog").innerHTML = `${enemyArr[0].name} Power Attacks!`;
    }
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`;
}
//          Player init
let player = {
    playerName: 'Bill the Barbarian',
    stat1: 5,
    stat2: 4,
    stat3: 07,
    hpCurrent: 25,
    hpTotal: 25,
    armor: 4,
    dmg: 4,
    room: 0,
    inventory: []
}
// Button Functionality
function option1(){
    roomArr[player.room].optionOne()
}
function option2(){
    roomArr[player.room].optionTwo()
}
function option3(){
roomArr[player.room].optionThree()
}
function option4(){
roomArr[player.room].optionFour()
}
function saveGame(){
    localStorage.setItem('user', JSON.stringify(player))
    let exploredRooms = []
    let combatRooms = []
    let lootedRooms = []
    let inventory = []
    player.inventory.forEach((item) =>{
        inventory.push(item.itemId)
    })
    roomArr.forEach((room) => {
        if(room.explored === true){
            exploredRooms.push(room.roomId)
            combatRooms.push(room.roomId)
            if(room.treasurePresent === null){
            lootedRooms.push(room.roomId)
        }
    
    } 
});
localStorage.setItem('exploredRooms', exploredRooms.toString(','))
localStorage.setItem('combatRooms', combatRooms.toString(','))
localStorage.setItem('lootedRooms', lootedRooms.toString(','))
localStorage.setItem('items', inventory.toString(','))
}
function loadGame(){
    player = JSON.parse(localStorage.getItem('user'))
    let exploredRooms = localStorage.getItem('exploredRooms').split(',')
    let combatRooms = localStorage.getItem('combatRooms').split(',')
    let lootedRooms = localStorage.getItem('lootedRooms').split(',')
    let items = localStorage.getItem('items').split(',')
    roomText()
    exploredRooms.forEach((id) => {
            document.getElementById(roomArr[id].mapId).style.backgroundColor = 'black'
            roomArr[id].explored = true
    })
    combatRooms.forEach((id) => {
        roomArr[id].enemyPresent = null
})
    lootedRooms.forEach((id) => {
        roomArr[id].treasurePresent = null
})
player.inventory = []
    items.forEach((item) =>{
        itemArr[item].loot()
    })
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`;
    document.getElementById("cSheetStatField1").innerHTML = `${player.stat1}`;
        document.getElementById("cSheetStatField2").innerHTML = `${player.stat2}`;
        document.getElementById("cSheetStatField3").innerHTML = `${player.stat3}`;
        document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`;
        document.getElementById("cSheetArmor").innerHTML = `${player.armor}`;
        document.getElementById("cSheetWeapon").innerHTML = `${player.dmg}`;
        document.getElementById("playerName").innerHTML = `${player.playerName}`;
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        // document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
        
            }
        
function Button ()  {
    
        // document.querySelectorAll("video, audio").forEach( elem => muteMe(elem) );

    // document.getElementById("roomOption2").onclick = stat1Increment
    // document.getElementById("combatLog").innerHTML = `${enemy[0].name} Attacks!}`
    combatEnd()
    // let img = slime.enemyImg
    // document.getElementById('enemyImg').src = `${img}`
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
