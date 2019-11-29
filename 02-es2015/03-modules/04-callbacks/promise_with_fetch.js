var orgdata;

const fetch = require('node-fetch');
fetch('http://awesome-store-server.herokuapp.com/products')
    .then(function(response) {
        //console.log(response);
        if(response.status > 400) {
            throw new Error("Server returned error when fetching data");
        }

        // return response.json()
        test(response.json())
        //     .then(function(data) {
        //         orgdata = data;
        //         //console.log(data);
        //     })
    })
    // .then(function(data) {
    //     orgdata = data;
    //     //console.log(orgdata);
    //     test(data);
    // })
    .catch(function(error) {
        console.log(error);
    });

function test(data) {
console.log("From outside:");
data.then(function(org) {
    console.log(org);
})
}