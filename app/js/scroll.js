$(document).ready(function(){
    $("#scroll").on("click","a", "button", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 70;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


//прячем стрелку в первом блоке по клику
// var arrowLink = document.querySelector('.arrow')
// arrowLink.addEventListener("click", function(event){
//
//     function Hide () {
//         arrowLink.classList.add("hidden");
//     }
//     setTimeout(Hide, 1500);
//
// });

$( "#arrow" ).click(function() {
    $( "#arrow" ).fadeOut( 1500, function() {
        // Анимация завершена.
    });
});