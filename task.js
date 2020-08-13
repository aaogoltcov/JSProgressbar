'use strict';

document.getElementsByTagName('input').file.onchange = function(event) {
    let file = this.files[0];
    document.getElementById('send').onclick = function() {
        const request = new XMLHttpRequest
        request.upload.onprogress = function (event) {
            const progress = document.getElementById( 'progress' );
            progress.value = (event.loaded / event.total).toFixed(1);
        };
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
        request.send(file);
        return false;
    };
};