// Code your solutions in this file

function writeCards(names, event) {
    let thankYe = []
    for (let i = 0; i < names.length; i++) {
        thankYe.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYe;
}


function countDown(num) {
    while (num >= 0) {
        console.log(num--);

    }

}