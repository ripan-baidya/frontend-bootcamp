// ********** function in js **********

// type 1: no parameters and return nothing
function func1() {
    console.log('no parameters and return nothing');
    console.log('hello');
}


// type 2: no parameters but return something
function func2() {
    console.log('no parameters but return something');
    return 'hello';
}

// type 3: parameters but return nothing
function func3(a, b) {
    let sum = a + b;
    console.log('parameters but return nothing');
    console.log(sum);
}

// type 4: parameters and return something
function func4(a, b) {
    console.log('take parameters and return something');
    let sum = a + b;
    return sum;
}


// ***** function calling *****
func1();

console.log(func2());

func3(10, 20);

console.log(func4(10, 20));