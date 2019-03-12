function Game () {
    this.registeredGames = [];
    this.name ="Game day";

    this.registerGame = function(target) {
        this.registeredGames.push(target);
    }
    
}
