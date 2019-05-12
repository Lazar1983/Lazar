import { Team } from "../entities/team.js";

export function TeamRepository() {

    this.team = new Team();
    
    this.getLogoRepo = function () {

        return this.team.logo[0];
    }

    this.fanLogoRepo = function () {
        return this.team.logo[1];
    }

    this.getGallery = function (i) {

        return "gallery/" + i + ".jpg";
        
    }



}
