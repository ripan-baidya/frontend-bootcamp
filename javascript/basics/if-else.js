// function to demonstrate if
function func1() {
    if (true) {
        console.log('inside if block');
    }
}

// function to demonstrate if-else
function func2() {
    console.log('if else block executed');
    let age = 19;

    if (age > 18) {
        console.log('eligible for vote');
    } else {
        console.log('not eligible for vote');
    }
}

// function to demostrate  if else if else
function func3() {
    console.log('if else if else block executed');
    // check number is postive, negative or zero
    let num = 10; 

    if (num > 0) {
        console.log('number is positive');
    } else if (num < 0) {
        console.log('number is negative');
    } else {
        console.log('number is zero');
    }
}

// ternary operator explain
function func4() {
    console.log('ternary operator executed');
    // check even or odd
    let num = 10;

    let result = num % 2 ? 'number is even' : 'number is odd';
    console.log(result);
}

// ************* function calling *************func1();

func4();