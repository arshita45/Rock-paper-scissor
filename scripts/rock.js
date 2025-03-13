let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    lose:0,
    tie:0
};

updatescore();

// console.log(localStorage.getItem('score'));

function playerguess(playergame){

  const computerguess = pickcomputerguess();
    
    let result = '';

    if(playergame === 'scissors')
        {
        if ( computerguess=== 'scissors') {
        result = 'Tie';
        }
        else if(computerguess === 'rock') { 
        result = 'You Lose!';
        }
        else {
        result = 'You Win!';
        }

    }
    else if (playergame === 'paper')
    {

        if (computerguess === 'paper') {
        result = 'Tie';
        }
        else if(computerguess === 'rock') { 
        result = 'You Win!';
        }
        else {
        result = 'You Lose!';
        }

    }
    else if(playergame ==='rock')
    {

        if (computerguess === 'rock') {
        result = 'Tie';
        }
        else if(computerguess === 'paper') { 
        result = 'You Lose!';
        }
        else {
        result = 'You Win!';
        }

    }


    if(result === 'You Win!')
    {
        score.wins+=1;
    }
    else if(result === 'You Lose!')
    {
        score.lose+=1;
    }
    else if(result === 'Tie'){
        score.tie+=1;
    }

    localStorage.setItem('score' , JSON.stringify(score));

    updatescore();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playergame}-emoji.png" class="move-icon"> 
<img src="images/${computerguess}-emoji.png" class="move-icon"> computer`;



    //alert(`You picked ${playergame}, computer guessed ${computerguess}, and ${result} , 
    //wins : ${score.wins} , Lose : ${score.lose} , Tie : ${score.tie}`);
}



function updatescore(){
    document.querySelector('.js-score').innerHTML = 
    `wins : ${score.wins} , Lose : ${score.lose} , Tie : ${score.tie}`;
}

let isautoplaying = false;
let intervalid ;

function autoplay(){
if(!isautoplaying)
{
        intervalid = setInterval(function(){
           const playermove = pickcomputerguess();
           playerguess(playermove);
        } , 1000)
    
    isautoplaying = true;
    

}
else
{
    clearInterval(intervalid )
    isautoplaying=false;
}
}



function pickcomputerguess(){
            const randomnumber = Math.random();
            if(randomnumber < 1/3) {
            computerguess = 'rock';
            } 
            else if(randomnumber < 2/3) {
            computerguess = 'paper';
            }
            else {
            computerguess = 'scissors';
            }

            return computerguess;
        }

