const p1={
    score:0,
    button: document.querySelector('#p1button'),
    display:document.querySelector('#player1')
}
const p2={
    score:0,
    button:document.querySelector('#p2button'),
    display:document.querySelector('#player2')
}
let winningScore=3,isGameOver=false;
p1.button.addEventListener('click',function(){
    updateScore(p1,p2);
});
p2.button.addEventListener('click',function(){
    updateScore(p2,p1)
});
const reset=document.querySelector('#resetGame');
const winnerScoreSelect= document.querySelector('#playto');
function updateScore(player,opponent){
    if(!isGameOver){
        if(player.score!==winningScore){
            player.score++;
            player.display.textContent=player.score;
        }
        if(player.score===winningScore){
                player.display.classList.add('winner');
                opponent.display.classList.add('loser');
                isGameOver=true;
                if(isGameOver)
                alert(`${player} Won`);
                }
    }
}
winnerScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    undo();
})
reset.addEventListener('click',undo);
function undo(){
    p1.score=p2.score=0;
    p1.display.textContent=p1.score;
    p2.display.textContent=p2.score;
    
    p1.display.classList.remove('winner','loser');
    p2.display.classList.remove('loser','winner');
    isGameOver=false;
}