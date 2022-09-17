let content = document.querySelector('#content');

async function creatingUser() {
    let div = document.createElement('div');
    content.append(div);
    let ul = document.createElement('ul');
    let img = document.createElement('img');
    div.append(img);
    div.append(ul);
    await fetch ('https://randomuser.me/api/')
        .then (Response => {
            if (Response.ok) {
                Response.json()
                .then(user => {
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
}

creatingUser();
creatingUser();
creatingUser();