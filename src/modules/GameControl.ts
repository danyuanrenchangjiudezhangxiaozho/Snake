import { Food } from "./Food";
import { Score } from "./Score";
import Snake from "./Snake";
export default class Game{
    food:Food;
    score: Score;
    snake: Snake;
    //控制方向
    direction:string='';
    // 创建一个属性用来记录游戏是否结束
    isLive = true;
    constructor() {
        this.food = new Food();
        this.score = new Score();
        this.snake = new Snake();
        this.init();
    }
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.run()
    }
    run() {
        /*
        *   根据方向（this.direction）来使蛇的位置改变
        *       向上 top  减少
        *       向下 top  增加
        *       向左 left 减少
        *       向右 left 增加
        */
        // 获取蛇现在坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键方向来计算X值和Y值（未更新）
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }
        // 检查蛇是否吃到了食物
        this.checkEat(X, Y);
        //修改蛇的X和Y值
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            // 进入到catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert( ' GAME OVER!');
            // 将isLive设置为false
            this.isLive = false;
        }
        this.isLive && setTimeout(() => {
            this.run();
        }, 300 - (this.score.level - 1) * 30);
    }
    checkEat(x:number, y:number) {
        if (x === this.food.X && y === this.food.Y) {
            console.log('我执行了',x,y,this.food.X,this.food.Y);
            
            // 食物的位置要进行重置
            this.food.change();
            // 分数增加
            this.score.addScore();
            // 蛇要增加一节
            this.snake.addBody();
        }
    }

    keydownHandler(e: KeyboardEvent) {
        this.direction = e.key

    }
    
}