(function() {
    var Bird = window.Bird = function(obj) {
        this.image = obj.img.bird0;
        this.image_up = obj.img.up_bird1;
        this.image_down = obj.img.down_bird0;
        this.x = 50;
        //图片大小
        this.w = 40;
        this.h = 26;
        this.y = obj.canvas.height / 2 - 20;
        this.render = function() {
            obj.ctx.drawImage(this.image,this.x,this.y);
        }
        //改变上升时的动画 
        this.update = function () {
            obj.ctx.drawImage(this.image_up,this.x,this.y);
        }
        this.update_down = function() {
            obj.ctx.drawImage(this.image_down,this.x,this.y);

        }
    }
})()