let column = document.querySelectorAll(".col")//declare variable for Dom Element for rows and column
let changePlayer = document.getElementById("player")// declare variable for DOM Element to show who's Turn
let winner = document.getElementById("winner")// declare variable for Dom Element to show winner
let btn = document.querySelector(".btn")
btn.style.visibility = 'hidden';
turnChange = true// To check Who's turn
changePlayer.innerHTML = "Start with Player X"// starting player Indication
let winningPosibility = [
    0, 0, 0,
    0, 0, 0,       //To check the winning position 
    0, 0, 0
]
turnCount = 0// for Increasing the Count of turn
gameOver = false// TO check game is over or not
column.forEach((value, index) => {
    console.log(value.innerHTML)
    value.addEventListener("click", () => {
        btn.style.visibility = 'visible';
        if (turnChange == true && gameOver == false) { // if turnChange = true it say this is "X" turn
            value.classList.add("cross") //adding css class 
            changePlayer.innerHTML = "Player O's turn" // player turn Show
            winningPosibility[index] = 1 //assining board value in winningposibility
            winning(); // calling winning fun()
            turnChange = false // set false to change turn of "O"
        } else if (turnChange == false && gameOver == false) { // if turnchange = false it say this is O turn
            value.classList.add("circle") // adding css class
            changePlayer.innerHTML = "Player X's turn" // player turn show
            winningPosibility[index] = -1// assining board value in winningposibility
            winning(); //calling winning fun()
            turnChange = true  // set true to change turn of "X"
        }
    });

})
function winning() {
    turnCount += 1 //to increase count in each
    if ( //check all winning position in winningposibility of "X"
        winningPosibility[0] + winningPosibility[1] + winningPosibility[2] == 3 ||
        winningPosibility[3] + winningPosibility[4] + winningPosibility[5] == 3 ||
        winningPosibility[6] + winningPosibility[7] + winningPosibility[8] == 3 ||
        winningPosibility[0] + winningPosibility[4] + winningPosibility[8] == 3 ||
        winningPosibility[2] + winningPosibility[4] + winningPosibility[6] == 3 ||
        winningPosibility[0] + winningPosibility[3] + winningPosibility[6] == 3 ||
        winningPosibility[1] + winningPosibility[4] + winningPosibility[7] == 3 ||
        winningPosibility[2] + winningPosibility[5] + winningPosibility[8] == 3
    ) {
        winner.innerHTML = "Player X Won"// to display winner "X"
        gameOver = true // To stop the game 
        changePlayer.innerHTML = "" // to empty Dom element or not display the player turn
        btn.textContent = "Play Again"
    }
    else if ( //check all winning position in winningposibility "O"
        winningPosibility[0] + winningPosibility[1] + winningPosibility[2] == -3 ||
        winningPosibility[3] + winningPosibility[4] + winningPosibility[5] == -3 ||
        winningPosibility[6] + winningPosibility[7] + winningPosibility[8] == -3 ||
        winningPosibility[0] + winningPosibility[4] + winningPosibility[8] == -3 ||
        winningPosibility[2] + winningPosibility[4] + winningPosibility[6] == -3 ||
        winningPosibility[0] + winningPosibility[3] + winningPosibility[6] == -3 ||
        winningPosibility[1] + winningPosibility[4] + winningPosibility[7] == -3 ||
        winningPosibility[2] + winningPosibility[5] + winningPosibility[8] == -3
    ) {

        winner.innerHTML = "Player O Won" //to display winner "O"
        changePlayer.innerHTML = "" // to empty Dom element or not display the player turn
        gameOver = true // to stop the game
        btn.textContent = "Play Again"


    } else if (turnCount == 9) { // To check game is Draw

        winner.innerHTML = "Match Draw.."// to display  match Draw
        changePlayer.innerHTML = "" //to empty Dom element or not display the player turn
        btn.textContent = "Play Again"

    }
}
function restart() { // to Restart the game
    gameOver = false //to set initial position
    turnCount = 0 // to set initial Count
    turnChange = true // set turn initial position
    winner.innerHTML = "" // to remove winner Display
    winningPosibility = [ //to set initial position
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]
    column.forEach((value, index) => { // to remove all adding class from  Dom Element
        value.classList.remove("cross")
        value.classList.remove("circle")
    })
    changePlayer.innerHTML = "Start with Player X" // to set starting position
    btn.style.visibility = 'hidden'
    btn.textContent = "Reset"


}