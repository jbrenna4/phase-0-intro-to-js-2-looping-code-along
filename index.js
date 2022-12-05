const names = ["Charlie", "Samip", "Aki"];
const eventName = "surprise"
let message;


function writeCards(names, eventName) {
    const newArray = []
    for (let i = 0; i < names.length; i++) {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }

  return newArray
}

console.log(writeCards(names, eventName))

console.log(writeCards(["Billy", "Bob", "Chuck"], "Christmas"))


let down = [11]
function countDown(down) {
    while (down >= 0) {
    console.log(down);
    down--;
  }
  return down;
}

countDown(down);