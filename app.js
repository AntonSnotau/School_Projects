console.log('hi');
//4//
function Furry(x, y) {
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
  var furry = new Furry();
  var coin = new Coin();
  var score = 0;
  furry.index = function(x,y) {
  return x + (y * 10);
  };
  function showFurry() {
    this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
  };
  showFurry();
  function showCoin() {
    this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
  };
  showCoin();
};

var game = new Game();
game.showFurry();
game.showCoin();
