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
         var timer = setInterval(function() {
             that.background.render();
             that.banner.render();
             that.banner.update();
            
             
         }, 20);


       
    }
 
 })()