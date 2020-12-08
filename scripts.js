window.onload = function (){
  addEventListener('click', changeSelectedColor)

  function changeSelectedColor(event){
    let oldselectedColor = document.querySelector('.selected')
    let paintColor = oldselectedColor.classList[1]
    let newselectedColor = event.target

    if(newselectedColor.classList.contains('color')){
    oldselectedColor.classList.remove('selected')
    newselectedColor.className += ' selected'
    }
    else if(newselectedColor.classList.contains('pixel')){
      newselectedColor.style.backgroundColor = `${paintColor}`
    }
  }

  let button = document.querySelector('#clear-board')

  button.addEventListener('click', cleartable)

  function cleartable(){
    let pixels = document.querySelectorAll('.pixel')

    for(let index = 0; index < pixels.length; index++){
      pixels[index].style.backgroundColor = "white";
    }
  }
}
