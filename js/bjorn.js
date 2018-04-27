//id for modal trykk
var lifePush = document.getElementById('lifeLine');
var torPush = document.getElementById('torpedoGoAway');

//to get modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');




lifePush.onclick = function() {
    modal.style.display = "block";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

torPush.onclick = function() {
    modal2.style.display = "block";
}


//collapsible

var collaps = document.getElementsByClassName("dropmenu1");
var i;

for(i = 0; i < collaps.lenght; i++) {
    collaps[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropcontent1 = this.nextElementSibling;
        if(dropcontent1.style.display === "block") {
            dropcontent1.style.display="none";
        } else {
            dropcontent1.style.display="block";
        }
    });
}