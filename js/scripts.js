$(document).ready(function() {

  function pigLatin(sentence){
    var punctPattern = new RegExp(/[^A-Za-z0-9\s]/, "g");
    sentence = sentence.replace(punctPattern,"");

    var splitted = sentence.split(' ');
    for(i=0;i<splitted.length;i++){
      var vowelPattern = new RegExp(/[aeiouy]/, 'i');
      var conPattern = new RegExp(/[^aeiouy]/, 'i');
      var index = vowelPattern.exec(splitted[i])['index'];

      if (splitted[i][0]==="y"){
        var vowelPattern = new RegExp(/[aeiou]/, 'i');
        var conPattern = new RegExp(/[^aeiou]/, 'i');
        index = vowelPattern.exec(splitted[i])['index'];
      }
      if(!vowelPattern.exec(splitted[i])){
        splitted[i] = splitted[i];
        console.log(splitted[i]);
      }
      else if(vowelPattern.exec(splitted[i])[0]==='u'){
        var beginning = splitted[i].substr(index+1);
        var end = splitted[i].slice(0, index+1);
        splitted[i] = beginning+end+'ay';
        console.log(splitted[i]);
      }
      else if(vowelPattern.exec(splitted[i])['index']===0){
        splitted[i] = splitted[i]+'ay';
        console.log(splitted[i]);
      }
      else if(conPattern.exec(splitted[i])['index']===0){
        var beginning = splitted[i].substr(index);
        var end = splitted[i].slice(0, index);
        splitted[i] = beginning+end+'ay';
        console.log(splitted[i]);
      }
    }//for loop

    return splitted.join(" ");
  }//function



  $("#form").submit(function(event) {
    var userInput = $("#sentence").val();
    var answer = pigLatin(userInput);
    $(".output").text(answer);
    event.preventDefault();
  });

});
