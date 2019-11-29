function sum(x,y,cb) {
    setTimeout(function() {
        //return x+y;
        cb(x,y);
        test();
    },2000)
}

function cb(x,y) {
    console.log(x+y);
}

function test() {
    console.log("Hi");
}

sum(10,12,cb);

