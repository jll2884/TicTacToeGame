let squares= document.querySelectorAll('.tiles');
let restart = document.getElementById("restart");

let display =  document.getElementById("display");

let playAgain = document.getElementById("again");

let clicks = 0;

let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let count1 = 0;
let count2 = 0;
let player1 = "X";
let player2 = 'O';
let player = false;

// playAgain.style.visibility = 'hidden';

restart.addEventListener('click',function(){ //Resets everything
    for(let i = 0;i<squares.length;i++){
        squares[i].textContent= '';
        squares[i].classList.remove('avoid-clicks')
}

player =false;
count1 = 0;
count2 = 0;
score2.textContent= count2;
score1.textContent= count1;
display.textContent='';
clicks=0;
});

playAgain.addEventListener('click',function(){ //Resets everything
    for(let i = 0;i<squares.length;i++){
        squares[i].textContent= '';
        squares[i].classList.remove('avoid-clicks')
}
player =false;
clicks = 0;
playAgain.style.visibility = 'hidden';
restart.style.visibility = 'visible';
display.textContent = '';
});

//adds event Listeners to the 
for(let i = 0;i<squares.length;i++){
    squares[i].addEventListener('click',function () {
        clicks++;

        player = !player;
        let name = "";
        let winner;
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
        this.classList.add("avoid-clicks");
        
        if(checkRows(this.textContent)==true) {
            display.textContent= name+"WON!";
            (this.textContent==player2)? count2++: count1++;
            (this.textContent==player2)? score2.textContent= " "+count2: score1.textContent= ' '+count1;
            makeUnclickAble();
            playAgain.style.visibility = 'visible';
            restart.style.visibility = 'hidden';
        }
        else if(checkColumns(this.textContent)==true){
            display.textContent= name+"WON!";
            (this.textContent==player2)? count2++: count1++;
            (this.textContent==player2)? score2.textContent= ' '+count2: score1.textContent= ' '+count1;
            makeUnclickAble();
            playAgain.style.visibility = 'visible';
            restart.style.visibility = 'hidden';
        }
        else if(checkAngles(this.textContent)==true){
            display.textContent= name+"WON!";
            (this.textContent==player2)? count2++: count1++;
            (this.textContent==player2)? score2.textContent= ' '+count2: score1.textContent= ' '+count1;
            makeUnclickAble();
            playAgain.style.visibility = 'visible';
            restart.style.visibility = 'hidden';
        }
        else if(clicks==9){
            display.textContent='Nobody Won!';
            playAgain.style.visibility = 'visible';
            restart.style.visibility = 'hidden';
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

function makeUnclickAble() {
    for(let i = 0;i<squares.length;i++){
        squares[i].classList.add('avoid-clicks')
}
};