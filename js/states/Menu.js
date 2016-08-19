var Trivia = {};

Trivia.Menu = function(game) {
    var menuIcon;
    var playGame;
    var instructions;
    var quit;
};

Trivia.Menu.prototype = {
    preload: function(){
        this.load.image('icon', '/img/question-mark.png');
    },
    create: function() {
        this.game.stage.backgroundColor =  '#62ACC4';
        playGame = this.add.text(50, game.world.height - 200, 'Play Game',
                                {fill:'#FFEE00'});
        instructions = this.add.text(400, game.world.height - 200, 'Instructions',
                                {fill:'#FFEE00'});
        this.logo = this.add.sprite(game.world.width - 350, game.world.height - 550, 'icon');
        this.logo.anchor.set(0.5);
    },
    update: function() {
        this.logo.rotation += 0.01;
    }
};