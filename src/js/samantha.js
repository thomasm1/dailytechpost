    $("#samantha").mouseenter(function () {

        $("#text").css({

            display: 'block'

        });

    }).mouseleave(function () {

        $("#text").css({

            display: 'none'

        });

    });



    var textShowing = false;

    $("#samantha").hover(function () {

        if (textShowing) {

            $("#text").fadeOut(function () {

                $("#text").css({

                    display: 'none'

                });

                textShowing = false;

            }).delay(500);

        } else {

            $("#text").fadeIn(function () {

                $("#text").css({

                    display: 'block'

                });

                textShowing = true;

            });

        };

    });