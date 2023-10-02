// // Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
//     }

//     return gifts;
// }
// wrapGifts(gifts);

function writeCards(array, message) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(
            `Thank you, ${array[i]}, for the wonderful ${message} gift!`
        );
    }

    return newArray;
}
console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise'));


function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}
