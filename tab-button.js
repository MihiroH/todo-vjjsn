const buttons = document.querySelectorAll('.todo-tab-card')

buttons[0].classList.add('is-active')

buttons.forEach(button => {
    let x = button.offsetLeft
    button.addEventListener('click', e => {
        buttons.forEach(button => {
           button.classList.remove('is-active')
        })
        e.currentTarget.classList.add('is-active')
        document.getElementById('todo-tab-button').style.left = x + "px"
    })
})

//










