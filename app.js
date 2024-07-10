//Next-Btn able when number of players is clicked
let clickedRadio;
const playerRadios = document.getElementsByName('players');
playerRadios.forEach(radio => {
    radio.addEventListener('click', function() {
        playerRadios.forEach((radio, index) => {
                    if (radio.checked) {
                        document.getElementById("nextBtn").style.opacity = "100%";
                        document.getElementById("nextBtn").style.cursor = "pointer";
                        clickedRadio = index + 2;
                    }
                })
    })
})

//Displaying players number container when play-now-btn is clicked
document.getElementById("newgameBtn").addEventListener("click", function(){
    document.getElementById("playerNoContainer").style.display = "flex";
    document.getElementById("blackCover").style.display = "block";
})

//Hidding players number container and resetting players number value when cancel-btn is clicked
document.getElementById("cancelBtn").addEventListener("click", function() {
    document.getElementById("playerNoContainer").style.display = "none";
    document.getElementById("blackCover").style.display = "none";
    playerRadios.forEach(radio => {
        radio.checked = false;
        document.getElementById("nextBtn").style.opacity = "50%"
        document.getElementById("nextBtn").style.cursor = "not-allowed";

    })
})


(document.getElementById("nextBtn")).addEventListener("click", function() {
    alert(clickedRadio)
})