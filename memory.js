var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
var timeLimit = 40;
var currentTimeLeft;
var timerInterval;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	tiles_flipped = 0;
	var output = '';
    memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id="tile_'+i+'" class="front '+memory_array[i]+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	output += '<div id="chrono1"><h1 class="counter"></h1><h3></h3></div>';
	document.getElementById('memory_board').innerHTML = output;

	currentTimeLeft = timeLimit;
	document.getElementById('chrono1').getElementsByClassName('counter')[0].innerHTML = currentTimeLeft.toString();
	timerInterval = setInterval(timer, 1000);
}
function gameEnd(action)
{
	clearInterval(timerInterval);
	document.getElementById('memory_board').innerHTML = "";
	action();
}
function timer()
{
	currentTimeLeft -= 1;
	if(currentTimeLeft <= 0)
	{
		gameState = 0;
		currentTimeLeft = 0;
		document.getElementById('chrono1').getElementsByClassName('counter')[0].innerHTML = currentTimeLeft.toString();
		gameEnd(goLeft);
	}
	document.getElementById('chrono1').getElementsByClassName('counter')[0].innerHTML = currentTimeLeft.toString();
}
function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = 'url(immagini/gioco_3/back.png) no-repeat';
		tile.oldClass = tile.className;
		tile.className = tile.className + " flipping"
		tile.innerHTML = "<div class='tile "+val+"'></div>";
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		} else if(memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values[0] == memory_values[1]){
				tiles_flipped += 2;
				memory_values = [];
            	memory_tile_ids = [];

				if(tiles_flipped == memory_array.length){
					gameEnd(goCenter);

				}
			} else {
				function flip2Back(){

					var tile_1 = document.getElementById(memory_tile_ids[0]);
				    var tile_2 = document.getElementById(memory_tile_ids[1]);
					tile_1.className = tile_1.oldClass;
				    tile_1.style.background = 'url(immagini/gioco_3/back.png) no-repeat';
					tile_1.style.backgroundSize = 'cover';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(immagini/gioco_3/back.png) no-repeat';
					tile_2.style.backgroundSize = 'cover';
            	    tile_2.innerHTML = "";
					tile_2.className = tile_2.oldClass;

					memory_values = [];
            	    memory_tile_ids = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}
}
