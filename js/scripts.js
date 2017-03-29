$(document).ready(function() {
  function pigLatin(sentence){
    //defines regex for non-alphanumeric chars, removes them
    var punctPattern = new RegExp(/[^A-Za-z0-9\s]/, "g");
    sentence = sentence.replace(punctPattern,"");

    var splitted = sentence.split(' ');

    //loops through each word in 'splitted'
    for(i=0;i<splitted.length;i++){
      //defines regex for vowels and consonants, finds index of first vowel
      var vowelPattern = new RegExp(/[aeiouy]/, 'i');
      var conPattern = new RegExp(/[^aeiouy]/, 'i');
      var index = vowelPattern.exec(splitted[i])['index'];

      //rules for words starting with y
      if (splitted[i][0]==="y"){
        var vowelPattern = new RegExp(/[aeiou]/, 'i');
        var conPattern = new RegExp(/[^aeiou]/, 'i');
        index = vowelPattern.exec(splitted[i])['index'];
      }
      //rules for single, non-vowel characters
      if(!vowelPattern.exec(splitted[i])){
        splitted[i] = splitted[i];
        console.log(splitted[i]);
      }
      //rules for 'qu' words
      else if(vowelPattern.exec(splitted[i])[0]==='u'){
        var beginning = splitted[i].substr(index+1);
        var end = splitted[i].slice(0, index+1);
        splitted[i] = beginning+end+'ay';
        console.log(splitted[i]);
      }
      //rules for words starting with vowels
      else if(vowelPattern.exec(splitted[i])['index']===0){
        splitted[i] = splitted[i]+'ay';
        console.log(splitted[i]);
      }
      //rules for starting with consonants
      else if(conPattern.exec(splitted[i])['index']===0){
        var beginning = splitted[i].substr(index);
        var end = splitted[i].slice(0, index);
        splitted[i] = beginning+end+'ay';
        console.log(splitted[i],vowelPattern.exec(splitted[i]));
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
