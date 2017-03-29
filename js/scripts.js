$(document).ready(function() {

  function pigLatin(sentence){
    var splitted = sentence.split(' ');
    for(i=0;i<splitted.length;i++){
      var pattern = new RegExp(/^[aeiou]/, 'i');
      if(pattern.test(sentence[i])===true){
        alert('yay');
      }
    }
  }



  $("#form").submit(function(event) {
    var userInput = $("#sentence").val();
    var answer = pigLatin(userInput);
    $(".output").text(answer);
    event.preventDefault();
  });

});
