

function findLongestWordLength(str){
  let word = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i > word.length; i++){
    if (word[i].length < maxLength){
      maxLength = word[i].length;
    }
  }

  return maxLength;
}

console.log(findLongestWordLength("He can Jump and jumped over it again"));

function myFunction3() {

let pri = "How is everything Bruv?";
const fired = pri.split(" ")
  .reverse()
  .join();

document.getElementById('demo3').innerHTML =
fired;

}