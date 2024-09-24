const name = "Savogodroid"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameId = new String('Lamar-tp')

console.log(gameId[0]);


console.log(gameId.length);
console.log(gameId.toUpperCase());
console.log(gameId.charAt(2));
console.log(gameId.indexOf('m'));


const newString = gameId.substring(0, 4)
console.log(newString);

const anotherString = gameId.slice(-2, 4)
console.log(anotherString);

const newStringone = "  YOLO  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://petrosky.io/petrosky%20io"

console.log(url.replace('%20', '-'))

console.log(url.includes('petrosky'))
console.log(url.includes('yoyo'))

console.log(gameId.split('-'))