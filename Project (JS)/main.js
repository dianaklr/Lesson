const userFull = 'userFull'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        for (const user of users) {
            let block = document.createElement('div')
            document.body.append(block)

            localStorage.setItem('userFull', JSON.stringify([]));
            const container = document.getElementById('container')
            container.classList = 'container'

                    const userDiv = document.createElement('div')
                    userDiv.classList = 'userInfo'
                    const content = document.createElement('div')

                    content.innerText = `id - ${user.id},\n name - ${user.name}\n `

                    const button = document.createElement('a');
                    button.classList = 'button'
                    button.innerText = 'More information';
                    button.href = './user-details.html'

                    block.append(button);
                    button.onclick = () => {
                        const list = JSON.parse(localStorage.getItem(userFull)) || []
                        list.push(user)
                        localStorage.setItem(userFull,JSON.stringify(user))
                        button.disabled=true //лище 1 натиснення на кнопку
                }

                userDiv.append(content, button)
                 container.append(userDiv)
            }//onclick
    })//then


