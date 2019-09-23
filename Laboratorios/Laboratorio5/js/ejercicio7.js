
function Fibonacci(num){

    var a = 0;
    var b = 1;
    var c = 0;
    console.log (0); console.log(1);

    for (var i = 0; i < num-2; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
