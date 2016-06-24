
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  
  var correctAnswer = Math.floor(Math.random() * 101);  
  var count = 0;
  var guesses = {}

  $('.game').on('click', '#guessButton', function(){
    
    var guess = $('#userGuess').val();
    var guessVal = parseInt(guess);
 
    if(guessVal >= 1 && guessVal <= 100){
      
      if(guesses[guessVal]){
        alert('You guessed this number already');
      }else{
        guesses[guessVal] = true;
        
        count++
        if(correctAnswer == guessVal){
          $('#guessButton').removeAttr('id');
          $('#feedback').text('You Won!!!! Click new game to play again.').css('background', 'red');
        }else if(guessVal >= correctAnswer - 5 && guessVal <= correctAnswer + 5){
          $('#feedback').text('Hot!!').css('background', 'red');
          $('#guessList').append('<li>' + guessVal + '</li>')
        }else if(guessVal >= correctAnswer - 10 && guessVal <= correctAnswer + 10){
          $('#feedback').text('Kinda Hot...').css('background', 'orange');
          $('#guessList').append('<li>' + guessVal + '</li>')
        }else if(guessVal >= correctAnswer - 20 && guessVal <= correctAnswer + 20){
          $('#feedback').text('Warm...').css('background', '#FFD800');
          $('#guessList').append('<li>' + guessVal + '</li>')
        }else{
          $('#feedback').text('Cold....').css('background', 'blue');
          $('#guessList').append('<li>' + guessVal + '</li>')
        }
        $('#count').text(count); 
      }
    }else{
      alert('Please choose a number between 1 and 100');
    }

    
  }); 
  
  $('.new').click(function(){
      location.reload();
    })

    

});


