// The first solution I came up is totalGain1 function. It works O(n^2). 
// After I'd finished and tested I continued to think if there's better solution.
// That's why here's one more function totalGain which looks better, works faster and less complicated.
const totalGain1 = (stocks) => {
    let toBuy = toSell = sell = gain = max = 0;
    for (let i = 0; i < stocks.length; i++){
        max = 0;
        for (let j = i + 1; j < stocks.length; j++){    // looking for a maximum to sell starting from next day
            if (stocks[j] > max){
                sell = j;
                max = stocks[j];
            }
        }
        if (stocks[sell] - stocks[i] > gain){           // check if gain is max, safe "buy" and "sell" day.
            toBuy = i;
            toSell = sell;
            gain = stocks[toSell] - stocks[i];
        }
    }
    return {toBuy: toBuy + 1, toSell: toSell + 1};
}

function testGain1(days) {
    console.log(`days = ${days}: to buy ${totalGain1(days).toBuy} day, to sell ${totalGain1(days).toSell} day`)
}

console.log('FIRST SOLUTION: ');
testGain1([1, 3, 8, 8, 8, 55, 38, 1, 7]);
testGain1([11, 4, 15, 12, 22, 17, 9, 10, 27]);
testGain1([14, 13, 12]);
testGain1([15, 15, 15]);

// Solution after optimization:

const totalGain = (stocks) => {
    let toBuy = toSell = gain = min = 0;

    for (let i = 0; i < stocks.length; i++){
        min = (stocks[i] < stocks[min]) ? i : min;  // looking for a lowers price in all days
        if (gain < stocks[i] - stocks[min]){        // check if gain is the highest 
            toBuy = min;                            // if gain is greater then previous safe new "sell" and "buy" days
            toSell = i;
            gain = stocks[i] - stocks[min];
        }
    }
    return {toBuy: toBuy + 1, toSell: toSell + 1};
}

function testGain(days) {
    console.log(`days = ${days}: to buy ${totalGain(days).toBuy} day, to sell ${totalGain(days).toSell} day`)
}

console.log('SOLUTION AFTER OPTIMIZATION: ');
testGain([1, 3, 8, 8, 8, 55, 38, 1, 7]);
testGain([11, 4, 15, 12, 22, 17, 9, 10, 27]);
testGain([14, 13, 12]);
testGain([15, 15, 15]);
testGain([10, 4, 15, 60, 5, 17, 9, 59, 27, 14, 35, 1, 6, 8, 58]);