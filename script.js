
        let computerMove='';
        let userMove='';
        let res='';
        let score={};
        let sc=localStorage.getItem('score')
        if(sc==undefined)
        {
        score={
            win:0,
            loss:0,
            Tie:0
        };
        }
        else{
            score=JSON.parse(sc);
        }
        function pickComputerMove()
        {
          computerMove=Math.random()*3;
          if(computerMove>=0 && computerMove<1/3)
          {
            computerMove='Rock';
          }
          else if(computerMove>=1/3 && computerMove<2/3)
          {
            computerMove='Paper';
          }
          else
          {
            computerMove='Scissors';
          }
          
        }
        function pickUserMoveRock()
        {
           userMove='Rock';
        
        }
        function pickUserMovePaper()
        {
            userMove='Paper';
        }
        function pickUserMoveScissors()
        {
            userMove='Scissors';
        }
        function result(computerMove,userMove)
        {
           if(userMove=='Rock')
           { 
            if(computerMove=='Rock')
            {
                res='Tie';
                score.Tie++;
            }
            else if(computerMove=='Paper')
            {
                res='Computer Won';
                score.loss++;
            }
            else{
                res='User won';
                score.win++;
            }
            document.querySelector('.gameResult').innerText=`You picked:${userMove}\nComputer picked:${computerMove}\nResult:${res}\nScore:\tWin:${score.win}\tLoss:${score.loss}\tTie${score.Tie}`;
            localStorage.setItem('score',JSON.stringify(score));  
        }
           
        
         else if(userMove=='Paper')
           { 
            if(computerMove=='Rock')
            {
                res='User Won';
                score.win++;
            }
            else if(computerMove=='Paper')
            {
                res='Tie';
                score.Tie++;
            }
            else{
                res='Computer Won';
                score.loss++;
            }
           
            document.querySelector('.gameResult').innerText=`You picked:${userMove}\nComputer picked:${computerMove}\nResult:${res}\nScore:\tWins:${score.win}\tLoss:${score.loss}\tTie:${score.Tie}`;
            localStorage.setItem('score',JSON.stringify(score));   
        } 
           else 
           {
            if(userMove=='Scissors')
            {
                if(computerMove=='Rock')
            {
                res='Computer Won';
                score.loss++;
            }
            else if(computerMove=='Paper')
            {
                res='User Won';
                score.win++;
            }
            else{
                res='Tie';
                score.Tie++;
            }           
            document.querySelector('.gameResult').innerText=`You picked:${userMove}\nComputer picked:${computerMove}\nResult:${res}\nScore:\tWins:${score.win}\tLoss:${score.loss}\tTie:${score.Tie}`;
            localStorage.setItem('score',JSON.stringify(score));
           }
         }
         localStorage.setItem('score',JSON.stringify(score));
    }
      function reset()
      {
        score.win=0;
        score.loss=0;
        score.Tie=0;
        document.querySelector('.gameResult').innerText=`You picked:\nComputer picked:\nResult:\nScore:\tWins:${score.win}\tLoss:${score.loss}\tTie:${score.Tie}`;
        localStorage.setItem('score',JSON.stringify(score));
      }