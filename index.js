var ran=Math.floor(Math.random()*10 + 1);
var guesses=1;
 document.getElementById("submit").onclick=function(){
 	var guess=document.getElementById("guess").value;
 	
 	if(guess==ran){
 		if(guesses==1){
 		 alert("Congrats! You guessed correctly in "+guesses+" attempt");
        }
        else{
        	alert("Congrats! You guessed correctly in "+guesses+" attempts");
        }

 	}
 	else if(guess>ran){
 		alert("Oops! Try out a smaller number");
 		guesses+=1;
 		return false;
 	}
 	else if(guess<ran){
 		alert("Oops! Try out a larger number");
 		guesses+=1;
 		return false;
 	}
 }