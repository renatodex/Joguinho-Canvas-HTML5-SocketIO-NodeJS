/*
 * An Enemy Entity
 */
var EnemyEntity = me.ObjectEntity.extend({
	init: function(x, y, settings) {
		settings.image = "wheelie_right";
		settings.spritewidth = 64;
		this.parent(x,y,settings);

		this.startX = x;
		this.endX = x + settings.width - settings.spriteWidth;
		this.pos.x = x + settings.width - settings.spriteWidth;
		this.walkLeft = true;

		this.setVelocity(4, 6);

		this.collidable = true;
		this.type = me.game.ENEMY_OBJECT;
	},

	onCollision: function(res, obj) {
		if(this.alive && res.y > 0 && obj.falling) {
			this.flicker(45);
		}
	},

	update: function() {
		if(!this.visible && !this.flickering)
			return false;

		if(this.alive) {
			if(this.walkLeft && this.pos.x <= this.startX) {
				this.walkLeft = false;
			} else if(!this.walkLeft && this.pos.x >= this.endX) {
				this.walkLeft = true;
			}

			this.doWalk(this.walkLeft);
		} else {
			this.vel.x = 0;
		}

		updated = this.updateMovement();

		if(updated) {
			this.parent();
		}
		
		return updated;
	}
});