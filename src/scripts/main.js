console.log("Can your daddy do the dog?")

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    console.log(currentNumber)
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("Chicken Monkey!")
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken!")
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey!") }}