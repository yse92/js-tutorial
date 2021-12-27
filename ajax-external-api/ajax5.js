document.getElementById('button1').addEventListener('click',
loadUsers);

function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.php', true);

    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            //console.log(user.name);
            var output = '';
            for(var i in users){
                output += '<ul>' +
                '<li>ID: ' +users[i].id + '</li>' +
                '<li>ID: ' +users[i].name + '</li>' +
                '</ul>';
            }

            document.getElementById('users').innerHTML = output;

        }
    }
    xhr.send();

}