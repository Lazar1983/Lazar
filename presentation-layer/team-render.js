import { TeamLogic } from "../business-layer/business-logic.js";
import { User } from "../entities/user.js";

export function TeamRender () {

    this.users = [];
    this.usersKey = "users";
    self = this;

    this.mainContainer = $("#main-container");
    this.mainNav = $(".mainNav");
    this.newsSection = $("#newsSection");
    this.businessLogic = new TeamLogic ();

    this.logoRender = this.businessLogic.getLogo();
    this.logoRenderFans = this.businessLogic.fanLogo();
    this.gallery = this.businessLogic.getGalleryPics();
    
    

    this.renderAll = function() {

        $("<img>").addClass("background").attr("src", this.backroundRender)
        .css("position", "absolute").css("height", "1170px").appendTo(this.mainContainer)

        this.headerRender();
        this.newsRender();
        this.galleryRender();
        this.loginForm();
        this.forumRender();
        
    }

    this.headerRender = function() {

        var header = $("<header>")
        .css("height", "56px").css("position", "fixed").css("width", "100%")
        .appendTo(this.mainContainer)

        

        var container = $("<div>")
        .addClass('container').appendTo(this.mainContainer)
        .css("width", "80%")
        .css("margin", "0 auto").appendTo(header)

        $("<img>").addClass("logo").attr("src", this.logoRender)
        .css("height", "135px").css("position", "absolute").css("top", "9px")
        .appendTo(container);

        $("<img>").addClass("logo2").attr("src", this.logoRenderFans)
        .css("height", "135px").css("position", "absolute").css("top", "9px")
        .css("left", "261px").css("border-radius", "70px")
        .appendTo(container);

        $(this.mainNav).appendTo(container).css("display", "flex")
        .css("justify-content", "flex-end").css("list-style-type", "none").css("margin", "0");

        var links = $("<div>").attr("id", "links").appendTo(header)

        $("<a>").addClass("links").addClass("fa fa-facebook")
        .attr("href", "https://www.facebook.com/familijaren").appendTo(links);

        
    }

    this.newsRender = function () {
        var news = $("<div>").addClass("newsSection").css("background-color", "darkcyan").css("width", "90%").css("margin", "0 auto")
        .appendTo(this.newsSection)
        $("<h1>").addClass("title").text("МЗТ го разнесе Работнички и го запоседна врвот во Суперлигата!")
        .appendTo(news)
        $("<img>").addClass("imgForTittle").attr("src", "gallery/70.jpg").appendTo(news)
        $("<p>").addClass("text").text("Македонскиот кошаркарски вицепрвак МЗТ Скопје го возврати ударот и во СЦ „Јане Сандански“ убедливо славеше над Работнички (85-63), триумф со кој се зацврсти на врвот во кошаркарската Суперлига.")
        .appendTo(news)
        $("<p>").addClass("text").appendTo(news).text("Целосниот натпревар на МЗТ Скопје и Работнички:")
        $("<iframe>").attr("src", "https://www.youtube.com/embed/S8oF6Ld8vZM").appendTo(news)
        $("<p>").addClass("text").appendTo(news).text("Аеродромци се реваншираа за претходниот пораз во Аеродром на првата средба (88-90), како и за оној во Купот на Македонија. МЗТ, кој диктираше темпо на игра и константно водеше цела средба, сега е лидер на табелата, со скор 22-3, наспроти Работнички кој е второпласиран и има скор 20-5. Следното дерби на програмата во Суперлигата ќе биде во рамки на 10. коло, кога центарци се домаќини.")
        $("<p>").addClass("text").appendTo(news).text("Ривалите во мак-баскетот имаа рамноправни пет минути, кога на семафорот во Аеродром стоеше 10-12, а потоа почна МЗТ да игра далеку подобро. Посебно во рекетот, каде одлични беа Иванов и Самарџиски, кои донесоа серија од 8-0 и предност за домашниот тим од 18-12. Работнички константно бркаше резултат, но ниту еднаш не успеа да го загрози високото водство на „штрковите“, пред се поради многуте промашувањата и грешните додавања во нападот.")
        $("<p>").addClass("text").appendTo(news).text("Кочов добро ја постави одбраната, а офанзивата на МЗТ преку Самарџиски и Иванов, потпомогнати од американските играчи Вудард и Медфорд, беше на ниво уште од почетокот, па во вториот квартал од мечот, МЗТ дојде и до највисоки +15 (37-22), висока предност која остана на мечот и до полувремето (48-36). ")
        $("<p>").addClass("text").appendTo(news).text("Разликата во првиот дел беше и во слободните фрлања. Работнички ниту еднаш не шутна од линијата, наспроти МЗТ кој поентираше десет пати, од вкупно 13 обиди. Првите „пенали“ на мечот Работнички ги имаше дури по 26 минути игра, кога Крстевски реализира двапати (63-46), ")
        $("<p>").addClass("text").appendTo(news).text("Пред финишот на третиот период Работнички доживеа нов пех, затоа што го загуби Крстевски поради повреда при доскок, а МЗТ дојде и до највисоки +19 (65-46). На шест минути пред крајот, „штрковите“ имааа и позитива од дваесет поени (74-54), по што победникот на овој натпревар веќе беше јасен.")
        $("<p>").addClass("text").appendTo(news).text("Најефикасен во победата на МЗТ Скопје беше Иве Иванов со „дабл-дабл“ од 26 поени и 10 скока, а поддршка му беше Предраг Самарџиски, исто така со „дабл-дабл“ од 18 поени и 16 скока, од кои 10 дефанзивни. Трет стрелец беше Медфорд, со 15 поени. Кај Работнички најмногу се истакна Костов со 18 поени, а Караџовски заврши со 15 поени.")
        $("<p>").addClass("text").appendTo(news).text("Во наредното суперлигашко коло МЗТ Скопје ќе му биде домаќин на Кожув, додека Работнички како домаќин ќе се соочи со последнопласираниот Куманово.")


    }
    
    this.galleryRender = function () {

        
        var galleryRend = $("<div>").addClass("galleryRend").attr("id", "galleryRend")
            .css("width", "70%").css("margin", "0 auto")
            .css("display", "flex").css("flex-wrap", "wrap")
            .appendTo("#galleryContainer");

        var popUp = $("<div>").attr("id", "popUp").css("display", "none").appendTo("#galleryRend");
        var popUpimg = $("<img>").attr("class", "popUpImg").appendTo(popUp);
        var form = $("<form>").attr("id", "form").css("position", "absolute").appendTo(popUp)
        var nextBtn = $("<button>").text("next").appendTo(form);
        var previousBtn = $("<button>").text("previous").appendTo(form);

        for (var i = 1; i < 69; i++) {

            var galleryImages = $("<div>").addClass("galleryImages")
            .css("height", "100px")
            .css("display", "flex")
                .appendTo(galleryRend)
 
            $("<img>").addClass("images").attr("src", this.gallery[i]).on("click", function(event){

                $(popUpimg).attr("src", event.target.src).css("position", "absolute")
                .css("width", "500px")
                $(popUp).css("display", "block")
    
            }).appendTo(galleryImages);
                         
        }





        $(nextBtn).on("click", function () {

            var currentImage = $(popUpimg).attr("src").split("gallery/")[1].split(".jpg")[0];
            currentImage = parseInt(currentImage) + 1;
            $(popUpimg).attr("src", "gallery/" + currentImage + ".jpg");

        });









     
    

    }




    this.loginForm = function () {



        var form = $("<div>").attr("id", "loginForm")
            .appendTo("#login");

        var icon = $("<img>").attr("id", "icon").attr("src", "gallery/logo1.png").appendTo(form)

        var userName = $("<input>").attr("id", "email").attr("placeholder", "емаил")
            .appendTo(form);
        var pass = $("<input>").attr("id", "pass").attr("placeholder", "Лозинка").attr("type", "text")
            .appendTo(form);
        var logIn = $("<button>").attr("id", "logInBtn").text("Најави Се")
            .appendTo(form);

        var registerForm = $("<div>").attr("id", "registerForm").css("display", "none")
            .appendTo("#login")
        
        var icon = $("<img>").attr("id", "icon").attr("src", "gallery/logo1.png").appendTo(registerForm)

        var userMail = $("<input>").attr("id", "emailReg").attr("placeholder", "емаил")
            .appendTo(registerForm);
        var pass = $("<input>").attr("id", "passReg").attr("placeholder", "лозинка").attr("type", "text")
            .appendTo(registerForm);
        var pass = $("<input>").attr("id", "repeatPass").attr("placeholder", "повтори лозинка").attr("type", "text")
        .appendTo(registerForm);
        var regIn = $("<button>").attr("id", "regInBtn").text("Регистрирај Се")
            .appendTo(registerForm);

            $(logIn).click (function () {
                $("#main-container").css("display", "block");
                $("#LogInContainer").css("display", "none");
                $("#newsSection").css("display", "block");
            })



            $(regIn).click(function () {
                if(!localStorage.getItem(self.usersKey)) {
                    localStorage.setItem(self.usersKey, []);
                }
                else {
                    self.users = JSON.parse (localStorage.getItem(self.usersKey));
                }
                var user = new User() ;
                self.users.push(user);
                localStorage.setItem(self.usersKey, JSON.stringify(self.users))

                $(registerForm).css("display", "none")
                $(form).css("display", "block")

            });



   

        var register = $("<span>").attr("id", "register").text("регистрирај се").appendTo(form);

        $(register).click(function () {
            $(form).css("display", "none")
            $(registerForm).css("display", "block")
        })


    }

    this.forumRender = function () {

        $("<button>").attr("id", "new").text("Add").appendTo("#forum-style");


        $("#ultrasStyle").click(function (){
            $("#forum-style").css("display", "block")
            $("#forum").css("display", "none")
        })

        $("#new").click(function () {

            $(".inputTopic").css("display", "block");
            $(".textAreaTopic").css("display", "block");
            $("#postBtn").css("display", "block");

        });

        $("<button>").attr("id", "postBtn").text("post").appendTo("#forum-style");

            $("#postBtn").click(function() {

                var currentTopic = $(".inputTopic").val();

                $("<h2>").text(currentTopic).appendTo("#forum-style");

                var currentText = $(".textAreaTopic").val();
                $("<p>").text(currentText).appendTo("#forum-style");

                $("#postBtn").css("display", "none");
                $(".inputTopic").css("display", "none");
                $(".textAreaTopic").css("display", "none");

            });

        $("<input>").attr("class", "inputTopic").appendTo("#forum-style");

        $("<textarea>").attr("class", "textAreaTopic").appendTo("#forum-style");




    }

}
