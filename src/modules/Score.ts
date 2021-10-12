export class Score {
    score: number = 0;
    level: number = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
  
    constructor(public maxLevel = 10) {
      this.scoreEle = document.getElementById("score")!;
      this.levelEle = document.getElementById("level")!;
    }
    addScore() {
      this.scoreEle.innerHTML = ++this.score + "";
      if (this.score % 10 === 0) {
        this.levelUp();
      }
    }
    levelUp() {
      if (this.level > this.maxLevel) return;
      this.levelEle.innerHTML = ++this.level + "";
    }
  }