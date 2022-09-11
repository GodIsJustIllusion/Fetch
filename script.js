let body = document.querySelector('body');
let ul = document.createElement('ul');
let img = document.createElement('img');
body.append(img);
body.append(ul);

let createrUser = fetch ('https://randomuser.me/api/');
createrUser 
    .then (Response => {
        if (Response.ok) {
            Response.json().then(user => {
                console.log(user);

                getUser(user);

                img.setAttribute('src', user.results[0].picture.large);

                function getUser(obj) {
                    getUserData(obj);

                    function getUserData(object) {

                        for (let key in object) {

                            if (typeof object[key] === 'object') {
                                getUserData(object[key]);
                                
                            } else {
                                let li = document.createElement('li');
                                ul.append(li);
                                li.innerText = key + ": " + object[key];
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
