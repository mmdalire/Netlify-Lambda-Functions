const fetchUsers = () => {
    //fetch('http://localhost:9000/getusers')
    fetch('/.netlify/functions/getusers')
    .then(response => response.json())
    .then(data => {
        userList = document.querySelector('#users');

        data.forEach(user => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.appendChild(document.createTextNode(user.login));
            link.href = user.html_url;
            link.target = '_blank';
            li.appendChild(link);
            userList.appendChild(li);
        });
    })
}

fetchUsers();