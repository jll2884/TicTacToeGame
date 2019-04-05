let squares= document.querySelectorAll('.tiles');
let restart = document.getElementById("restart");

let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let count1 = 0;
let count2 = 0;
let player1 = "X";
let player2 = 'O';
let player = false;

restart.addEventListener('click',function(){
    for(let i = 0;i<squares.length;i++){
        squares[i].textContent= ''
}
player =false;
});


for(let i = 0;i<squares.length;i++){
    squares[i].addEventListener('click',function () {
        player = !player
        let name = ""
        if(player==true){
            this.textContent = player1;
            this.style.color= 'red';
            name = "player 1 has ";
        }
        else{
            this.textContent = player2;
            this.style.color= 'blue';
            name = "player 2 has ";
        }
        
        if(checkRows(this.textContent)) {
            alert(name+"WON");
        }
        else if(checkColumns(this.textContent)){
            alert(name+"WON");
        }
        else if(checkAngles(this.textContent)){
            alert(name+"WON")
        }
    })
}

//CHECKS TO SEE IF THERE ANY WINNERS
function checkRows(letter){
    let top = true;
    for(let i = 0;i<3;i++) {
        if (squares[i].textContent != letter) {
            top = false
        }
    }
    if(top == false){
        top = true
    for(let i = 3;i<6;i++){
        if(squares[i].textContent!=letter)
            top = false
    }
        }
   if(top == false){
        top = true
    for(let i = 6;i<9;i++){
        if(squares[i].textContent!=letter)
            top = false
        }
    }
    return top;

}

function checkColumns(letter) {
    let top = true;
    for(let i = 0;i<7;i+=3) {
        if (squares[i].textContent != letter) {
            top = false
        }
    }
    if(top == false){
        top = true
    for(let i = 1;i<8;i+=3){
        if(squares[i].textContent!=letter)
            top = false
    }
        }
   if(top == false){
        top = true
    for(let i = 2;i<9;i+=3){
        if(squares[i].textContent!=letter)
            top = false
        }
    }
    return top;
}

function checkAngles(letter) {
    let top = true;
    for(let i = 0;i<9;i+=4) {
        if (squares[i].textContent != letter) {
            top = false
        }
    }
    if(top == false){
        top = true
    for(let i = 2;i<7;i+=2){
        if(squares[i].textContent!=letter)
            top = false
        }
    }
    return top;


}