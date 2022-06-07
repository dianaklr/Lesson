const userFull = 'userFull'
const container = document.getElementById('container')

const users = JSON.parse(localStorage.getItem(userFull)) || []
            const userDivNew = document.createElement('div')
            const content = document.createElement('div')

            content.innerText = `id -  ${users.id},\n
                                name - ${users.name},
                                username - ${users.username},\n
                                 address: 
                                 street  - ${users.address.street}, 
                                 suite  - ${users.address.suite}, 
                                 city  - ${users.address.city}, 
                                 zipcode  - ${users.address.zipcode},\n 
                                 geo:
                                 lat  - (${users.address.geo.lat}), 
                                 lng  - (${users.address.geo.lng}),
                                 phone -  ${users.phone},
                                 website -  ${users.website}\n
                                 company:
                                  name -  ${users.company.name},
                                  catchPhrase -  ${users.company.catchPhrase},
                                  bs -  ${users.company.bs}.
                                 `

        const button = document.createElement('button')
        button.innerText = 'post of current user'
        button.classList = 'button'


    userDivNew.append(content, button)
    container.append(userDivNew)
    userDivNew.classList = "infoUser"
    content.classList = "textAboutUser"
    button.classList = "buttonUser"


        button.onclick = () => {
        button.style.backgroundColor = "#c95b5b"

       fetch('https://jsonplaceholder.typicode.com/users/' + users.id + '/posts')
            .then(value => value.json())
            .then(posts => {
                for (const post of posts) {
                    const postTitle = document.getElementById('postTitle')
                    const contentPost = document.createElement('div')
                    contentPost.innerText = ` ${post.title}\n `
                    postTitle.append(contentPost)
                    contentPost.classList = 'contentPost'

                    const postButton = document.createElement('button')
                    postButton.innerText='read all'
                    contentPost.append(postButton)

                    const info = 'info'
                    postButton.onclick = () => {
                        const allAboutPost = JSON.parse(localStorage.getItem(info)) || []
                        allAboutPost.push(post)
                        localStorage.setItem('post', JSON.stringify([post]));
                        button.disabled=true //лище 1 натиснення на кнопку
                        location.href = 'post-details.html?data=' + JSON.stringify(post);

                    }
                }
            })
    }


/*
6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
которая имеет детальную информацию про текущий пост.
*/


