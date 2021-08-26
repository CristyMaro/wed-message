const text = "My husband is one of a kind!!! Wishing us more good health, more memories to share and more years to cheers ♡♡♡ Happy 2nd Wedding Anniversary ♡♡♡ I LoVe You ♡♡♡♡♡♡"

let index = 0;

function writeText() {
    document.body.innerText = text.slice 
    (0, index);

    index++;

    if (index > text.length - 1) {
        index = 0;
    }
}

setInterval(writeText, 160);

