//const axios = require('axios');

console.log('Client-side code running', data);
for(let i = 0; i < data.length; i++) {
    console.log('for loop', data[i]);
    // if(data[i]._id === id) {
    //     delete data[i];
    // }
}

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

function edit(id) {
    //window.location.href = "/form";
    let title = '';
    let description = '';
    for(let i = 0; i < data.length; i++) {
        if(data[i]._id === id) {
            //console.log('delete delete');
            //delete data[i];
            title = data[i].title;
            description = data[i].body;
        }
    }
    axios.post('/form', {id: id, title: title, description : description})
        .then(function (response) {
            // handle success
            console.log(response);
            if (response.status === 200) {
                window.location.href = "/form";
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

function remove(id) {
    console.log('id', id);
    axios.post('/remove', {'postId': id})
        .then(function (response) {
            // handle success
            console.log(response);
            if (response.status === 200) {
                window.location.href = "/";
                for(let i = 0; i < data.length; i++) {
                    if(data[i]._id === id) {
                        console.log('delete delete');
                        //delete data[i];
                    }
                }
            }
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
