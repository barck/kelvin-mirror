$(document).ready(function(){
    $("#scroll").on("click","a", "button", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        // event.preventDefault();    //раскомментировать, если будет лагать скролл

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 70;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$( "#arrow" ).click(function() {
    $( "#arrow" ).fadeOut( 1500, function() {
        // Анимация завершена.
    });
});

//blur для блока с цифрами при клике на заказать обратный звонок

var phoneLink = document.querySelector('.phone-link')
var recall = document.querySelector('.btn-to-a')
var blurBlock = document.querySelector('.blur-container')
var footer = document.querySelector('.blur-footer')


phoneLink.addEventListener("click", function(event){

    function Hide () {
        blurBlock.classList.add("blur");
        footer.classList.add("blur");
    }
    setTimeout(Hide, 1500);
});

recall.addEventListener("click", function(event){

    function Hide () {
        blurBlock.classList.add("blur");
        footer.classList.add("blur");
    }
    setTimeout(Hide, 1500);
});

window.addEventListener('scroll', fadeOut);

function fadeOut(){
    if(blurBlock.classList.contains('blur')){
        blurBlock.classList.remove('blur');
        footer.classList.remove('blur');
    }
}

// -------------