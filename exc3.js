const totalGain = (stocks) => {
    let toBuy = toSell = gain = min = 0;

    for (let i = 0; i < stocks.length; i++){
        min = (stocks[i] < stocks[min]) ? i : min;
        if (gain < stocks[i] - stocks[min]){
            toBuy = min;
            toSell = i;
            gain = stocks[i] - stocks[min];
        }
    }
    return {toBuy: toBuy + 1, toSell: toSell + 1};
}

function testGain(days) {
    console.log(`days = ${days}: to buy ${totalGain(days).toBuy} day, to sell ${totalGain(days).toSell} day`)
}

testGain([1, 3, 8, 8, 8, 55, 38, 1, 7]);
testGain([11, 4, 15, 12, 22, 17, 9, 10, 27]);
testGain([14, 13, 12]);
testGain([15, 15, 15]);
testGain([10, 4, 15, 60, 5, 17, 9, 59, 27, 14, 35, 1, 6, 8, 58]);