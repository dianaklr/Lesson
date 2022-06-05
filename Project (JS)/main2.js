const userFull = 'userFull'
const container = document.getElementById('container')

const users = JSON.parse(localStorage.getItem(userFull)) || []
            const userDiv = document.createElement('div')
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
        // button.href = `https://jsonplaceholder.typicode.com/users/${users.id}/posts`
        //
        userDiv.append(content, button)
        container.append(userDiv)


        button.onclick = () => {

        const titlePost = 'titlePost'
        fetch('https://jsonplaceholder.typicode.com/users/${users.id}/posts')
            .then(value => value.json())
            .then(posts => {
                for (const post of posts) {
                const postTitle = document.getElementById('postTitle')
                const content = document.createElement('div')

                content.innerText = ` ${post.title},  ${post.id}\n `
                postTitle.append(content)

                }
        })
    }




        //     const button = document.createElement('a');
        //     button.classList = 'button'
        //     button.innerText = 'More information';
        //     button.href = './user-details.html'
        //
        //     block.append(button);
        //
        //     button.onclick = () => {
        //         const list = JSON.parse(localStorage.getItem(userFull)) || []
        //         list.push(user)
        //         localStorage.setItem(userFull,JSON.stringify(user))
        //         button.disabled=true //лище 1 натиснення на кнопку
        //     }
        //     userDiv.append(content, button)
        //     container.append(userDiv)
        // }//onclick

   // })//then

// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
