const buttons = document.querySelectorAll('.todo-tab-card')

buttons[0].classList.add('is-active')

buttons.forEach(button => {
    button.addEventListener('click', e => {
        buttons.forEach(button => {
           button.classList.remove('is-active')
        })
        e.currentTarget.classList.add('is-active')
        let x = button.offsetLeft
        let fx = document.getElementById('todo-tab').offsetWidth
        document.getElementById('todo-tab-button').style.left = x/fx*100 + "%"
    })
})










