import { User } from "../entities/user.js";

export function UserRepository() {

    this.user = new User();

    // this.postUser = function (user) {
        
    //     var member = JSON.stringify(user);

    //     localStorage.setItem(user.email, member);

    //     return true;
    // }

    // this.getUser = function (email) {

    //    var user = JSON.parse(localStorage.getItem(email));

    //     return user;
    // }

}