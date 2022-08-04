//figure out if a string is an isogram or not. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//Example: (Input --> Output)

//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)


//SOLUTION 1
function isIsogram(str) {
    var map = {};
    var result = true;
    str.split('').forEach(function(char) {
      if (map[char.toUpperCase()] === undefined) {
        map[char.toUpperCase()] = 1;
      } else {
        result = false;
      }
    });
    return result;
  }

//SOLUTION 2
function isIsogram(word){
    word = word.toLowerCase().split("").sort();
    for (var i=0;i<word.length-1;i++){
      if (word[i]==word[i+1]) return false;
      }
    return true;
  }