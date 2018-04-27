//id for modal trykk
var lifePush = document.querySelectorAll('.infoBox');//getElementById('lifeLine');
var torPush = document.getElementById('torpedoGoAway');

//to get modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');


for (let index = 0; index < lifePush.length; index++) {
    const element = lifePush[index];
    
    element.onclick = function() {
        /* Switch: Targets element.id, toggles .modal-element.id (.hide|.show) classes  */ 
        
        //modal.style.display = "block";
    }
}

/*




window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
*/



//collapsible

var collaps = document.getElementsByClassName("dropmenu");
var i;

for(i = 0; i < collaps.lenght; i++) {
    collaps[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropcontent = this.nextElementSibling;
        if(dropcontent.style.display === "block") {
            dropcontent.style.display="none";
        } else {
            dropcontent.style.display="block";
        }
    });
}