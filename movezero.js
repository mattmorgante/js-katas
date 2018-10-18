function moveZero(array) {
    let zeroCounter = 0;
    let i;
    for (i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroCounter++;
            array.splice(i);
            i--;
        }
    }
    for (i = 0; i < zeroCounter; i++) {
        array.push(0);
    }
    console.log(array);
}
let array = [4,3,0,0,1];
moveZero(array);