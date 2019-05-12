import { TeamRepository } from "../repositories/teamRepository.js";
import { UserRepository } from "../repositories/userRepo.js";

export function TeamLogic () {

    this.teamRepo = new TeamRepository();
    this.userRepo = new UserRepository();

    this.getLogo = function () {
        return this.teamRepo.getLogoRepo(); 
    }

    this.fanLogo = function () {
        return this.teamRepo.fanLogoRepo();
    }

    this.getGalleryPics = function () {
        var pics = [];

        for (var i = 0; i < 69; i++) {
            var galleryPics = this.teamRepo.getGallery(i);
            pics.push(galleryPics);
        }
  
        return pics;
    }

    // this.userData = function (name, email, pass) {

    //     var user = new User(name, email, pass);

    //     var postData = this.userRepo.postUser(user);
    //     return postData;

        
    // }

    // this.getUserData = function (email, pass) {

    //     var getData = this.userRepo.getUser(email);

    //     if (getData === null) {
    //         return false;
    //     } else {
    //         if (getData.pass === pass) {
    //             return getData.name;

    //             } else {
    //                     return false;
    //             }
    //     }

    // }

    // this.resetPassword = function (email) {

    //     return !!this.userRepo.getUser(email);

    // }

    // this.postNewPassword = function (newPass, email) {

    //     var getData = this.userRepo.getUser(email);

    //     getData.pass = newPass;

    //     var postData = this.userRepo.postUser(getData);

    //     return postData;

    // }



}