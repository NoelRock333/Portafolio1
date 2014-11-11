$(document).on('ready', function(){
	/* ---- Efectos para posicionarse ---- */
    var lastId;
    var topMenu = $(".menu");
    var topMenuHeight = $('.menu').outerHeight(true);
    // Lista de items del menu
    var menuItems = topMenu.find("a"),
        // Anchors correspondientes a items del menu
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // vigila evento click de los items del menu
    // así obtenemos un chido efecto animado de scroll
    menuItems.click(function (e) {
        e.preventDefault();
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;

        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 400);
    });

    $(".habilidad").each(function(){
        var porcentaje = $(this).find(".barra").data("valor");
        $(this).find(".barra").css("width", porcentaje + "%");
    });

});