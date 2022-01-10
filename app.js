drawBoard(3,3,100,5)

let damierClicks=document.getElementById('damier-input');
let countClicks = 0 ;

damierClicks.addEventListener('click',countNrOfClicks)
damierClicks.addEventListener('click',giveResult)

let resetClick=document.getElementById('reset')
resetClick.addEventListener('click',clearDrawboard)

let playSquare1=document.getElementById('square1') ;
playSquare1.addEventListener('click',gameInput1);

let playSquare2=document.getElementById('square2') ;
playSquare2.addEventListener('click',gameInput2);

let playSquare3=document.getElementById('square3') ;
playSquare3.addEventListener('click',gameInput3);

let playSquare4=document.getElementById('square4') ;
playSquare4.addEventListener('click',gameInput4);

let playSquare5=document.getElementById('square5') ;
playSquare5.addEventListener('click',gameInput5);

let playSquare6=document.getElementById('square6') ;
playSquare6.addEventListener('click',gameInput6);

let playSquare7=document.getElementById('square7') ;
playSquare7.addEventListener('click',gameInput7);

let playSquare8=document.getElementById('square8') ;
playSquare8.addEventListener('click',gameInput8);

let playSquare9=document.getElementById('square9') ;
playSquare9.addEventListener('click',gameInput9);



function drawBoard(nrlines,nrcolumns,size,borderwidth)
    { 
        let damier = document.createElement('div')
        damier.id= 'damier-input'
        let numberID = 1
            for (let iLines = 0; iLines < nrlines; ++iLines)
                            {
                                let x = size + iLines * (size + borderwidth)
                                for (let iColumns = 0 ; iColumns < nrcolumns ; ++iColumns)
                                    {
                                    let y =size + iColumns * (size + borderwidth )
                                    let square1= drawSquare(x,y,borderwidth,numberID)
                                    damier.appendChild(square1)
                                    numberID = numberID + 1
                                }
            }
        document.body.append(damier)
        return damier }

        function drawSquare(x,y,borderwidth,numberID){
            let square = document.createElement('div');
                square.classList.add("square")
                square.style.borderWidth = borderwidth + "px";
                square.style.top = y + "px";
                square.style.left=x + "px";
                square.id = "square" + numberID
                document.body.appendChild(square);
                return square;
                
        }

function countNrOfClicks () {countClicks = countClicks + 1}

function gameInput1() {if (countClicks%2 ===0) {playSquare1.innerText = 'X', playSquare1.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare1.innerText = 'O',playSquare1.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput2() {if (countClicks%2 ===0) {playSquare2.innerText = 'X', playSquare2.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare2.innerText = 'O',playSquare2.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput3() {if (countClicks%2 ===0) {playSquare3.innerText = 'X', playSquare3.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare3.innerText = 'O',playSquare3.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput4() {if (countClicks%2 ===0) {playSquare4.innerText = 'X', playSquare4.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare4.innerText = 'O',playSquare4.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput5() {if (countClicks%2 ===0) {playSquare5.innerText = 'X', playSquare5.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare5.innerText = 'O',playSquare5.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput6() {if (countClicks%2 ===0) {playSquare6.innerText = 'X', playSquare6.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare6.innerText = 'O',playSquare6.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput7() {if (countClicks%2 ===0) {playSquare7.innerText = 'X', playSquare7.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare7.innerText = 'O',playSquare7.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput8() {if (countClicks%2 ===0) {playSquare8.innerText = 'X', playSquare8.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare8.innerText = 'O',playSquare8.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}
function gameInput9() {if (countClicks%2 ===0) {playSquare9.innerText = 'X', playSquare9.style.color='blue',result.innerText='Player 2 : your turn',result.style.color='red'} else {playSquare9.innerText = 'O',playSquare9.style.color='red',result.innerText='Player 1 : your turn',result.style.color='blue'}}

let result = document.getElementById('resultDynamic')

function giveResult()
{ if    ((playSquare1.innerText=='X' && playSquare2.innerText=='X' && playSquare3.innerText=='X') ||
         (playSquare1.innerText=='X' && playSquare4.innerText=='X' && playSquare7.innerText=='X') ||
         (playSquare2.innerText=='X' && playSquare5.innerText=='X' && playSquare8.innerText=='X') || 
         (playSquare3.innerText=='X' && playSquare6.innerText=='X' && playSquare9.innerText=='X') || 
         (playSquare4.innerText=='X' && playSquare5.innerText=='X' && playSquare6.innerText=='X') ||
         (playSquare7.innerText=='X' && playSquare8.innerText=='X' && playSquare9.innerText=='X') ||
         (playSquare1.innerText=='X' && playSquare5.innerText=='X' && playSquare9.innerText=='X') ||
         (playSquare3.innerText=='X' && playSquare5.innerText=='X' && playSquare7.innerText=='X')) 
    {result.innerText='Player 1 wins!',result.style.color='blue'}
    {       if     ((playSquare1.innerText=='O' && playSquare2.innerText=='O' && playSquare3.innerText=='O') ||
                    (playSquare1.innerText=='O' && playSquare4.innerText=='O' && playSquare7.innerText=='O') ||
                    (playSquare2.innerText=='O' && playSquare5.innerText=='O' && playSquare8.innerText=='O') || 
                    (playSquare3.innerText=='O' && playSquare6.innerText=='O' && playSquare9.innerText=='O') || 
                    (playSquare4.innerText=='O' && playSquare5.innerText=='O' && playSquare6.innerText=='O') ||
                    (playSquare7.innerText=='O' && playSquare8.innerText=='O' && playSquare9.innerText=='O') ||
                    (playSquare1.innerText=='O' && playSquare5.innerText=='O' && playSquare9.innerText=='O') ||
                    (playSquare3.innerText=='O' && playSquare5.innerText=='O' && playSquare7.innerText=='O')) 
                {result.innerText='Player 2 wins!',result.style.color='red'} 

                {if (playSquare1.innerText!='' && playSquare2.innerText!='' && playSquare3.innerText!='' &&
                playSquare1.innerText!='' && playSquare4.innerText!='' && playSquare7.innerText!='' &&
                playSquare2.innerText!='' && playSquare5.innerText!='' && playSquare8.innerText!='' && 
                playSquare3.innerText!='' && playSquare6.innerText!='' && playSquare9.innerText!='' && 
                playSquare4.innerText!='' && playSquare5.innerText!='' && playSquare6.innerText!='' &&
                playSquare7.innerText!='' && playSquare8.innerText!='' && playSquare9.innerText!='' &&
                playSquare1.innerText!='' && playSquare5.innerText!='' && playSquare9.innerText!='' &&
                playSquare3.innerText!='' && playSquare5.innerText!='' && playSquare7.innerText!='')
                {result.innerText='Draw!',result.style.color='black'}  }
    }
}

function clearDrawboard ()

{   playSquare1.innerText = '';
    playSquare2.innerText = '';
    playSquare3.innerText = '';
    playSquare4.innerText = '';
    playSquare5.innerText = '';
    playSquare6.innerText = '';
    playSquare7.innerText = '';
    playSquare8.innerText = '';
    playSquare9.innerText = '';
    result.innerText='Player 1 : your turn';
    result.style.color='blue';


}












