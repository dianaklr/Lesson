const userFull = 'userFull'
const container = document.getElementById('container')

const users = JSON.parse(localStorage.getItem(userFull)) || []

users.forEach(user => {
            const userDiv = document.createElement('div')
            const content = document.createElement('div')

            content.innerText =  `id - ${user.id}, name - ${user.name},  username - ${user.username},  email - ${user.email}`
            userDiv.append(content)
            container.append(userDiv)
})

