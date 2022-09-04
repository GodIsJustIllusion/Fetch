let body = document.querySelector('body');
let ul = document.createElement('ul');
body.append(ul);

let createrUser = fetch ('https://randomuser.me/api/');
createrUser 
    .then (Response => {
        if (Response.ok) {
            Response.text().then(user => {
                console.log(user);

                getUser(user);

                function getUser(obj) {
                    getUserData(obj);

                    function getUserData(object) {

                        for (let key in object) {

                            if (typeof object[key] === 'object') {
                                getUserData(object[key]);
                            }

                            else {
                                let li = document.createElement('li');
                                ul.append(li);
                                li.innerText = object[key];
                            }
                        }
                    }
                }
            })
            
        }
    })
    .catch(error => {
        console.log(error);
    });
