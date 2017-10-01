document.addEventListener("DOMContentLoaded", function(){

function Furry(x, y, direction) {
  this.x = 0;
  this.y = 0;
  this.direction = 'right';
}
function Coin(x, y) {
  this.x = Math.floor(Math.random() * 10);
  this.y = Math.floor(Math.random() * 10);
}
function Game() {
  var board = document.querySelectorAll('#board div');
  this.board = board;
  var furry = new Furry();
  var coin = new Coin();
  var score = 0;
  var newscore = document.querySelector('#score div strong');
  var index = function(x,y) {
  return x + (y * 10);
  };
  this.showFurry = function() {
    this.hideVisibleFurry();
    this.board[index(furry.x, furry.y)].classList.add('furry');
    if ((furry.x > 9 || furry.x < 0) || (furry.y > 9 || furry.y < 0)) {
      this.hideVisibleFurry();
    };
  };
  this.hideVisibleFurry = function() {
    var deadFurry = document.querySelector('.furry');
    if (deadFurry) {
    deadFurry.classList.remove('furry');
    }
  };
  this.showCoin = function() {
    this.board[index(coin.x, coin.y)].classList.add('coin');
  };
  this.moveFurry = function(x, y) {
    if (furry.direction === "right") {
    furry.x = furry.x+1;
    }
    else if (furry.direction === "left") {
    furry.x = furry.x-1;
    }
    else if (furry.direction === "top") {
    furry.y = furry.y-1;
    }
    else if (furry.direction === "bottom") {
    furry.y = furry.y+1;
    }
    this.checkCoinCollision();
    this.gameOver();
    this.showFurry();
  };
  this.turnFurry = document.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 37:
        furry.direction = "left";
        break;
      case 38:
        furry.direction = "top";
        break;
      case 39:
        furry.direction = "right";
        break;
      case 40:
        furry.direction = "bottom";
        break;
    }
  });
  this.checkCoinCollision = function() {
    if (furry.x == coin.x && furry.y == coin.y) {
      this.board[index(coin.x, coin.y)].classList.remove('coin');
      score++;
      newscore.innerText = score;
      coin = new Coin();
      this.showCoin();
    }
  };
  this.gameOver = function() {
    if ((furry.x > 9 || furry.x < 0) || (furry.y > 9 || furry.y < 0)) {
      newscore.innerText = "GAME OVER";
      this.hideVisibleFurry();
      clearInterval(this.idSetInterval);
    }
  };
  this.startGame = function() {
    var self = this;
    this.idSetInterval = setInterval(function() {
      self.moveFurry();
    }, 250);
  };
};
var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();
});
