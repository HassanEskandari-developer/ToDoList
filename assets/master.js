let btn = document.querySelector('.button')
let _input = document.querySelector('.form__input')
let _todolist =document.querySelector('.toDoList')
let _buttonEdit = document.querySelector('.button_edit')

btn.addEventListener('click',()=>{
    // let _inputValue= _input.value

    if(_input.value==''){
        alert('fill the  input')
    }else{
        let li = document.createElement('li')
    li.innerHTML=_input.value
    _todolist.appendChild(li)
    // _edit(li ,_inputValue)
    
    
    li.addEventListener('click',(e)=>{
        e.target.remove()
    })
    _input.value=''
    _input.focus()
    

    
    }

    
})


