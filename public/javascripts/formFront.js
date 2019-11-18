let isEditing = (titleGlob || descriptionGlob || idGlob) ? true : false;

document.getElementById('title').value = titleGlob;
document.getElementById('description').value = descriptionGlob;

console.log('isEditing', isEditing);

function formSubmit() {

    let errors = '';

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const file = document.getElementById('file').files[0];

    console.log('formSubmit', title, file);
    if (!title) { errors += 'The post has to contain a title<br/>'; }
    if (!description) { errors += 'The post has to contain a description<br/>'; }
    if (!file && !isEditing) { errors += 'The post has to contain an image<br/>'; }

    if (!errors) {
        document.getElementById('errors').innerHTML = '';
        let formData = new FormData();

        formData.append('photo', file);
        formData.append('id', idGlob);
        formData.append('isEditing', isEditing);
        formData.append('title', title);
        formData.append('description', description);

        axios.post('/form/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
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

        console.log('formData', formData);
    } else {
        document.getElementById('errors').innerHTML = errors;
    }
    return false;
}

function formSubmitAuth(isLogging) {
    console.log('formSubmitAuth', isLogging);
    let errors = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = regex.test(String(email).toLowerCase());

    if (!email) { errors += 'Please, enter email<br/>'; }
    if (!password) { errors += 'Please, enter password<br/>'; }
    if (!emailCheck) { errors += 'Please, enter email correctly<br/>'; }

    if (!errors) {
        document.getElementById('errorsAuth').innerHTML = '';
        axios.post(isLogging ? '/users/login' : '/users/register', {email: email, password: password})
            .then(function (response) {
                // handle success
                console.log(response);
                if (response.status === 201) {
                    document.getElementById('errorsAuth').innerHTML = 'User with this email already exists';
                }
                if (response.status === 202) {
                    document.getElementById('errorsAuth').innerHTML = 'User with this email already does not exist';
                }
                if (response.status === 203) {
                    document.getElementById('errorsAuth').innerHTML = 'Email and password are incorrect';
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    } else {
        document.getElementById('errorsAuth').innerHTML = errors;
    }

    return false
}