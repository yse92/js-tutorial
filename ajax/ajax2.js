document.getElementById('button1').addEventListener('click',
loadUser);

function loadUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);
}