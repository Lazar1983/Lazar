function Player (name) {
    this.name = name;
    this.player = [];
    this.reputation = getRandomNumber(65, 99);

       
    this.registerToGame = function (target) {
        this.myGames.push(target);
        target.generateGames(this.name);
    }



}