function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }

function writeCards(names, gift) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    let message = "Thank you, " + names[i] + ", for the wonderful surprise gift!";
    messages.push(message);
  }

  return messages;
}