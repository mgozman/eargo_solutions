//Exercise 1:
// Write a function to calculate change for a given number (number represents cents) 
// The function will return list, vector or collection of numbers representing the number of 
// quarters(25), dimes(10), nickels (5), pennies (1) that would yield the correct change.
// # Example:
// # For 83¢, the function will return 3 quarters, 0 dimes, 1 nickel, and 3 pennies.


// instruction on how to execute code with different test cases:

// open Terminal and navigate to forlder mariia_gozman
// run command node exc1.js to check test cases (make sure node is installed)

const list = (n) => {
    if (n < 0) {
        return [0, 0, 0, 0];
    }

    const quarters = Math.floor(n / 25);  // get quarters
    n -= quarters * 25;                   // get reminder of total

    const dimes = Math.floor(n / 10);     // get dimes
    n -= dimes * 10;                      // get reminder of total

    const nickels = Math.floor(n / 5);    // get nickels
    n -= nickels * 5;                     // get reminder of total

    return [quarters, dimes, nickels, n]; // n is cents
}

function test(n) {
    console.log(`n=${n}, result=${list(n)}`)
}

test(11);
test(0);
test(83);
test(99);
test(-17);