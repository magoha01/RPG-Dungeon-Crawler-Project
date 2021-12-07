// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  const previousRequire = typeof parcelRequire === 'function' && parcelRequire
  const nodeRequire = typeof require === 'function' && require

  function newRequire (name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        const currentRequire = typeof parcelRequire === 'function' && parcelRequire
        if (!jumped && currentRequire) {
          return currentRequire(name, true)
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true)
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name)
        }

        const err = new Error('Cannot find module \'' + name + '\'')
        err.code = 'MODULE_NOT_FOUND'
        throw err
      }

      localRequire.resolve = resolve
      localRequire.cache = {}

      const module = cache[name] = new newRequire.Module(name)

      modules[name][0].call(module.exports, localRequire, module, module.exports, this)
    }

    return cache[name].exports

    function localRequire (x) {
      return newRequire(localRequire.resolve(x))
    }

    function resolve (x) {
      return modules[name][1][x] || x
    }
  }

  function Module (moduleName) {
    this.id = moduleName
    this.bundle = newRequire
    this.exports = {}
  }

  newRequire.isParcelRequire = true
  newRequire.Module = Module
  newRequire.modules = modules
  newRequire.cache = cache
  newRequire.parent = previousRequire
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports
    }, {}]
  }

  let error
  for (let i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i])
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    const mainExports = newRequire(entry[entry.length - 1])

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports

    // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports
      })

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error
  }

  return newRequire
})({
  'Index.js': [function (require, module, exports) {
    function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

    function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function') } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass) }

    function _setPrototypeOf (o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf (o, p) { o.__proto__ = p; return o }; return _setPrototypeOf(o, p) }

    function _createSuper (Derived) { const hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal () { const Super = _getPrototypeOf(Derived); let result; if (hasNativeReflectConstruct) { const NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget) } else { result = Super.apply(this, arguments) } return _possibleConstructorReturn(this, result) } }

    function _possibleConstructorReturn (self, call) { if (call && (_typeof(call) === 'object' || typeof call === 'function')) { return call } else if (call !== void 0) { throw new TypeError('Derived constructors may only return object or undefined') } return _assertThisInitialized(self) }

    function _assertThisInitialized (self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return self }

    function _isNativeReflectConstruct () { if (typeof Reflect === 'undefined' || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === 'function') return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true } catch (e) { return false } }

    function _getPrototypeOf (o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf (o) { return o.__proto__ || Object.getPrototypeOf(o) }; return _getPrototypeOf(o) }

    function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

    function _defineProperties (target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } }

    function _createClass (Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor }

    // creating mute button for music functionality
    function mute () {
      const music = document.getElementById('background_music')
      document.getElementById('mute_option').innerHTML = music.muted ? 'mute' : 'unmute'
      music.muted = !music.muted
    } // attaching range slider to audio volume on site

    const audioVolume = document.getElementById('background_music')
    const givenvolume = document.querySelector('#volume-control')
    audioVolume.volume = 0.5
    const volumeSlider = document.querySelector('#volume-control')
    const music = document.getElementById('background_music')
    volumeSlider.addEventListener('input', function (e) {
      const value = volumeSlider.value
      console.log(volumeSlider.value)
      music.volume = volumeSlider.value / 100
      outputContainer.innerHTML = ''.concat(volumeSlider.value)
      document.querySelector('#volume-container').innerHTML = ''.concat(volumeSlider.value)
    })

    function startGame () {
      this.classList.remove('hide')
    } // Enter game Intro Screen

    const start = document.querySelector('.start')
    const text = document.querySelector('#charInput')
    const audio = document.querySelector('#background_music')
    start.addEventListener('click', startGame)

    function startGame () {
      const _this = this

      start.removeEventListener('click', startGame)
      audio.play()
      this.classList.add('fade-out')
      this.addEventListener('animationend', function () {
        _this.remove()
      })
      text.classList.toggle('reveal')
      nextButton.classList.toggle('reveal')
      nextButton.classList.add('fade-in')
      setTimeout(storyStart, 3700)
    }

    ;
    var JSON = JSON || {}

    const Room = /* #__PURE__ */(function () {
      function Room (roomAtt) {
        _classCallCheck(this, Room)

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
        this.nextFloor = roomAtt.nextFloor
        this.previousFloor = roomAtt.previousFloor
        this.floor = roomAtt.floor
      }

      _createClass(Room, [{
        key: 'optionOne',
        value: function optionOne () {
          if (this.roomNorth != null) {
            document.getElementById(roomArr[player.room].mapId).style.border = null
            player.room = this.roomNorth
            roomText()
          }

          document.getElementById('roomIdTester').innerHTML = ''.concat(player.room)
          this.explored = true

          if (roomArr[player.room].enemyPresent != null) {
            combatStart()
          }
        }
      }, {
        key: 'optionTwo',
        value: function optionTwo () {
          if (this.roomSouth != null) {
            document.getElementById(roomArr[player.room].mapId).style.border = null
            player.room = this.roomSouth
            roomText()
          }

          this.explored = true
          document.getElementById('roomIdTester').innerHTML = ''.concat(player.room)

          if (roomArr[player.room].enemyPresent != null) {
            combatStart()
          }
        }
      }, {
        key: 'optionThree',
        value: function optionThree () {
          if (this.roomEast != null) {
            document.getElementById(roomArr[player.room].mapId).style.border = null
            player.room = this.roomEast
            roomText()
          }

          this.explored = true
          document.getElementById('roomIdTester').innerHTML = ''.concat(player.room)

          if (roomArr[player.room].enemyPresent != null) {
            combatStart()
          }
        }
      }, {
        key: 'optionFour',
        value: function optionFour () {
          if (this.roomWest != null) {
            document.getElementById(roomArr[player.room].mapId).style.border = null
            player.room = this.roomWest
            roomText()
          }

          this.explored = true
          document.getElementById('roomIdTester').innerHTML = ''.concat(player.room)

          if (roomArr[player.room].enemyPresent != null) {
            combatStart()
          }
        }
      }, {
        key: 'roomInteract',
        value: function roomInteract () {
          if (this.treasurePresent != null) {
            itemArr[this.treasurePresent].loot()
            this.treasurePresent = null
            roomText()
          } else if (this.nextFloor != null) {
            player.room = this.nextFloor
            nextFloor()
            roomText()
            this.explored = true
            document.getElementById('roomIdTester').innerHTML = ''.concat(player.room)
          } else if (this.previousFloor != null) {
            player.room = this.previousFloor
            nextFloor()
            roomText()
            this.explored = true
            document.getElementById('roomIdTester').innerHTML = ''.concat(player.room)
          }
        }
      }])

      return Room
    }())

    function nextFloor () {
      roomArr.forEach(function (room) {
        document.getElementById(room.mapId).style.backgroundColor = ''
        document.getElementById(room.mapId).style.border = ''
      })
      roomArr.forEach(function (room) {
        if (room.explored === true && room.floor === roomArr[player.room].floor) {
          document.getElementById(room.mapId).style.backgroundColor = 'black'
          document.getElementById(room.mapId).style.border = ''
        }
      })
      document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
      document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    }

    function roomText () {
      document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
      document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'

      if (roomArr[player.room].roomNorth != null) {
        document.getElementById('roomOption1').innerHTML = 'Go North!'
      } else {
        document.getElementById('roomOption1').innerHTML = ''
      }

      if (roomArr[player.room].roomSouth != null) {
        document.getElementById('roomOption2').innerHTML = 'Go South!'
      } else {
        document.getElementById('roomOption2').innerHTML = ''
      }

      if (roomArr[player.room].roomEast != null) {
        document.getElementById('roomOption3').innerHTML = 'Go East!'
      } else {
        document.getElementById('roomOption3').innerHTML = ''
      }

      if (roomArr[player.room].roomWest != null) {
        document.getElementById('roomOption4').innerHTML = 'Go West!'
      } else {
        document.getElementById('roomOption4').innerHTML = ''
      }

      if (roomArr[player.room].treasurePresent != null) {
        document.getElementById('roomOption5').innerHTML = 'Loot the Chest!'
      } else if (roomArr[player.room].nextFloor != null) {
        document.getElementById('roomOption5').innerHTML = 'Advance to the next floor!'
      } else if (roomArr[player.room].previousFloor != null) {
        document.getElementById('roomOption5').innerHTML = 'Return to the last floor!'
      } else {
        document.getElementById('roomOption5').innerHTML = ''
      }
    }

    startingRoom = new Room({
      roomId: 0,
      roomNorth: 1,
      roomWest: null,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm68',
      nextFloor: null,
      floor: 1
    })
    startingRoom.explored = true
    const room1 = new Room({
      roomId: 1,
      roomNorth: 2,
      roomWest: null,
      roomEast: null,
      roomSouth: 0,
      treasurePresent: 0,
      enemyPresent: 0,
      mapId: 'rm58',
      nextFloor: null,
      floor: 1
    })
    const room2 = new Room({
      roomId: 2,
      roomNorth: 3,
      roomWest: null,
      roomEast: null,
      roomSouth: 1,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm48',
      nextFloor: null,
      floor: 1
    })
    const room3 = new Room({
      roomId: 3,
      roomNorth: null,
      roomWest: 4,
      roomEast: null,
      roomSouth: 2,
      treasurePresent: 0,
      enemyPresent: null,
      mapId: 'rm38',
      nextFloor: 10,
      floor: 1
    })
    const room4 = new Room({
      roomId: 4,
      roomNorth: null,
      roomWest: 5,
      roomEast: 3,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: 1,
      mapId: 'rm37',
      nextFloor: null,
      floor: 1
    })
    const room5 = new Room({
      roomId: 5,
      roomNorth: null,
      roomWest: null,
      roomEast: 4,
      roomSouth: 6,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm36',
      nextFloor: null,
      floor: 1
    })
    const room6 = new Room({
      roomId: 6,
      roomNorth: 5,
      roomWest: 7,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm46',
      nextFloor: null,
      floor: 1
    })
    const room7 = new Room({
      roomId: 7,
      roomNorth: null,
      roomWest: null,
      roomEast: 6,
      roomSouth: 8,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm45',
      nextFloor: null,
      floor: 1
    })
    const room8 = new Room({
      roomId: 8,
      roomNorth: 7,
      roomWest: 9,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm55',
      nextFloor: null,
      floor: 1
    })
    const room9 = new Room({
      roomId: 9,
      roomNorth: null,
      roomWest: null,
      roomEast: 8,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm54',
      nextFloor: 10,
      floor: 1
    })
    const room10 = new Room({
      roomId: 10,
      roomNorth: 11,
      roomWest: null,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm65',
      previousFloor: 9,
      floor: 2
    })
    const room11 = new Room({
      roomId: 11,
      roomNorth: 12,
      roomWest: null,
      roomEast: null,
      roomSouth: 10,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm55',
      nextFloor: 25,
      floor: 2
    })
    const room12 = new Room({
      roomId: 12,
      roomNorth: null,
      roomWest: 19,
      roomEast: 13,
      roomSouth: 11,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm45',
      floor: 2
    })
    const room13 = new Room({
      roomId: 13,
      roomNorth: null,
      roomWest: 12,
      roomEast: 14,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm46',
      floor: 2
    })
    const room14 = new Room({
      roomId: 14,
      roomNorth: null,
      roomWest: 13,
      roomEast: 15,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm47',
      floor: 2
    })
    const room15 = new Room({
      roomId: 15,
      roomNorth: 16,
      roomWest: 14,
      roomEast: null,
      roomSouth: 18,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm48',
      floor: 2
    })
    const room16 = new Room({
      roomId: 16,
      roomNorth: 17,
      roomWest: null,
      roomEast: null,
      roomSouth: 15,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm38',
      floor: 2
    })
    const room17 = new Room({
      roomId: 17,
      roomNorth: null,
      roomWest: null,
      roomEast: null,
      roomSouth: 16,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm28',
      nextFloor: 25,
      floor: 2
    })
    const room18 = new Room({
      roomId: 18,
      roomNorth: 15,
      roomWest: null,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm58',
      floor: 2
    })
    const room19 = new Room({
      roomId: 19,
      roomNorth: 20,
      roomWest: null,
      roomEast: 12,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm44',
      floor: 2
    })
    const room20 = new Room({
      roomId: 20,
      roomNorth: 21,
      roomWest: null,
      roomEast: null,
      roomSouth: 19,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm34',
      floor: 2
    })
    const room21 = new Room({
      roomId: 21,
      roomNorth: 22,
      roomWest: 23,
      roomEast: 24,
      roomSouth: 20,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm24',
      floor: 2
    })
    const room22 = new Room({
      roomId: 22,
      roomNorth: null,
      roomWest: null,
      roomEast: null,
      roomSouth: 21,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm14',
      floor: 2
    })
    const room23 = new Room({
      roomId: 23,
      roomNorth: null,
      roomWest: null,
      roomEast: 21,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm23',
      floor: 2
    })
    const room24 = new Room({
      roomId: 24,
      roomNorth: null,
      roomWest: 21,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm25',
      floor: 2
    })
    const room25 = new Room({
      roomId: 25,
      roomNorth: 26,
      roomWest: null,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm65',
      previousFloor: 17,
      floor: 3
    })
    const room26 = new Room({
      roomId: 26,
      roomNorth: 27,
      roomWest: 30,
      roomEast: 35,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm55',
      floor: 3
    })
    const room27 = new Room({
      roomId: 27,
      roomNorth: 28,
      roomWest: null,
      roomEast: null,
      roomSouth: 26,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm45',
      floor: 3
    })
    const room28 = new Room({
      roomId: 28,
      roomNorth: 29,
      roomWest: 34,
      roomEast: 39,
      roomSouth: 27,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm35',
      floor: 3
    })
    const room29 = new Room({
      roomId: 29,
      roomNorth: null,
      roomWest: null,
      roomEast: null,
      roomSouth: 28,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm25',
      floor: 3
    })
    const room30 = new Room({
      roomId: 30,
      roomNorth: null,
      roomWest: 31,
      roomEast: 26,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm54',
      floor: 3
    })
    const room31 = new Room({
      roomId: 31,
      roomNorth: 32,
      roomWest: null,
      roomEast: 30,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm53',
      floor: 3
    })
    const room32 = new Room({
      roomId: 32,
      roomNorth: 33,
      roomWest: null,
      roomEast: null,
      roomSouth: 31,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm43',
      floor: 3
    })
    const room33 = new Room({
      roomId: 33,
      roomNorth: null,
      roomWest: null,
      roomEast: 34,
      roomSouth: 32,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm33',
      floor: 3
    })
    const room34 = new Room({
      roomId: 34,
      roomNorth: null,
      roomWest: 33,
      roomEast: 28,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm34',
      floor: 3
    })
    const room35 = new Room({
      roomId: 35,
      roomNorth: null,
      roomWest: 26,
      roomEast: 36,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm56',
      floor: 3
    })
    const room36 = new Room({
      roomId: 36,
      roomNorth: 37,
      roomWest: 35,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm57',
      floor: 3
    })
    const room37 = new Room({
      roomId: 37,
      roomNorth: 38,
      roomWest: null,
      roomEast: null,
      roomSouth: 36,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm47',
      floor: 3
    })
    const room38 = new Room({
      roomId: 38,
      roomNorth: 40,
      roomWest: 39,
      roomEast: null,
      roomSouth: 37,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm37',
      floor: 3
    })
    const room39 = new Room({
      roomId: 39,
      roomNorth: null,
      roomWest: 28,
      roomEast: 38,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm36',
      floor: 3
    })
    const room40 = new Room({
      roomId: 40,
      roomNorth: 41,
      roomWest: null,
      roomEast: null,
      roomSouth: 38,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm27',
      floor: 3
    })
    const room41 = new Room({
      roomId: 41,
      roomNorth: 42,
      roomWest: null,
      roomEast: null,
      roomSouth: 40,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm17',
      floor: 3
    })
    const room42 = new Room({
      roomId: 42,
      roomNorth: null,
      roomWest: null,
      roomEast: 43,
      roomSouth: 41,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm7',
      floor: 3
    })
    const room43 = new Room({
      roomId: 43,
      roomNorth: null,
      roomWest: 42,
      roomEast: 44,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm8',
      floor: 3
    })
    const room44 = new Room({
      roomId: 44,
      roomNorth: null,
      roomWest: 43,
      roomEast: null,
      roomSouth: null,
      treasurePresent: 1,
      enemyPresent: null,
      mapId: 'rm9',
      floor: 3
    })
    roomArr = [startingRoom, room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24, room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36, room37, room38, room39, room40, room41, room42, room43, room44] // roomArr= [startingRoom]
    // for(let i = 0; i<24; i++){
    //     roomArr.push(room`${i}`)
    // }
    //             Item class code

    const Item = /* #__PURE__ */(function () {
      function Item (att) {
        _classCallCheck(this, Item)

        this.itemId = att.itemId
        this.imgSrc = att.imgSrc
      }

      _createClass(Item, [{
        key: 'loot',
        value: function loot () {
          const invSpot = 'item'.concat(player.inventory.length + 1)
          player.inventory.push(this)
          document.getElementById(invSpot).src = this.imgSrc
          roomArr[player.room].treasurePresent = null
        }
      }])

      return Item
    }())

    const Potion = /* #__PURE__ */(function (_Item) {
      _inherits(Potion, _Item)

      const _super = _createSuper(Potion)

      function Potion (att) {
        _classCallCheck(this, Potion)

        return _super.call(this, att)
      }

      _createClass(Potion, [{
        key: 'useItem',
        value: function useItem (slot) {
          player.hpCurrent = player.hpTotal
          player.inventory.splice(slot, 1)
          document.getElementById('cSheetHealth').innerHTML = ''.concat(player.hpCurrent, '/').concat(player.hpTotal)

          for (let i = 1; i < 6; i++) {
            document.getElementById('item'.concat(i)).src = ''
          }

          player.inventory.forEach(function (item, index) {
            const invSpot = 'item'.concat(index + 1)
            document.getElementById(invSpot).src = item.imgSrc
          })
        }
      }])

      return Potion
    }(Item))

    function itemButton (slot) {
      player.inventory[slot].useItem(slot)
    }

    const key = new Item({
      itemId: 0,
      imgSrc: 'assets/Key.png'
    })
    const potion = new Potion({
      itemId: 1,
      imgSrc: 'assets/Potion.png'
    })
    var itemArr = [key, potion] //          Enemy class init

    const Enemy = function Enemy (att) {
      _classCallCheck(this, Enemy)

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

    const slime = new Enemy({
      enemyId: 0,
      name: 'Slime',
      strength: 2,
      dexterity: 3,
      constitution: 5,
      hp: 14,
      dmg: 2,
      armor: 12,
      enemyImg: 'assets/purple_blob.png'
    })
    const goblin = new Enemy({
      enemyId: 1,
      name: 'Goblin',
      strength: 2,
      dexterity: 4,
      constitution: 1,
      hp: 8,
      dmg: 4,
      armor: 14,
      enemyImg: 'assets/goblin.png'
    })
    const enemyArr = [slime, goblin] //          Combat Functions

    let turnCount = 0
    let combat = false

    function combatStart () {
      const newEnemy = JSON.parse(JSON.stringify(enemyArr[roomArr[player.room].enemyPresent]))
      enemy.push(newEnemy)
      document.getElementById('fightScreen').style.display = ''
      document.getElementById('roomOption1').onclick = attack
      document.getElementById('roomOption1').innerHTML = 'Attack!'
      document.getElementById('roomOption2').onclick = defend
      document.getElementById('roomOption2').innerHTML = 'Build Power!'
      document.getElementById('roomOption3').onclick = ''
      document.getElementById('roomOption3').innerHTML = 'Power Attack!'
      document.getElementById('roomOption3').style.color = 'grey'
      document.getElementById('roomOption4').onclick = ''
      document.getElementById('roomOption4').innerHTML = ''
      document.getElementById('roomOption5').onclick = ''
      document.getElementById('roomOption5').innerHTML = ''
      document.getElementById('enemyHealth').innerHTML = ''.concat(enemy[0].hpCurrent, '/').concat(enemy[0].hpTotal, ' ')
      document.getElementById('enemyDefense').innerHTML = ''.concat(enemy[0].armor)
      document.getElementById('enemyAttack').innerHTML = ''.concat(enemy[0].dmg)
      document.getElementById('enemyName').innerHTML = ''.concat(enemy[0].name)
      document.getElementById('enemyImg').src = ''.concat(enemy[0].enemyImg)
      document.getElementById('enemyHealthImg').src = 'assets/heart pixel art.png'
      document.getElementById('enemyDefenseImg').src = 'assets/Shield1.png'
      document.getElementById('enemyAttackImg').src = 'assets/sword_small (1).png'
      combat = true
    }

    function combatEnd () {
      roomText()
      enemy = []
      turnCount = 0
      document.getElementById('fightScreen').style.display = 'none'
      document.getElementById('combatLog').innerHTML = ''
      document.getElementById('playerLog').innerHTML = ''
      document.getElementById('enemyImg').src = ''
      document.getElementById('enemyHealth').innerHTML = ''
      document.getElementById('enemyDefense').innerHTML = ''
      document.getElementById('enemyAttack').innerHTML = ''
      document.getElementById('enemyName').innerHTML = ''
      document.getElementById('enemyHealthImg').src = ''
      roomArr[player.room].enemyPresent = null
      document.getElementById('roomOption1').onclick = option1
      document.getElementById('roomOption2').onclick = option2
      document.getElementById('roomOption3').onclick = option3
      document.getElementById('roomOption4').onclick = option4
      document.getElementById('roomOption5').onclick = option5
      document.getElementById('roomOption3').style.color = 'black'
      document.getElementById('enemyHealthImg').src = ''
      document.getElementById('enemyDefenseImg').src = ''
      document.getElementById('enemyAttackImg').src = ''
      player.tempArmor = 0
      document.getElementById('cSheetArmor').innerHTML = ''.concat(player.armor + player.tempArmor)
      combat = false
    }

    function attack () {
      const roll = Math.floor(Math.random() * 21) + player.dexterity

      if (roll >= enemy[0].armor) {
        const hit = Math.floor(Math.random() * player.dmg) + player.strength
        enemy[0].hpCurrent -= hit
        document.getElementById('playerLog').innerHTML = 'You hit, dealing '.concat(hit, ' damage!')
      } else {
        document.getElementById('playerLog').innerHTML = 'You missed!'
      }

      document.getElementById('enemyHealth').innerHTML = ''.concat(enemy[0].hpCurrent, '/').concat(enemy[0].hpTotal, ' ')

      if (enemy[0].hpCurrent <= 0) {
        combatEnd()
      } else {
        turnCount++
        enemyTurn()
      }
    }

    function defend () {
      if (player.tempArmor < 4) {
        player.tempArmor += 1
        document.getElementById('playerLog').innerHTML = 'You build up power!'
        document.getElementById('cSheetArmor').innerHTML = ''.concat(player.armor + player.tempArmor)
      } else if (player.tempArmor === 4) {
        player.tempArmor += 1
        document.getElementById('playerLog').innerHTML = "You've built up as much power as you can!"
        document.getElementById('cSheetArmor').innerHTML = ''.concat(player.armor + player.tempArmor)
      } else {
        document.getElementById('playerLog').innerHTML = 'You try to build up more power, but fail!'
      }

      document.getElementById('roomOption3').onclick = powerAttack
      document.getElementById('roomOption3').style.color = 'black'
      turnCount++
      enemyTurn()
    }

    function powerAttack () {
      const roll = Math.floor(Math.random() * 21) + player.dexterity

      if (roll >= enemy[0].armor) {
        const hit = Math.floor(Math.random() * player.dmg) + player.strength + player.tempArmor
        enemy[0].hpCurrent -= hit
        document.getElementById('playerLog').innerHTML = 'You unleash your power, dealing '.concat(hit, ' damage!')
        document.getElementById('enemyHealth').innerHTML = ''.concat(enemy[0].hpCurrent, '/').concat(enemy[0].hpTotal)
      } else {
        document.getElementById('playerLog').innerHTML = 'You missed, expending your stored power harmlessly!'
      }

      player.tempArmor = 0
      document.getElementById('cSheetArmor').innerHTML = ''.concat(player.armor + player.tempArmor)
      document.getElementById('enemyHealth').innerHTML = ''.concat(enemy[0].hpCurrent, '/').concat(enemy[0].hpTotal, ' ')

      if (enemy[0].hpCurrent <= 0) {
        combatEnd()
      } else {
        turnCount++
        enemyTurn()
      }
    }

    var enemy = []

    function enemyTurn () {
      const action = Math.floor(Math.random() * 3)

      if (action === 0) {
        const roll = Math.floor(Math.random() * 21) + enemy[0].dexterity

        if (roll >= player.armor) {
          const hit = Math.floor(Math.random() * enemy[0].dmg) + enemy[0].strength
          player.hpCurrent -= hit
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' hit, dealing ').concat(hit, ' damage!')
          document.getElementById('cSheetHealth').innerHTML = ''.concat(player.hpCurrent, '/').concat(player.hpTotal)
        } else {
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' missed!')
        }
      } else if (action === 1 && enemy[0].tempArmor < 5) {
        if (enemy[0].tempArmor < 4) {
          enemy[0].tempArmor += 1
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' builds up power!')
          document.getElementById('enemyDefense').innerHTML = ''.concat(enemy[0].armor + enemy[0].tempArmor)
        } else if (enemy[0].tempArmor === 4) {
          player.tempArmor += 1
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' has built up as much power as they can!')
          document.getElementById('enemyDefense').innerHTML = ''.concat(enemy[0].armor + enemy[0].tempArmor)
        }
      } else if (action === 2 && enemy[0].tempArmor > 0) {
        const _roll = Math.floor(Math.random() * 21) + enemy[0].dexterity

        if (_roll >= player.armor) {
          const _hit = Math.floor(Math.random() * enemy[0].dmg) + enemy[0].strength + enemy[0].tempArmor

          player.hpCurrent -= _hit
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' unleashes its power, dealing ').concat(_hit, ' damage!')
        } else {
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' missed, expending its stored power harmlessly!')
        }

        enemy[0].tempArmor = 0
        document.getElementById('enemyDefense').innerHTML = ''.concat(enemy[0].armor + enemy[0].tempArmor)
        document.getElementById('cSheetHealth').innerHTML = ''.concat(player.hpCurrent, '/').concat(player.hpTotal, ' ')
      } else {
        const _roll2 = Math.floor(Math.random() * 21) + enemy[0].dexterity

        if (_roll2 >= player.armor) {
          const _hit2 = Math.floor(Math.random() * enemy[0].dmg) + enemy[0].strength

          player.hpCurrent -= _hit2
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' hit, dealing ').concat(_hit2, ' damage!')
          document.getElementById('cSheetHealth').innerHTML = ''.concat(player.hpCurrent, '/').concat(player.hpTotal)
        } else {
          document.getElementById('combatLog').innerHTML = ''.concat(enemy[0].name, ' missed!')
        }
      }
    } //          Player init

    var player = {
      name: nameInput,
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
    } // Button Functionality

    function option1 () {
      roomArr[player.room].optionOne()
    }

    function option2 () {
      roomArr[player.room].optionTwo()
    }

    function option3 () {
      roomArr[player.room].optionThree()
    }

    function option4 () {
      roomArr[player.room].optionFour()
    }

    function option5 () {
      roomArr[player.room].roomInteract()
    }

    function saveGame () {
      localStorage.setItem('user', JSON.stringify(player))
      const exploredRooms = []
      const combatRooms = []
      const lootedRooms = []
      const inventory = []
      player.inventory.forEach(function (item) {
        inventory.push(item.itemId)
      })
      roomArr.forEach(function (room) {
        if (room.explored === true) {
          exploredRooms.push(room.roomId)
          combatRooms.push(room.roomId)

          if (room.treasurePresent === null) {
            lootedRooms.push(room.roomId)
          }
        }
      })
      localStorage.setItem('exploredRooms', exploredRooms.toString(','))
      localStorage.setItem('combatRooms', combatRooms.toString(','))
      localStorage.setItem('lootedRooms', lootedRooms.toString(','))
      localStorage.setItem('items', inventory.toString(','))
    }

    function loadGame () {
      document.getElementById(roomArr[player.room].mapId).style.border = null
      player = JSON.parse(localStorage.getItem('user'))
      const exploredRooms = localStorage.getItem('exploredRooms').split(',')
      const combatRooms = localStorage.getItem('combatRooms').split(',')
      const lootedRooms = localStorage.getItem('lootedRooms').split(',')
      const items = localStorage.getItem('items').split(',')
      roomText()
      document.getElementById('cSheetHealth').innerHTML = ''.concat(player.hpCurrent, '/').concat(player.hpTotal)
      document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
      document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
      document.getElementById('cSheetStatField1').innerHTML = ''.concat(player.strength)
      document.getElementById('cSheetStatField2').innerHTML = ''.concat(player.dexterity)
      document.getElementById('cSheetStatField3').innerHTML = ''.concat(player.constitution)
      document.getElementById('cSheetArmor').innerHTML = ''.concat(player.armor)
      document.getElementById('cSheetWeapon').innerHTML = ''.concat(player.dmg)
      document.getElementById('playerName').innerHTML = ''.concat(player.playerName)
      document.getElementById('roomIdTester').innerHTML = ''.concat(player.room)
      roomArr[player.room].enemyPresent = null
      exploredRooms.forEach(function (id) {
        document.getElementById(roomArr[id].mapId).style.backgroundColor = 'black'
        roomArr[id].explored = true
      })
      combatRooms.forEach(function (id) {
        roomArr[id].enemyPresent = null
      })
      lootedRooms.forEach(function (id) {
        roomArr[id].treasurePresent = null
      })
      player.inventory = []
      items.forEach(function (item) {
        itemArr[item].loot()
      })
    }

    function Button () {
      nextFloor() // document.querySelectorAll("video, audio").forEach( elem => muteMe(elem) );
      // document.getElementById("roomOption2").onclick = stat1Increment
      // document.getElementById("combatLog").innerHTML = `${enemy[0].name} Attacks!}`

      combatEnd() //     gameStart();
      // printStory(printLetterByLetter());
      // printLetterByLetter("storyTest", gameIntro);
      // nextFloor()
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
    } //  console.log('test')
    // Story Section Starts here

    storyArray = ['As a simple farm hand in the land of Lambastia, your daily life is full of heavy chores and physical labour. You know there must be more to life. You crave adventure, admiration and most of all...riches!', 'Once in a blue moon in the lands of Lambastia, there is a competition to determine a new leader. It is a matter of learning agility determined through a battle of wills. Every eligible person is welcome to the Ternary Estate to compete.', 'Today is your turn to compete! You walk into the Estate to find a standalone building with a door. Nervous, but ready to prevail, you enter the first room. You see a table with a single candle in the darkness...a note that reads “who are you?”' // Name form appears, player enters name, presses next to continue story.
    ]

    function endArrayAlert () {
      if (storyArray.length < 1) {
        alert('array is empty')
      }
    }

    const gameIntro = 'As a simple farm hand in the land of Lambastia, your daily life is full of heavy chores and physical labour. You know there must be more to life. You crave adventure, admiration and most of all...riches!'
    const gameIntro2 = 'Once in a blue moon in the lands of Lambastia, there is a competition to determine a new leader. It is a matter of learning agility determined through a battle of wills. Every eligible person is welcome to the Ternary Estate to compete.' // end of Intro

    const room1Intro = 'Today is your turn to compete! You walk into the Estate to find a standalone building with a door. Nervous, but ready to prevail, you enter the first room. You see a table with a single candle in the darkness...a note that reads “who are you?”'
    const room1Outro = 'After you finished writing on the note, the flame grew to show a door in the rear of the room. You continue onward.' // end of room 1

    const room2Intro = 'As you enter into the dimly lit room you notice an enemy spawns! They raise their sword high and begin running towards you!'
    const room2Dialogue = '“You dare enter the home of Isa Capital! If you attempt to continue this journey she will destroy you!!” You brace yourself to begin your first battle. “Let me do you a kindness and end your journey before it starts!”'
    const room2HeroDialogue = '“I will let nothing keep me from accolades for my valour! … move or... DIE!”'
    const room2Outro = 'You did it! After fighting such a courageous battle, you notice a chest towards the back of the room by the next door. Do you dare look inside?' // end of room 2

    const room3Intro = 'You enter the next room to find another monster emerging from the darkness! “I cannot let you pass, she will kill you.. It is best to submit now”'
    const room3HeroDialogue = 'Riding the high from your previous victory, you start to run towards the monster. “I do not believe in submission!”'
    const room3Outro = 'These monsters are no match for you! It is almost like you were BORN for this!' // end of room 3

    const room4Intro = 'You walk into the next room and see a frail woman packaging goods from a large sack. “Only a few will survive, but you seem keen on not giving up. I have some goods to help assist you through your journey.”'
    const room4Outro = '“Ah it is nice to have a moment of goodwill, thank you friend.” After a refreshing moment, you walk through the next door.' // end of room 4

    const room5Intro = 'As you walk through the room, you notice a monster spotting you while it is munching on what looks like a human arm... “Another snack! How I do love when your country sends me its finest desserts.”'
    const room5HeroDialogue = '“I cannot let such a vile creature exist, how dare you dine on the flesh of the living?!”'
    const room5Outro = 'You take a moment of silence for the eaten comrade and keep pushing onward.' // end of room 5

    const room6Intro = 'You notice that this room is darker than normal...and too quiet...you stop in the middle of the room to feel the hairs on your neck standing straight up. Something is breathing down your neck! A monster gut punches you from behind and you let you a shallow gasp.'
    const room6Outro = 'You barely make it out alive, but you are able to continue exploring. The dungeon is more tricky than you originally thought, but you remember that your willpower is stronger than anything that the dungeon could throw at you! You continue onward.' // end of room 6

    const room7Intro = 'While entering the next room, you hear something crying hysterically. You find a monster rocking back and forth in a fetal position...how strange... “Isa? Is that you? May I leave now? … YOU’RE NOT ISA, JUST FINALLY LET ME OUT!!”'
    const room7Outro = '“I do not know what you speak of, let me pass or meet my blade!” The monster runs to a dark corner and lets you pass to the next room.' // end of room 7

    const room8Intro = 'You enter this room to find the same kind soul that assisted you earlier pouring water from a gourd this time. You see blankets and a bed of hay. “Here, here have some well water and take a rest my friend.”'
    const room8Outro = '“I have grown weary...” You fall into a deep slumber. Dreams of the farm you call home dance through your head. You wonder if you made a mistake going into the dungeon, but then your dream shifts to a castle with you as the leader of Lambastia! You awake invigorated and thank the kind woman for her help. You are ready to dive deeper into the dungeon.' // end of room 8

    const room9Intro = 'You enter this room itching for a battle. You scan the room and see a chest shining under a torch. As you move towards the chest, you see something out of the corner of your eye...“I have seen the likes of you far too many times.. What makes you worthy?”'
    const room9HeroCry = '“I WILL NEVER GIVE UP!”' // Enemy re-spawns larger than before

    const room9AfterCombat = 'You wipe the sweat from your brow and throw your fist toward the ceiling in victory. As you walk towards the chest to finally see what is inside, you hear a rumble behind you. “I said WHAT MAKES YOU WORTTTHHYYY!”'
    const room9BeforeCombat2 = '“Oh, my” … You steady your hands and inhale. Are you ready for round 2?'
    const room9AfterCombat2 = 'What a battle! You are feeling stronger than ever as you loot the shining chest. It’s a KEY! You notice that you hear something in the distance as you walk towards the next door.' // end of room 9

    const room10Intro = 'You open the door slowly and notice the silhouettes of other adventurers in the dark corners of the room. You hear an absolutely sinister laugh growing louder and louder while the silhouettes are sobbing. What in the world have you gotten yourself into?'
    const room10HeroDialogue = '“What have you done?!”' // Re-spawns 2 times with larger health each time and the background sounds increases with each life bar.

    const room10Outro = 'Once the beast has been defeated, you notice a light growing stronger in the room. You feel your strength growing even more! You help the other adventurers escape through the door you came in, and then you scan the room. You see a rather large chest beside a staircase leading deeper into the dungeon...will you go to the next level? What will await you there?' // end of room 10 and floor 1
    // Story Functions
    // function gameStart(){
    // // document.getElementById("storyTest").innerHTML = `${gameIntro} <br> ${gameIntro2}`;
    // printLetterByLetter("charInput", gameIntro);
    // }

    function storyStart () {
      text.textContent = null
      typewriter('charInput', storyArray[0])
    }

    ;
    var nextButton = document.getElementById('nextButton')
    let clickCount = 0
    nextButton.addEventListener('click', function () {
      clickCount++
      console.log(clickCount)
    })

    function typewriter (destination, message) {
      let i = 0
      const speed = 60
      var interval = setInterval(function () {
        document.getElementById(destination).innerHTML += message.charAt(i)
        i++

        if (i > message.length) {
          clearInterval(interval)
        } // 1T WORKS LETS GOOOOOO

        if (clickCount === 1) {
          clearInterval(interval)
          text.textContent = null
          text.textContent = message
        }
      }, speed)
    }

    ; //

    function clickNext () {
      if (clickCount === 2 || text.textContent.length === storyArray[0].length) {
        clickCount = 0
        text.textContent = null
        storyArray.shift()

        if (storyArray.length === 0) {
          console.log('END')
        } else {
          typewriter('charInput', storyArray[0])
        }
      }
    }

    nextButton.addEventListener('click', clickNext) // if form is visible === true, hide next button
    // if name has value === true, reveal next button
    // Next(rmNum, message){
    // let i = 0; //when clicking next, the next text for the room shows
    // document.getElementById(destination).innerHTML
    // if (i === message.length){
    // //go to the next text
    // }
    // }
    // nextButton.addEventListener("click", gameStart);

    function greeting () {
      return 'Hello '.concat(player.name, '. What class are you?') // const nameInput = document.querySelector('pName');
      // function getName(){
      //   document.write(`Hello ${player.name}! What class are you?`);
      //    classChoice();
    }

    function classChoice (e) {
      const warriorClass = document.querySelector('button.warrior')
      const rangerClass = document.querySelector('button.ranger')
      const rogueClass = document.querySelector('button.rogue')

      if (e.target === warriorClass) {
        warrior()
      } else if (e.target === rangerClass) {
        ranger()
      } else if (e.target === rogueClass) {
        rogue()
      }
    }

    function warrior () {
      return 'Ah yes! You are a warrior bound by your brute strength and will to succeed. Welcome.'
    }

    function ranger () {
      return 'Ah yes! You are a ranger tied to the forest with your trusty shortbow at your side. Welcome.'
    }

    function rogue () {
      return 'Ah yes! You are a rogue, an assassin of the night, with your small blade to destroy anything in your path. Welcome.'
    }
  }, {}],
  'node_modules/parcel-bundler/src/builtins/hmr-runtime.js': [function (require, module, exports) {
    const global = arguments[3]
    const OVERLAY_ID = '__parcel__error__overlay__'
    const OldModule = module.bundle.Module

    function Module (moduleName) {
      OldModule.call(this, moduleName)
      this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function (fn) {
          this._acceptCallbacks.push(fn || function () {})
        },
        dispose: function (fn) {
          this._disposeCallbacks.push(fn)
        }
      }
      module.bundle.hotData = null
    }

    module.bundle.Module = Module
    let checkedAssets, assetsToAccept
    const parent = module.bundle.parent

    if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
      const hostname = '' || location.hostname
      const protocol = location.protocol === 'https:' ? 'wss' : 'ws'
      const ws = new WebSocket(protocol + '://' + hostname + ':' + '37277' + '/')

      ws.onmessage = function (event) {
        checkedAssets = {}
        assetsToAccept = []
        const data = JSON.parse(event.data)

        if (data.type === 'update') {
          let handled = false
          data.assets.forEach(function (asset) {
            if (!asset.isNew) {
              const didAccept = hmrAcceptCheck(global.parcelRequire, asset.id)

              if (didAccept) {
                handled = true
              }
            }
          }) // Enable HMR for CSS by default.

          handled = handled || data.assets.every(function (asset) {
            return asset.type === 'css' && asset.generated.js
          })

          if (handled) {
            console.clear()
            data.assets.forEach(function (asset) {
              hmrApply(global.parcelRequire, asset)
            })
            assetsToAccept.forEach(function (v) {
              hmrAcceptRun(v[0], v[1])
            })
          } else if (location.reload) {
            // `location` global exists in a web worker context but lacks `.reload()` function.
            location.reload()
          }
        }

        if (data.type === 'reload') {
          ws.close()

          ws.onclose = function () {
            location.reload()
          }
        }

        if (data.type === 'error-resolved') {
          console.log('[parcel] ✨ Error resolved')
          removeErrorOverlay()
        }

        if (data.type === 'error') {
          console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack)
          removeErrorOverlay()
          const overlay = createErrorOverlay(data)
          document.body.appendChild(overlay)
        }
      }
    }

    function removeErrorOverlay () {
      const overlay = document.getElementById(OVERLAY_ID)

      if (overlay) {
        overlay.remove()
      }
    }

    function createErrorOverlay (data) {
      const overlay = document.createElement('div')
      overlay.id = OVERLAY_ID // html encode message and stack trace

      const message = document.createElement('div')
      const stackTrace = document.createElement('pre')
      message.innerText = data.error.message
      stackTrace.innerText = data.error.stack
      overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>'
      return overlay
    }

    function getParents (bundle, id) {
      const modules = bundle.modules

      if (!modules) {
        return []
      }

      let parents = []
      let k, d, dep

      for (k in modules) {
        for (d in modules[k][1]) {
          dep = modules[k][1][d]

          if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
            parents.push(k)
          }
        }
      }

      if (bundle.parent) {
        parents = parents.concat(getParents(bundle.parent, id))
      }

      return parents
    }

    function hmrApply (bundle, asset) {
      const modules = bundle.modules

      if (!modules) {
        return
      }

      if (modules[asset.id] || !bundle.parent) {
        const fn = new Function('require', 'module', 'exports', asset.generated.js)
        asset.isNew = !modules[asset.id]
        modules[asset.id] = [fn, asset.deps]
      } else if (bundle.parent) {
        hmrApply(bundle.parent, asset)
      }
    }

    function hmrAcceptCheck (bundle, id) {
      const modules = bundle.modules

      if (!modules) {
        return
      }

      if (!modules[id] && bundle.parent) {
        return hmrAcceptCheck(bundle.parent, id)
      }

      if (checkedAssets[id]) {
        return
      }

      checkedAssets[id] = true
      const cached = bundle.cache[id]
      assetsToAccept.push([bundle, id])

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        return true
      }

      return getParents(global.parcelRequire, id).some(function (id) {
        return hmrAcceptCheck(global.parcelRequire, id)
      })
    }

    function hmrAcceptRun (bundle, id) {
      let cached = bundle.cache[id]
      bundle.hotData = {}

      if (cached) {
        cached.hot.data = bundle.hotData
      }

      if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
        cached.hot._disposeCallbacks.forEach(function (cb) {
          cb(bundle.hotData)
        })
      }

      delete bundle.cache[id]
      bundle(id)
      cached = bundle.cache[id]

      if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        cached.hot._acceptCallbacks.forEach(function (cb) {
          cb()
        })

        return true
      }
    }
  }, {}]
}, {}, ['node_modules/parcel-bundler/src/builtins/hmr-runtime.js', 'Index.js'], null)
// # sourceMappingURL=/Index.143ac65d.js.map
