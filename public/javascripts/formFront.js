function formSubmit() {


    const title = document.getElementById('title').value;
    const file = document.getElementById('file').files[0];

    console.log('formSubmit', title, file);

    let formData = new FormData();

    formData.append("photo", file);
    // fetch('/upload/image', {method: "POST", body: formData});
    //{ 'file': formData }
    axios({
        method: 'post',
        url: '/form/file',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
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

    // fetch('/form/file', {
    //     method: 'POST',
    //     body: formData
    // });

    return false;
}