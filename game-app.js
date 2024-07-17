const diceContainers = document.getElementsByClassName("diceContainer");
const diceImages = document.getElementsByClassName("diceImage");
const bluePieces = document.getElementsByClassName("bluePieces");
const greenPieces = document.getElementsByClassName("greenPieces");
const yellowPieces = document.getElementsByClassName("yellowPieces");
const smallPieces = document.getElementsByClassName("smallPieces");

const clickedRadio = sessionStorage.getItem("clickedRadioValue");

if (clickedRadio == 2) {
    for(let i = 0; i < 4; i++) {
        greenPieces[i].classList.remove("disabled");
    }
}

if (clickedRadio == 4) {
    for(let i = 0; i < 16; i++) {
        smallPieces[i].classList.remove("disabled");
    }
}

let clickedContainerIndex = 0;

// Function to remove background gradient from all containers
function resetContainerBackgrounds() {
    for (let i = 0; i < diceContainers.length; i++) {
        diceContainers[i].style.backgroundImage = "none";
    }
}

// Initialize the first container with background gradient
resetContainerBackgrounds();
diceContainers[clickedContainerIndex].style.backgroundImage = "linear-gradient(to right, var(--darkColor), var(--defaultColor))";

// Add click event listeners to containers
Array.from(diceContainers).forEach((divContainer, index) => {
    divContainer.addEventListener('click', () => {
        if (index === clickedContainerIndex) {
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            let imageSource = "images/dice-" + randomNumber + ".svg";
            
            if (diceImages[index]) {
                diceImages[index].src = imageSource;
            }
            


            if(randomNumber != 6) {
                // Remove background gradient from all containers
                resetContainerBackgrounds();
    
                // Move to the next container in sequence and apply background gradient
                clickedContainerIndex = (clickedContainerIndex + 1) % diceContainers.length;
                diceContainers[clickedContainerIndex].style.backgroundImage = "linear-gradient(to right, var(--darkColor), var(--defaultColor))";
            }
        }
    })
})

document.getElementById("backBtn").addEventListener("click", function() {
    alert(clickedRadio);
})