const playerRadios = document.getElementsByName('players');
const nextBtn = document.getElementById('nextBtn');
const blackCover = document.getElementById('blackCover');
const cancelBtn = document.getElementById('cancelBtn');
let clickedRadio;


//Next-Btn able when number of players is clicked
playerRadios.forEach((radio, index) => {
    radio.addEventListener('click', function() {
        if (radio.checked) {
            nextBtn.style.opacity = "100%";
            nextBtn.style.cursor = "pointer";
            nextBtn.disabled = false;
            clickedRadio = index === 0 ? 2 : 4;
            sessionStorage.setItem("clickedRadioValue", clickedRadio);
        }
    })
})

//Displaying players number container when play-now-btn is clicked
document.getElementById("newgameBtn").addEventListener("click", function(){
    document.getElementById("playerNoContainer").style.display = "flex";
    blackCover.style.display = "block";
})

//Hidding players number container and resetting players number value when cancel-btn is clicked
cancelBtn.addEventListener("click", function() {
    document.getElementById("playerNoContainer").style.display = "none";
    blackCover.style.display = "none";
    nextBtn.style.opacity = "50%";
    nextBtn.style.cursor = "not-allowed";
    nextBtn.disabled = true;
    playerRadios.forEach(radio => {
        radio.checked = false;
    })
})

//Redirecting to game-page
nextBtn.addEventListener("click", function() {
    window.location.href = 'game.html';
})