(function () {
   var Game = window.Game = function() {
       this.canvas = document.querySelector('#canvas');
       this.ctx = this.canvas.getContext('2d');
       this.init();
       var that = this;
       this.loadAllResource(function() {
           that.begin();
       }
    )
   }
   Game.prototype.init = function() {
       this.canvas.width = 343;
       this.canvas.height = 480;
   }
   Game.prototype.loadAllResource = function(fn) {
       this.img = {};
       for(let i = 0;i < images.length;i++) {
           this.img[images[i].name] = new Image();
           this.img[images[i].name].src = images[i].url;
       }
       fn();
   }
   Game.prototype.begin = function() {
        var that = this;
        this.background = new Background(this);
        this.banner = new Banner(this);
        this.bird = new Bird(this);
        this.pipe = new Pipe(this);
        var isGameOver = false;
        var speed = 3;
        var timer = setInterval(function() {
            that.background.render();
            that.banner.render();
            that.banner.update();
            that.bird.render();
            if(isUp) {
                that.bird.update();
            } else {
                that.bird.update_down();

            }
            that.pipe.render();
            that.pipe.update();
            
            that.bird.y += speed;
            if(that.bird.y > 400) {
                that.bird.y = 400;
                isGameOver = true;
            }
            isTouch(that.bird.x, that.bird.y, that.pipe.x, that.pipe.y, that.pipe.y2);
            if(isGameOver === true) {
                box.style.display = 'block';
                clearInterval(timer);
            }
        }, 20);
        //键盘触发事件
        var isUp = false;
        document.onkeydown = function(ev) {
            var ev = window.ev || ev;
            switch(ev.keyCode) {
                //空格
                case 32: {
                    isUp = true;
                    //弹跳速度
                    var i = 60;
                    if(isUp) {
                        that.bird.y -= i;
                        if(that.bird.y < 0) {
                            that.bird.y = 0;
                        }    
                        // that.bird.update();
                    }
                }
            break;
            }
        }
        //放开键盘
        document.onkeyup = function(ev) {
            var ev = window.ev || ev;
            switch(ev.keyCode) {
                case 32: {
                    isUp = false;
                }
            }
        }
        //碰撞检测
        function isTouch(birdX, birdY, pipeX, pipeY, pipeY2) {
            if((birdX + that.bird.w) > pipeX && birdX < (pipeX + that.pipe.w)) {
                if((birdY + that.pipe.h) > pipeY && birdY < (pipeY + that.pipe.h)) {

                        isGameOver = true;
                }
                if(birdY + that.bird.h > pipeY2) {

                        isGameOver = true;
                }
                
            }
        }
   }

})()