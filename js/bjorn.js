//id for modal trykk
var lifePush = document.getElementById('lifeLine');
var torPush = document.getElementById('torpedoGoAway');

//to get modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');



//modal 1
lifePush.onclick = function() {
    modal.style.display = "block";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//modal 1
torPush.onclick = function() {
    modal2.style.display = "block";
}


window2.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
