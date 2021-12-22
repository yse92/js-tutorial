document.getElementById('button1').addEventListener('click',
loadUser);
document.getElementById('button2').addEventListener('click',
loadUsers);
function loadUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            var user = JSON.parse(this.responseText);
            //console.log(user.name);
            var output = '';
            output += '<ul>' +
            '<li>ID: ' +user.id + '</li>' +
            '<li>ID: ' +user.name + '</li>' +
            '<li>ID: ' +user.email + '</li>' +
            '</ul>';
            document.getElementById('user').innerHTML = output;

        }
    }
    xhr.send();

}

function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            //console.log(user.name);
            var output = '';
            for(var i in users){
                output += '<ul>' +
                '<li>ID: ' +users[i].id + '</li>' +
                '<li>ID: ' +users[i].name + '</li>' +
                '<li>ID: ' +users[i].email + '</li>' +
                '</ul>';
            }

            document.getElementById('users').innerHTML = output;

        }
    }
    xhr.send();

}