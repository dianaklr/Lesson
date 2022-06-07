const post = 'post'

const postAll = JSON.parse(localStorage.getItem(post)) || []

const postOfUser = postAll.map(item => {
    const container = {};
    container[`userId`] = item.userId;
    container[`id`] = item.id;
    container[`title`] = item.title;
    container[`body`] = item.body;
    return container;
})


for (const postOfUserElement of postOfUser) {

    // for (const postOfUserElementKey in postOfUserElement) {
    const content1 = document.createElement('div')
    const userId = document.createElement('div')
    const id = document.createElement('div')
    const title = document.createElement('div')
    const body = document.createElement('div')

    userId.append(`user id:  ${postOfUserElement.userId} `)
    id.append(`id:   ${postOfUserElement.id}`)
    title.append(`title:  ${postOfUserElement.title}`)
    body.append(`body:   ${postOfUserElement.body}`)

    content1.append(userId, id, title, body)
    document.body.append(content1)
    content1.classList = 'formForOnePost'


    fetch('https://jsonplaceholder.typicode.com/posts/3/comments')
        .then(value => value.json())
        .then(details => {
            for (const detail of details) {
                const block = document.createElement('div')
                const postId = document.createElement('div')
                const postPostId = document.createElement('div')
                const postName = document.createElement('div')
                const postEmail = document.createElement('div')
                const postBody = document.createElement('div')


                postPostId.innerText =   `postId - ${detail.postId}`
                postId.innerText =  `id - ${detail.id}`
                postName.innerText =   `name - ${detail.name}`
                postEmail.innerText =   `email - ${detail.email}`
                postBody.innerText =   `body - ${detail.body}`

                // block.innerText = `${detail}`
                const hr = document.createElement('hr')


                block.append(postId,  postPostId,  postName, postEmail,  postBody)
                 postId.classList = 'postId'
                 postPostId.classList = 'postPostId'
                 postName.classList = 'postName'
                 postEmail.classList = 'postEmail'
                 postBody.classList = 'postBody'



                document.body.append(block)
                block.classList = 'blockForComents'
                const containerForComents = document.getElementById('containerForComents')
                containerForComents.append(block)



            }

        })
}



/*8 Ниже информации про пост, вывести все комментарии текущего поста
(эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
*/













