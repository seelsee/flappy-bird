(function() {
    var Bird = window.Bird = function(obj) {
        this.image = obj.img.bird0;
        this.x = 50;
        //图片大小
        this.w = 40;
        this.h = 26;
        this.y = obj.canvas.height / 2 - 20;
        this.render = function() {
            obj.ctx.drawImage(this.image,this.x,this.y);
        }
    }
})()