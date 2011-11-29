/*
 * A Coin Entity
 */
var CoinEntity = me.CollectableEntity.extend({
	init: function(x, y, settings) {
		this.parent(x, y, settings);
	},

	onDestroyEvent: function() {
		
	}
});