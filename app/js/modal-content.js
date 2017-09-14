var link = document.querySelector(".btn-hero")
var link2 = document.querySelector(".btn-how")
var popup = document.querySelector(".modal-content")
var close = document.querySelector(".modal-content-close")
var overlay = document.querySelector(".modal-overlay")


link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
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

