function FootballClub (name) {
    this.name = name;
    this.players = [];
    this.games = [];

    this.draftPlayers = function () {
        for (index = 1; index <= 22; index++) {
            var player = new Player (position[getRandomNumber(0, 3)] + "-" + index);
            this.players.push(player);
            
  
        }
    }

    this.generateGames = function () {
        for (index = 1; index <=30; index++) {
            var game = new Game (teams[getRandomNumber(0, 3)] + "-" + index);
            this.games.push(game);

        }
    }

    this.generateGames();
    this.draftPlayers();

}


