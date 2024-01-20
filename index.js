for (let age = 30; age < 40; age++) {
  console.log (`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear","drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}

wrapGifts(gifts);

function writeCards(names) {
  let messages = [];
  for (let name of names){
    let message = `Thank you, ${name}, for the wonderful surprise gift!`
    messages.push(message);
  }
  return messages;
}

let names = ["Charlie", "Samip", "Ali"];
let result = writeCards(names);
console.log(result);

function countDown(){
  let count = 10
  while (count >= 0) {
    console.log(count --)
  }
}