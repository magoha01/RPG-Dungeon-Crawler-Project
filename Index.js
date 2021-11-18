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
    roomInteract(){
        if(this.treasurePresent != null){
            itemArr[this.treasurePresent].loot()
            this.treasurePresent = null
            document.getElementById("roomOption5").innerHTML = ``
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
     if(roomArr[player.room].treasurePresent != null){
        document.getElementById("roomOption5").innerHTML = 'Loot the Chest!'
    }else {
        document.getElementById("roomOption5").innerHTML = ''
  }
}
startingRoom = new Room({
    roomId: 0,
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
    roomNorth: 7, 
    roomWest: 9, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55'
})
let room9 = new Room({
    roomId: 9, 
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
        this.strength = att.strength
        this.dexterity = att.dexterity
        this.constitution = att.constitution
        this.tempArmor = 0
    }

    
}
let slime = new Enemy({
   enemyId: 0,
   name: 'Slime',
   strength: 2,
   dexterity: 3,
   constitution: 5,
   hp: 14,
   dmg: 6,
   armor: 13,
   enemyImg: 'assets/purple_blob.png'
})
const enemyArr = [slime]
//          Combat Functions
let turnCount = 0
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
    roomText()
    turnCount = 0;
     document.getElementById("combatLog").innerHTML = ''
     document.getElementById("playerLog").innerHTML = ''
     document.getElementById('enemyImg').src = ''
     document.getElementById("enemyHealth").innerHTML = ''
     document.getElementById("enemyDefense").innerHTML = ''
     document.getElementById("enemyAttack").innerHTML = ''
     document.getElementById("enemyName").innerHTML = ''
     document.getElementById('enemyHealthImg').src = ''
     roomArr[player.room].enemyPresent = null;
     document.getElementById("roomOption1").onclick = option1
     document.getElementById("roomOption2").onclick = option2
     document.getElementById("roomOption3").onclick = option3
     document.getElementById("roomOption4").onclick = option4
     document.getElementById('enemyHealthImg').src = ''
     document.getElementById('enemyDefenseImg').src = ''
     document.getElementById('enemyAttackImg').src = ''
    player.tempArmor = 0 

}
function attack(){
    let roll = Math.floor(Math.random()* 21)+player.dexterity
    if(roll >= enemy[0].armor){
        let hit =  Math.floor(Math.random()* player.dmg)+player.strength
        enemy[0].hpCurrent -= hit
        document.getElementById("playerLog").innerHTML = `You hit, dealing ${hit} damage!`
    }else {
        document.getElementById("playerLog").innerHTML = `You missed!`
    }
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    if(enemy[0].hpCurrent <= 0){
        enemy.pop
        combatEnd()
    }else{
        turnCount++
        enemyTurn()
    }
   
}
function defend(){
    if(player.tempArmor<4){
    player.tempArmor += 1
    document.getElementById("playerLog").innerHTML = `You build up power!`
    document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    } else if(player.tempArmor === 4){
        player.tempArmor += 1
        document.getElementById("playerLog").innerHTML = `You've built up as much power as you can!`
        document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    } else{
        document.getElementById("playerLog").innerHTML = `You try to build up more power, but fail!`
    }
    turnCount++
    enemyTurn()
    
}
function powerAttack(){
    let roll = Math.floor(Math.random()* 21)+player.dexterity
    if(roll >= enemy[0].armor){
        let hit =  Math.floor(Math.random()* player.dmg)+player.strength+player.tempArmor
        enemy[0].hpCurrent -= hit
        document.getElementById("playerLog").innerHTML = `You unleash your power, dealing ${hit} damage!`
        document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal}`
    }else {
        document.getElementById("playerLog").innerHTML = `You missed, expending your stored power harmlessly!`
    }
    player.tempArmor = 0
    document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    if(enemy[0].hpCurrent <= 0){
        enemy.pop
        combatEnd()
    }else{
        turnCount++
        enemyTurn()
    }
}
let enemy = []
function enemyTurn(){
    let action = Math.floor(Math.random()* 3)
    if(action === 0){
        let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
        if(roll >= player.armor){
            let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength
            player.hpCurrent -= hit
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} hit, dealing ${hit} damage!`
            document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        }else {
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed!`
        }
    }else if(action === 1 && enemy[0].tempArmor<5){
        if(enemy[0].tempArmor<4){
            enemy[0].tempArmor += 1
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} builds up power!`
            document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
            } else if(enemy[0].tempArmor === 4){
                player.tempArmor += 1
                document.getElementById("combatLog").innerHTML = `${enemy[0].name} has built up as much power as they can!`
                document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
            }
    }else if(action === 2 && enemy[0].tempArmor>0){
    let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
    if(roll >= player.armor){
        let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength+enemy[0].tempArmor
        player.hpCurrent -= hit
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} unleashes its power, dealing ${hit} damage!`
    }else {
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed, expending its stored power harmlessly!`
    }
    enemy[0].tempArmor = 0
    document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal} `
    } else{
        let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
        if(roll >= player.armor){
            let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength
            player.hpCurrent -= hit
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} hit, dealing ${hit} damage!`
            document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        }else {
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed!`
        }
    }
}
//          Player init
let player = {
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
    document.getElementById(roomArr[player.room].mapId).style.border = null
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
    document.getElementById("cSheetStatField1").innerHTML = `${player.strength}`;
    document.getElementById("cSheetStatField2").innerHTML = `${player.dexterity}`;
    document.getElementById("cSheetStatField3").innerHTML = `${player.constitution}`;
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
