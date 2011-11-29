/*
 *  A player entity
 */



 var PlayerEntity = me.ObjectEntity.extend({
 	
 	init: function(x, y, settings) {
 		this.parent(x,y,settings);
 		this.setVelocity(3,15);
 		this.updateColRect(8, 48, -1, 0);
 		me.game.viewport.follow(this.pos,me.game.viewport.AXIS.BOTH);
 	},



 	update: function() {
 		if(me.input.isKeyPressed('left')) {
 			this.doWalk(true);
 			// this.vel.x = -2;
 			// this.flipX(true);
 		} else if(me.input.isKeyPressed('right')) {
 			myv = this.doWalk(false);


 			// this.vel.x = 2;
 			// this.flipX(false);
 		} else {
 			this.vel.x = 0;
 		}
 		if(me.input.isKeyPressed('jump')) {
 			// this.vel.x = 4;
 			// this.jumpspeed = 14;
 			// this.jumping = true;
 			this.doJump();
 		}

 		updated = this.updateMovement();

 		if(updated) {
 			this.parent(this);
 		}
 		return updated;
 	}

 });