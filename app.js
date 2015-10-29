$(function () {
    var menu = $(".MainMenusticky");
    var lastPositionTop = 0;

    $(window).scroll(function () {

        if (menu.hasClass("sticky") == false &&
            $(this).scrollTop() > menu.offset().top) {

            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
        }
        if (menu.hasClass("sticky") &&
            $(this).scrollTop() < lastPositionTop) {

            menu.removeClass("sticky");
        }
    });

    var leftArrow = $(".leftArrow");
    var rightArrow = $(".rightArrow");

    rightArrow.on('click', function () {

            $(".trippleGalery").append($(".galeryBox:first").clone());
            $(".galeryBox:first").remove();

            var personActive = $('.trippleGalery').find('.active');
            $(personActive[0]).removeClass('active');
            var middlePerson = $(".trippleGalery").children().eq(1);
            middlePerson.addClass('active');
            skiller();
        }
    );
    leftArrow.on('click', function () {

            $(".trippleGalery").prepend($(".galeryBox:last").clone());
            $(".galeryBox:last").remove();

            var personActive = $('.trippleGalery').find('.active');
            $(personActive[0]).removeClass('active');
            var middlePerson = $(".trippleGalery").children().eq(1);
            middlePerson.addClass('active');
            skiller();
        }
    );

    //funkcja która ustawia fioletowe paski na szerokosc pobran¹ z atrybutów data dla osoby w srodku

    //var elem = $('.active').data('web','ui','graphic','html');

    function skiller() {
        var activePerson = $('.active');


        var skillweb = $(activePerson[0]).data('web');
        var skillui = $(activePerson[0]).data('ui');
        var skillgraphic = $(activePerson[0]).data('graphic');
        var skillhtml = $(activePerson[0]).data('html');


        var percentlineweb = $('.web').find('.percent');
        var percentlineui = $('.ui').find('.percent');
        var percentlinegraphic = $('.graphic').find('.percent');
        var percentlinehtml = $('.html').find('.percent');

        var valueskillweb = $('.web').find('.valueskill');

        valueskillweb.val(skillweb);
        percentlineweb.css('width', skillweb + '%');
        percentlineui.css('width', skillui + '%');
        percentlinegraphic.css('width', skillgraphic + '%');
        percentlinehtml.css('width', skillhtml + '%');


    }

    skiller();


    var current = 0,
        imgs = $('.sliderauto .pixellorem');
    imgAmount = imgs.length;

    imgs.addClass('placeIcon').hide().eq(0).show();


    window.setInterval(swapImages, 1500);


    function swapImages() {
        var currentImg = $(imgs[current]);
        if (current == imgAmount - 1) current = -1;
        var nextImg = $(imgs[++current]),
            speed = 0;
        currentImg.fadeOut(speed);
        nextImg.fadeIn(speed);
    }


    var picturemini = $('.gallery img');
    var blackback = $('.backpicture');

    var leftwhiteArrwo = $('.leftwhitearrow');
    var rightwhiteArrwo = $('.rightwhitearrow');
    blackback.hide();
    picturemini.on('click', function () {
        blackback.show();
        console.log("ok");
        $(this).clone().addClass('bigPicture').insertAfter(".leftwhitearrow");
    });


    leftwhiteArrwo.on('click', function () {
        var tonext = $('.gallery');
        var toRemove = $('.backpicture img');

        toRemove.remove('img');
        console.log("ok");

        var rodzic = $(tonext.next());
        console.log(rodzic.children());


    });

});