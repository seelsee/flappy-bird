// (function() {
//     var Banner = window.Banner = function(obj) {
//         this.image = obj.img.banner;
//         this.y = obj.canvas.height * 0.7;
//         this.x = 0;
//         this.w = 336;
//         this.h = 112;
//         this.render = function() {
//             obj.ctx.drawImage(this.imasge, this.x, this.y);
//             obj.ctx.drawImage(this.image, this.x + this.w, this.y);
//             obj.ctx.fillStyle = '#ded895';
//             obj.ctx.fillRect(this.x , this.y + this.h - 10, this.w , (obj.canvas.height - this.y - this.h + 10));
//             obj.ctx.fillRect(this.x + this.w, this.y + this.h - 10, this.w , (obj.canvas.height - this.y - this.h + 10));
//         }
//         this.update = function() {
//             this.x--;
//             if(this.x < -this.w + 100) {
//                 this.x = 0;
//             }
//         }
//     }
// })()


(function() {
    var Banner = window.Banner = function(obj) {
        this.image = obj.img.banner;
        //banner高度设置
        this.y = 423;   
        this.x = 0;
        this.w = 300;//小于画布宽度
        this.render = function() {
            obj.ctx.drawImage(this.image,this.x,this.y);
            obj.ctx.drawImage(this.image,this.x + this.w,this.y);
        }
        //更新banner
        this.update = function() {
            this.x--;
            // console.log(this.x)
            if(this.x < -this.w + 100) {
                this.x = 0;
            }
        }
    }
})()
