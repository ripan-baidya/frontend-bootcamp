// loop in js
// print 1 to 10 using all there loops (for, while, do while)

// for loop
function forLoop() {
    console.log('for loop executed');
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// while loop
function whileLoop() {
    console.log('while loop executed');
    let i = 1;
    while (i <= 10) {
        console.log(i ++);
    }
}

// do while loop
function doWhileLoop() {
    console.log('do while loop executed');
    let i = 1;
    do {
        console.log(i ++);
    } while (i <= 10);
}


// ********** function call **********
forLoop();
// whileLoop();
// doWhileLoop();

