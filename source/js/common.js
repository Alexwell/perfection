$(document).ready(function() {

/*--------------smooth scrolling---------------*/

    $("#js-adv, #js-order, #js-scheme, #js-pf, #js-other").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, top/2.5);
    });

/*--------------form call---------------*/

$("#js-main-form, #js-modal-form").submit(function() {
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Ваше сообщение успешно отправлено!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});

});