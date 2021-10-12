export default class Snake{
    head: HTMLElement;
    bodles: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodles = document.getElementById('snake')?.getElementsByTagName('div')!
        this.element=document.getElementById('snake')!;

    }
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    set X(x: number) {
        if (this.X === x) return;
        if (x < 0 || x > 290) {
            // 进入判断说明蛇撞墙了，抛出一个异常
            throw new Error('蛇撞墙了！');
        }

        if (this.bodles[1] && (this.bodles[1] as HTMLElement).offsetLeft === x) {
            // console.log('水平方向发生了掉头');
            // 如果发生了掉头，让蛇向反方向继续移动
            if (x > this.X) {
                // 如果新值value大于旧值X，则说明蛇在向右走，此时发生掉头，应该使蛇继续向左走
                this.X = this.X - 10;
            } else {
                // 向左走
                x = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = x + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody();
        
    }
    set Y(y: number) {
        // console.log(this.head.offsetTop);
        if(this.Y===y) return;
        if (y < 0 || y > 290) {
            // 进入判断说明蛇撞墙了，抛出一个异常
            throw new Error('蛇撞墙了！');
        }

        if (this.bodles[1] && (this.bodles[1] as HTMLElement).offsetTop === y) {
            if (y > this.Y) {
                y = this.Y - 10;
            } else {
                y = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = y + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody();
        
    }
    addBody() {
        let divElement = document.createElement('div');
        this.element.insertAdjacentElement("beforeend",divElement)
    }
    moveBody() {
        /* 
        sdas
         */
        for (let i = this.bodles.length - 1; i > 0; i--) {
            let X = (this.bodles[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodles[i - 1] as HTMLElement).offsetTop;
            (this.bodles[i] as HTMLElement).style.left = X + 'px';
            (this.bodles[i] as HTMLElement).style.top = Y + 'px';
        }
    }
     // 检查蛇头是否撞到身体的方法
     checkHeadBody() {
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for (let i = 1; i < this.bodles.length; i++) {
            let bd = this.bodles[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 进入判断说明蛇头撞到了身体，游戏结束
                throw new Error('撞到自己了！');
            }
        }
    }
}