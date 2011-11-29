/*!
 * 
 *   melonJS
 *   http://www.melonjs.org
 *		
 *   Step by step game creation tutorial
 *
 **/

// game resources
// var g_resources= [{
// 	name: "area01_level_tiles",
// 	type: "image",
// 	src: "data/area01_tileset/area01_level_tiles.png"
// },{
// 	name: "area01",
// 	type: "tmx",
// 	src: "data/area01.tmx"
// }];
//game resources
var g_resources = [{
    name: "area01_level_tiles",
    type: "image",
    src: "data/area01_tileset/area01_level_tiles.png"
}, {
    name: "area01",
    type: "tmx",
    src: "data/area01.tmx"
}, {
	name: "gripe_run_right",
	type: "image",
	src: "data/sprite/gripe_run_right.png"
}, {
	name: "area01_bkg0",
	type: "image",
	src: "data/area01_parallax/area01_bkg0.png"
}, {
	name: "area01_bkg1",
	type: "image",
	src: "data/area01_parallax/area01_bkg1.png"
}, {
	name: "spinning_coin_gold",
	type: "image",
	src: "data/sprite/spinning_coin_gold.png"
}, {
	name: "wheelie_right",
	type: "image",
	src: "data/sprite/wheelie_right.png"
}];


var jsApp	= 
{	
	/* ---
	
		Initialize the jsApp
		
		---			*/
	onload: function()
	{
		//alert($("#test"))

		//alert(window.$);
		
      // init the video
		if (!me.video.init('jsapp', 640, 480, false, 1.0))
		{
			alert("Sorry but your browser does not support html 5 canvas.");
         return;
		}
				
		// initialize the "audio"
		me.audio.init("mp3,ogg");
		
		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);
		
		// set all resources to be loaded
		me.loader.preload(g_resources);

		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},
	
	
	/* ---
	
		callback when everything is loaded
		
		---										*/
	loaded: function ()
	{
		// set the "Play/Ingame" Screen Object
		me.state.set(me.state.PLAY, new PlayScreen());
     
     	me.entityPool.add("mainPlayer",PlayerEntity);
     	me.input.bindKey(me.input.KEY.LEFT, "left");
     	me.input.bindKey(me.input.KEY.RIGHT, "right");
     	me.input.bindKey(me.input.KEY.X, "jump", true);
     	//me.debug.renderHitBox = true;

		// me.entityPool.add("CoinEntity", CoinEntity);
		// me.entityPool.add("EnemyEntity",EnemyEntity);

        // start the game 
		me.state.change(me.state.PLAY);
	}

}; // jsApp

/* the in game stuff*/
var PlayScreen = me.ScreenObject.extend(
{

   onResetEvent: function()
	{	
      // stuff to reset on state change

     // me.levelDirector.loadLevel("area01");
      me.levelDirector.loadLevel("area01");
	},
	
	
	/* ---
	
		 action to perform when game is finished (state change)
		
		---	*/
	onDestroyEvent: function()
	{
	
   }

});


//bootstrap :)
window.onReady(function() 
{
	jsApp.onload();
});
