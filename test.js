console.log('connected');

/*
//Sum 


function sumArray(arr){
    
    var total = 0;
    arr.forEach(function(element){
        
        total += element;
        
                          
});
    
    return total;
}

//printReverse

function printReverse(arr){
    
    for (var i = arr.length - 1; i >=0 ; i--)
        console.log(arr[i]);
    
}

printReverse([4,2,1,5]);


//is uniform

function isUniform(arr){
    
    var first = arr[0];
    for ( var i = 0; i < arr.length; i++){
        
        if(arr [i] !== first){
            
            return false;
        }
    } 
    return true;
    
}

// sum array

function sumArray (arr){
    
    arr.forEach(function(el){
                
                var total = 0;
                total += el;
                }
    
)};
   
    
//max array
    

  function max(arr){
      
     var max = arr[0];
      for (var i = 1; i < arr.length; i++){
          if (arr[i] > max){
              
              max = arr[i];
          }
          
          
      }
     return max; 
      
      
  } 

var movies =[
    
    {
    title:'Frozen',
    rating:'3', 
    hasWatched: false
    },
    {
    title:'Bad Boy', 
    rating:'4', 
    hasWatched: true
    },
    {
    title:'tartar', 
    rating:'6', 
    hasWatched: true
    },
    
   
    
];

movies.forEach(function(movie){
    
    if(movie.hasWatched == true){
        
        console.log('You have watched ' + movie.title + " - " + movie.rating + ' stars')
    }else{
        
        console.log('You have not seen ' + movie.title + " - " + movie.rating + ' stars')
    }
    
});



var button = document.querySelector("#firstButton");

button.addEventListener("click", function(){ document.querySelector("body").classList.toggle('white');
                        
                        
                        
                        });

function colorChanger(){
    
    document
}



var p1Button = document.querySelector('#p1');

var p2Button = document.querySelector('#p2');

var p1Score = 0;

var p1Display = document.querySelector('#p1Display');

var p2Score = 0;

var p2Display = document.querySelector('#p2Display')

var gameOver = false;
var winningScore = 5;
var resetButton = document.getElementById("reset");

var numImput = document.querySelector('input');

var parag = document.querySelector('#p');






p1Button.addEventListener('click', function(){
    
if(!gameOver){     
    

    p1Score ++;
    
    if(p1Score == winningScore){
        
        p1Display.classList.add('winner');
        gameOver = true;
        
    }
    
    p1Display.textContent = p1Score;
    
}});



p2Button.addEventListener('click',function(){
    
    if(!gameOver){
     
        p2Score ++; 
        
        if(p2Score == winningScore){
            
            p2Display.classList.add('winner');
            gameOver = true;
        }
        
       p2Display.textContent = p2Score;
        
        
    }
    
    
});

resetButton.addEventListener('click', function(){
    
    resetScore();
    
});

numImput.addEventListener('change', function(){
    
    p.textContent = numImput.value;
    winningScore = numImput.value;
   resetScore();
    
});

function resetScore(){
    
    
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
     p2Display.classList.remove("winner");
    gameOver = false;
    
};
   
  
var firstLi = document.querySelectorAll('li');

for (var i = 0; i < firstLi.length; i++){
    
  firstLi[i].addEventListener('mouseover',function(){
    
   this.classList.add('selected'); 
    
});

firstLi[i].addEventListener('mouseout',function(){
    
   this.classList.add('selected'); 
    
});
  
 firstLi[i].addEventListener('click', function(){
     
     this.classList.toggle('done');
     
     
 });   
    
};
*/













































    




























































