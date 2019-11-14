//const axios = require('axios');

console.log('Client-side code running', title);

// const button = document.getElementById('myButton');
// button.addEventListener('click', function(e) {
//     console.log('button was clicked');
//     axios.get('/test')
//         .then(function (response) {
//             // handle success
//             console.log(response);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//         .finally(function () {
//             // always executed
//         });
//});

function f(arg) {
    console.log('submit', arg);
    axios.post('/form', {'qwe': 'qwerty'})
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}



// Make a request for a user with a given ID
