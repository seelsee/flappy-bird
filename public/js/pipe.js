(function() {
    //画两根管子
    var Pipe = window.Pipe = function(obj) {
        this.point = 0;
        function randomNum(m, n) {  
            return Math.floor(Math.random() * (n - m + 1) + m);  
        }
        var arr = [100, 120, 140, 160, 180, 200, 220],
            len = arr.length;
        var arr3 = [160, 180, 200];
        // var arr2 = [100, 120, 140, 160],
        //     len2 = arr2.length;

        //第一根down_pipe;
            y = parseInt(Math.random() * len),
            x = arr[y]; 
        this.image = obj.img.pipe_down;
        this.w = 52;//图片宽度
        this.h = x;
        this.x = obj.canvas.width + Math.random() * 20;//画布后出现管道
        this.y = 0;
        //第二根up_pipe
        this.image2 = obj.img.pipe_up;
        //加判断条件 ,up pipe 太长
        if(x == 200 || x == 220 || x == 180 || x == 160) {
            var y2 = parseInt(Math.random() * (len - 5)),
            x2 = arr[y2];
        } else if(x == 100 || x == 120) {
            var y2 = parseInt(Math.random() * arr3.length);
            x2 = arr3[y2];
        }
        else {
            var y2 = parseInt(Math.random() * len),
            x2 = arr[y2];

        }
        this.allHeight = obj.canvas.height * 0.885;
        this.h2 = x2;
        this.y2 = this.allHeight - this.h2;
        this.render = function() {
            obj.ctx.drawImage(this.image, 0, 0, this.w, 320, this.x, this.y, this.w, this.h);
            obj.ctx.drawImage(this.image2, 0, 0, this.w, 320, this.x, this.y2, this.w, this.h2);
        }
        //更新管子
        this.update = function() {
            this.x--;
            // console.log(this.x);
            if(this.x < -this.w){
                this.point++;
                // console.log(point)
                this.x = obj.canvas.width;
                //第一根pipe
                this.h = arr[parseInt(Math.random() * len)];
                this.y = 0;
                //第二根pipe
                if(this.h == 200 || this.h == 220 || this.h == 180 || this.h == 160) {
                    this.h2 = arr[parseInt(Math.random() * (len - 4))];
                } else if(this.h == 100 || this.h == 120) {
                    
                    this.h2 = arr3[parseInt(Math.random() * arr3.length)];
                } 
                
                else {
                    this.h2 = arr[parseInt(Math.random() * len)];

                }

                this.y2 = this.allHeight - this.h2;
            }
        }
    }
})()

