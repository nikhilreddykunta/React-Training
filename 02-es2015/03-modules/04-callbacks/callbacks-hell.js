function sum(x,y,cb) {
    setTimeout(function() {
        //return x+y;
        cb(x+y);
    },2000)
}

console.log(sum(12,13, function(result) {
    console.log("Result is", result);
    sum(12,13, function(result) {
        console.log("Result is", result);
    
    
    })
    

}));
