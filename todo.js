//okay lets start
// okay
// First, use addEventListenr to get input text like "tab-button".
// and use querySelector because input DOM is only one.

const form = document.querySelector('#todo-form') // ← forget prefix id name.

form.addEventListener('submit', e => {
  // it stops this default event. is this preventing submitting form from reloading?
  // yes. you can use it when you want to prevent several event.
  // check out  31 lines. I wrote a example.
  //okay i get it now, the button cant be clicked right?
  // no. you can click the button but it doesn't make any changes.
  // thanks www. www
  // let's continue. okay
  e.preventDefault() 

  console.log({ e })  // it is same and better than below.
  console.log({ e: e }) // yes this is longer. what if you dont want the web to reload at all when the form is submitted

  // used generally, but it makes me struggle to find log when the file size is big.
  // check out the difference!! but when i submit it, it resets www
  // okay, because you submitted the form. so you should stop default event.
  //okay, so what should we do now?
  // get a input DOM and get its title.
  const input = document.querySelector('#input-title')
  const title = input ? input.value : null // okay i understand this one

  // validating like this makes your program better, because it doesn't make any unexpected changes. okay i will get used to that validation.
  if (!title) {
    //what does this mean?
    // makes this function end forcibly
    // okay
    // if you want to output a error log
    // thanks www, yess www
    // writing in English is so fun for me. yesss, you've done a great job. thank you so much w. www
    console.error('Error: title is empty or can not find an input Element.')
    // I think "return" is not necessary if you use console.error funcion. 
    // because all js scripts will finish. okayy
    // if it is correct, it doesn't matter whether you use it or not.
    // sorryyyyy. I'm hungry www. so please wait for about 30 minutes lol. okayyy thank youuu
    // yessss thanks www. okay www
    // return 
  }
  console.log({ title })

  // next
  const list = document.querySelector('#mid-container-list')
  const item = document.createElement('div')
  const button = document.createElement('div')
  button.setAttribute('type', 'button')
  button.setAttribute('class', 'temp-delete-button')
  button.innerText = 'Delete'
  button.addEventListener('click', () => {
    //why are we using console in here?
    // I want to confirm whether the button is clicked or not. okay
    // but it is not working... yea it doesnt work
    // okay, I understand now. HTML layer causes this happen. ohhhh
    // the no todo list one?? the one with the box image, 
    // sorry what do you mean?? okay i already fix it
    // more specifically, z-index: -1; causes this happen. so you should delete them and add z-index: 1; to #left-container. oh okayy
    console.log('ok') 
    item.remove()
    if (document.getElementById('mid-container-list').innerHTML == ""){
      document.getElementById('mid-container-no-list').style.display = "unset"
    }
  })

  item.innerText = title
  item.append(button)
  list.append(item)
  document.getElementById('mid-container-no-list').style.display = "none"


// no its okayyy wwww
//okay lets continue first, then i will try to develop it.
// usually when you append div, did you create the div template and style in html first, then inject the data, or you create the div from js?
// yes. it may look like this. sorry if my program has a mistake. its okay www, 
// what is tho?? though thanks. yess
// please check out!
// <div id="mid-container-todo-list">
//   <div>{{ title!! }}</div>
// </div>


  // web reloads yet?
  // okay wait let me try it again yes it doesnt reload.
  // in other words, no problem?? what did you do? look at 9 lines.
  // yes the divs append fine.
})







