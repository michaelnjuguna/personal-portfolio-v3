

//variables


//JQuery

$(function () {
    $("#loader").delay(3000).slideUp(1000);
$(".main").delay(3000).show(1000);
  

});

function openNav(){
        $(".hambuger-stick__one").toggleClass("hamOne");
        $(".hambuger-stick__two").toggleClass("hamTwo");
        $(".hambuger").toggleClass("ham");
       
        $(".mobile-list__items").toggleClass("nav");
}

//javascript
//custom cursor
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top:" + (e.pageY )+ "px; left:" + e.pageX + "px; display:block;");
});

document.addEventListener("mouseleave", function () {
    cursor.setAttribute("style", "display:none;");
});

//skills
