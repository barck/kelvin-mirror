let link = document.querySelector(".btn-hero")
let link2 = document.querySelector(".btn-how")
let popup = document.querySelector(".modal-content")
let close = document.querySelector(".modal-content-close")
let overlay = document.querySelector(".modal-overlay")
let buy1 = document.querySelector(".buy1")
let buy2 = document.querySelector(".buy2")
let buy3 = document.querySelector(".buy3")
let buy4 = document.querySelector(".buy4")
let buy5 = document.querySelector(".buy5")
let gigantRadio = document.querySelector(".gigant")
let kvadrat = document.querySelector(".kvadrat")
let pryamougolnikRadio = document.querySelector(".pryamougolnik")
let stolRadio = document.querySelector(".stol")
let stoykiRadio = document.querySelector(".stoyki")
let price = document.querySelector(".price")
let gigantLabel = document.querySelector(".gigant-label")
let kvadratLabel = document.querySelector(".kvadrat-label")
let pryamougolnikLabel = document.querySelector(".pryamougolnik-label")
let stolLabel = document.querySelector(".stol-label")
let stoykiLabel = document.querySelector(".stoyki-label")

function validate_form ( )
{
    valid = true;

    if ( document.order.name.value == "" )
    {
        alert ( "Пожалуйста заполните поле 'Ваше имя'." );
        valid = false;
    }

    return valid;
}


link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");

    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });

});


buy1.addEventListener("click", function(event){
    event.preventDefault();
    price.innerHTML = "16890₽";
    popup.classList.add("modal-content-show");
    gigantRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});

buy2.addEventListener("click", function(event){
    event.preventDefault();
    price.innerHTML = "8990₽";
    popup.classList.add("modal-content-show");
    kvadrat.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});


buy3.addEventListener("click", function(event){
    event.preventDefault();
    price.innerHTML = "9800₽";
    popup.classList.add("modal-content-show");
    pryamougolnikRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});


buy4.addEventListener("click", function(event){
    event.preventDefault();
    price.innerHTML = "13890₽";
    popup.classList.add("modal-content-show");
    stolRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});

buy5.addEventListener("click", function(event){
    event.preventDefault();
    price.innerHTML = "3890₽";
    popup.classList.add("modal-content-show");
    stoykiRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});


link2.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
});

overlay.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});

