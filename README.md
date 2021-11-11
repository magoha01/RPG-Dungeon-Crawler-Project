*Room Tile Dungeon Crawler Project*

-- General Idea


Top of page is a nav of sorts with options, 

** Character sheet with stats and inventory, needed

** Text output of story, paired with dialogue boxes and options in the form of buttons

** Set of room objects, with properties and methods for navigation and possibly fights / chest looting

** Sprites to represent various entities

** Web formatting, html and CSS to serve as GUI for dungeon crawler, fitting rough outline of wireframe

** Figure out cookies and how to import JS logic to website

** Figure out hosting- nevermind

** Map GUI needs to be updated as player moves around, each room is object with explored boolean that updates to div ?? on map 

** Character object populated with user input, so character setup dialogue at the beginning, maybe tied to a room

** Story map, rooms follow from that, order # 1 of business

** Write database of rooms, each room ought to have an identifying number, and a set position relative to other rooms, such that referencing a direction will allow the number/name of the rome to be moved to to be referenced 

** Database of monster to fight objects, stats laid out, loot drops

** database of items, ability to be placed in or referenced from chests and monsters, health potions

** Locked door key system, key object as drop

** Combat -- attack options, turn based, health meter, updates

** Multiple floors, map logic built in for each floor.

** Goal is to escape


// you wake up on the ground, shivering. It is pitch black. You don't know where you are. As a matter of fact, you dont know who you are. Who are you? --input name--

// now that we've established who you are, what are you? You look to be a warrior of some sort, but what kind of warrior? A mage? a paladin? an archer? --select class--

// you've sat here for a while now, and you eyes have had time to adjust. You notice the outline of a heavy wooden door, off in the distance. Looking around you you see a ragged looking leather chest, ((essentials-items depending on choice made, compass))

// you can sit here forever if you'd like, but I dont much like the atmosphere here. how deep underground even are we? It stinks, it's dark and it's cold, and I'd like to get out, and the only way forward I can see is through that door. 

//

