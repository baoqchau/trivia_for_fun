var game = new Phaser.Game(800, 900, Phaser.AUTO);
    game.state.add('Menu', Trivia.Menu);
    game.state.add('chooseTopic', Trivia.chooseTopic);
    game.state.add('History', Trivia.History);
    game.state.add('Science', Trivia.Science);
    game.state.start('Menu');
